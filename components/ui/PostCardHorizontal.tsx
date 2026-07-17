import Image from "next/image";
import Link from "next/link";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import type { Post } from "@/types";

interface PostCardHorizontalProps {
  post: Post;
}

export function PostCardHorizontal({ post }: PostCardHorizontalProps) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all duration-300 hover:shadow-lg">
      <div className="grid grid-cols-1 sm:grid-cols-5">
        <div className="relative h-52 overflow-hidden sm:col-span-2 sm:h-auto">
          <Image
            src={post.image}
            alt={post.title}
            fill
            sizes="(max-width: 640px) 100vw, 40vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        <div className="flex flex-col justify-between p-6 sm:col-span-3">
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-primary">
              {post.category}
            </span>
            <h2 className="mt-2 mb-3 font-serif text-xl font-bold text-foreground transition-colors group-hover:text-primary md:text-2xl">
              {post.title}
            </h2>
            <p className="line-clamp-3 text-sm leading-relaxed text-muted-foreground">
              {post.excerpt}
            </p>
          </div>
          <div className="mt-5 flex items-center justify-between border-t border-border pt-4">
            <div className="flex items-center gap-4 text-xs text-muted-foreground">
              <span className="flex items-center gap-1.5">
                <Calendar size={12} />
                {post.date}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock size={12} />
                {post.time}
              </span>
            </div>
            <Link
              href={`/posts/${post.slug}`}
              className="flex items-center gap-1 text-sm font-semibold text-primary transition-all hover:gap-2"
            >
              Read More <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}
