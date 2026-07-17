import Image from "next/image";
import Link from "next/link";
import { Calendar, ArrowRight } from "lucide-react";
import type { Post } from "@/types";

interface BlogCardProps {
  post: Post;
}

export function BlogCard({ post }: BlogCardProps) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="relative h-52 overflow-hidden">
        <Image
          src={post.image}
          alt={post.title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <span className="text-xs font-semibold uppercase tracking-widest text-primary">
          {post.category}
        </span>
        <h3 className="mt-2 mb-3 line-clamp-2 font-serif text-xl font-bold text-foreground transition-colors group-hover:text-primary">
          {post.title}
        </h3>
        <p className="mb-4 line-clamp-3 flex-1 text-sm leading-relaxed text-muted-foreground">
          {post.excerpt}
        </p>
        <div className="flex items-center justify-between">
          <span className="flex items-center gap-1 text-xs text-muted-foreground">
            <Calendar size={12} />
            {post.date}
          </span>
          <Link
            href={`/posts/${post.slug}`}
            className="flex items-center gap-1 text-sm font-semibold text-primary transition-all hover:gap-2"
            aria-label={`Read more about ${post.title}`}
          >
            Read More <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </article>
  );
}
