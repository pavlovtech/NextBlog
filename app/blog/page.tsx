import Link from "next/link";
import { compareDesc, format, parseISO } from "date-fns";
import { allPosts, Post } from "contentlayer/generated";
import { Suspense } from "react";
import { PostCard } from "app/components/post-card";
import { AboutMe } from "app/components/about-me";
import { IntroLinks } from "app/components/intro-links";

export const metadata = {
  title: 'Alex Pavlov - blog',
  description: 'Alex Pavlov - blog about programming',
  languages: {
    'en-US': '/en-US',
  },
  keywords: ['Alex Pavlov', 'Blog', '.NET', 'C#', 'JavaScript'],
  creator: 'Alex Pavlov',
  category: 'technology'
}

export default function Home() {

  const featuredPosts = allPosts
    .filter(p => p.status == 'published' && p?.featured == 'yes')
    .sort((a, b) => compareDesc(new Date(a.publishedAt), new Date(b.publishedAt)));

  const posts = allPosts
    .filter(p => p.status == 'published' && (p?.featured == 'no' || !p?.featured))
    .sort((a, b) => compareDesc(new Date(a.publishedAt), new Date(b.publishedAt)));

  return (
    <>
      <section className="mb-12 flex flex-col items-center gap-x-12 xl:flex-row">
        <AboutMe />
        <IntroLinks />
      </section>
      <section>
        <h2 className="flex pb-6 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-gray-100 sm:text-3xl md:text-5xl">
          Featured
        </h2>
        <hr className="border-gray-200 dark:border-gray-700" />
        {!featuredPosts.length && 'No posts found.'}

        {featuredPosts.map((post, idx) => (
          <PostCard key={idx} {...post} />
        ))}
      </section>
      <section>
        <h2 className="flex pb-6 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-gray-100 sm:text-3xl md:text-5xl">
          Latest
        </h2>
        <hr className="border-gray-200 dark:border-gray-700" />
        {!posts.length && 'No posts found.'}

        {posts.map((post, idx) => (
          <PostCard key={idx} {...post} />
        ))}
      </section>
    </>
  );
}
