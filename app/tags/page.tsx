'use client';
import Link from "next/link";
import { compareDesc, format, parseISO } from "date-fns";
import { allPosts, Post } from "contentlayer/generated";
import Tag from "../components/tag";


export default function TagsPage() {
  const allTags = allPosts.map(post => post.tags).flat()!;

  const tags = [...new Set(allTags)];

  return (
    <div className="space-y-2 bg-transparent bg-opacity-20 p-2 transition duration-200 hover:rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
      {tags.map(tag => <Tag text={tag!} />)}
    </div>
  );
}
