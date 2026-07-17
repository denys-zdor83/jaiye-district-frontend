"use client";

import { PostCardHorizontal } from "@/components/ui/PostCardHorizontal";
import { Pagination } from "@/components/ui/Pagination";
import { usePagination } from "@/hooks/usePagination";
import type { Post } from "@/types";

interface PostsListClientProps {
  posts: Post[];
}

export function PostsListClient({ posts }: PostsListClientProps) {
  const { currentPage, totalPages, pageItems, goToPage } = usePagination(
    posts,
    4
  );

  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="space-y-8">
        {pageItems.map((post) => (
          <PostCardHorizontal key={post.id} post={post} />
        ))}
      </div>
      <div className="mt-12">
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={goToPage}
        />
      </div>
    </div>
  );
}
