import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { BlogCard } from "@/components/ui/BlogCard";
import { Button } from "@/components/ui/Button";
import { POSTS } from "@/lib/data/posts";

export function LatestPostsSection() {
  const latestPosts = POSTS.slice(0, 4);

  return (
    <section className="bg-secondary/30 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          label="Fresh From the Kitchen"
          title="Latest Posts"
          subtitle="Recipes, techniques, cultural stories, and culinary adventures — served fresh."
        />
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {latestPosts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
        <div className="mt-12 text-center">
          <Link href="/posts">
            <Button variant="outline" size="lg">
              View All Posts <ArrowRight size={18} />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
