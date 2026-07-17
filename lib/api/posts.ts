import type { Post } from "@/types";
import { POSTS } from "@/lib/data/posts";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export async function fetchPosts(): Promise<Post[]> {
  if (!API_URL) {
    return POSTS;
  }
  try {
    const response = await fetch(`${API_URL}/posts`, { cache: "no-store" });
    if (!response.ok) throw new Error(`HTTP error: ${response.status}`);
    return response.json() as Promise<Post[]>;
  } catch {
    return POSTS;
  }
}

export async function fetchPostBySlug(slug: string): Promise<Post | undefined> {
  if (!API_URL) {
    return POSTS.find((p) => p.slug === slug);
  }
  try {
    const response = await fetch(`${API_URL}/posts/${slug}`, {
      cache: "no-store",
    });
    if (!response.ok) throw new Error(`HTTP error: ${response.status}`);
    return response.json() as Promise<Post>;
  } catch {
    return POSTS.find((p) => p.slug === slug);
  }
}
