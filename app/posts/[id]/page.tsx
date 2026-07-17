import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Calendar, Clock, ArrowLeft, ChevronLeft, ChevronRight } from "lucide-react";
import type { Metadata } from "next";
import { POSTS } from "@/lib/data/posts";

interface PostPageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return POSTS.map((post) => ({ id: post.slug }));
}

export async function generateMetadata({
  params,
}: PostPageProps): Promise<Metadata> {
  const { id } = await params;
  const post = POSTS.find((p) => p.slug === id);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
  };
}

function renderContent(content: string) {
  return content.split("\n\n").map((para, i) => {
    const isBoldHeading = para.startsWith("**") && para.endsWith("**");
    if (isBoldHeading) {
      return (
        <h3
          key={i}
          className="mt-8 mb-3 font-serif text-xl font-bold text-foreground"
        >
          {para.replace(/\*\*/g, "")}
        </h3>
      );
    }
    if (para.includes("**")) {
      return (
        <p
          key={i}
          className="text-lg leading-relaxed text-foreground/80"
          dangerouslySetInnerHTML={{
            __html: para.replace(
              /\*\*(.*?)\*\*/g,
              "<strong>$1</strong>"
            ),
          }}
        />
      );
    }
    return (
      <p key={i} className="text-lg leading-relaxed text-foreground/80">
        {para}
      </p>
    );
  });
}

export default async function SinglePostPage({ params }: PostPageProps) {
  const { id } = await params;
  const postIndex = POSTS.findIndex((p) => p.slug === id);
  const post = POSTS[postIndex];

  if (!post) notFound();

  const prevPost = postIndex > 0 ? POSTS[postIndex - 1] : null;
  const nextPost = postIndex < POSTS.length - 1 ? POSTS[postIndex + 1] : null;

  return (
    <div className="min-h-screen bg-background pb-20 pt-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb nav */}
        <div className="flex items-center gap-4 py-6">
          <Link
            href="/posts"
            className="flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
          >
            <ArrowLeft size={16} /> Back to Posts
          </Link>
          <span className="text-border">|</span>
          <Link
            href="/"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
          >
            Home
          </Link>
        </div>

        {/* Hero image */}
        <div className="mb-8 overflow-hidden rounded-2xl shadow-xl">
          <Image
            src={post.image}
            alt={post.title}
            width={800}
            height={400}
            className="h-64 w-full object-cover md:h-80"
            priority
          />
        </div>

        {/* Meta */}
        <div className="mb-4 flex flex-wrap items-center gap-4">
          <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-primary">
            {post.category}
          </span>
          <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
            <Calendar size={12} />
            {post.date}
          </span>
          <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
            <Clock size={12} />
            {post.time}
          </span>
        </div>

        {/* Title */}
        <h1 className="mb-8 font-serif text-3xl font-bold leading-tight text-foreground md:text-4xl lg:text-5xl">
          {post.title}
        </h1>

        {/* Pull quote */}
        <blockquote className="my-8 rounded-r-xl border-l-4 border-primary bg-secondary/40 py-2 pl-6">
          <p className="font-serif text-xl italic leading-relaxed text-foreground/80">
            {post.excerpt}
          </p>
        </blockquote>

        {/* Article body */}
        <div className="space-y-5">{renderContent(post.content)}</div>

        {/* Divider */}
        <div className="my-12 flex items-center gap-4">
          <div className="h-px flex-1 bg-border" />
          <div className="h-3 w-3 rounded-full bg-primary" />
          <div className="h-px flex-1 bg-border" />
        </div>

        {/* Post nav */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {prevPost ? (
            <Link
              href={`/posts/${prevPost.slug}`}
              className="group rounded-xl border border-border bg-card p-5 text-left transition-all hover:border-primary/50 hover:shadow-md"
            >
              <p className="mb-2 flex items-center gap-1 text-xs text-muted-foreground">
                <ChevronLeft size={12} /> Previous Post
              </p>
              <p className="line-clamp-2 font-serif font-semibold text-foreground transition-colors group-hover:text-primary">
                {prevPost.title}
              </p>
            </Link>
          ) : (
            <div />
          )}
          {nextPost ? (
            <Link
              href={`/posts/${nextPost.slug}`}
              className="group rounded-xl border border-border bg-card p-5 text-right transition-all hover:border-primary/50 hover:shadow-md"
            >
              <p className="mb-2 flex items-center justify-end gap-1 text-xs text-muted-foreground">
                Next Post <ChevronRight size={12} />
              </p>
              <p className="line-clamp-2 font-serif font-semibold text-foreground transition-colors group-hover:text-primary">
                {nextPost.title}
              </p>
            </Link>
          ) : (
            <div />
          )}
        </div>
      </div>
    </div>
  );
}
