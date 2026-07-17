import type { Metadata } from "next";
import { PostsListClient } from "@/components/posts/PostsListClient";
import { POSTS } from "@/lib/data/posts";

export const metadata: Metadata = {
  title: "All Posts",
  description:
    "Browse all our Nigerian and African food recipes, stories, and culinary culture.",
};

export default function PostsPage() {
  return (
    <div className="min-h-screen bg-background pb-20 pt-24">
      {/* Page hero */}
      <div className="relative h-48 overflow-hidden bg-foreground md:h-64">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1638436684761-7e59f8a9072f?w=1400&h=400&fit=crop&auto=format)",
          }}
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Jaiyé District
          </span>
          <h1 className="font-serif text-3xl font-bold text-white md:text-5xl">
            All Posts
          </h1>
          <p className="mt-2 text-sm text-white/60">
            Recipes · Stories · Culture · Community
          </p>
        </div>
      </div>

      {/* Posts list (client component handles pagination) */}
      <PostsListClient posts={POSTS} />
    </div>
  );
}
