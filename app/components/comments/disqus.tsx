"use client";
import { DiscussionEmbed } from 'disqus-react';
import { Post, allPosts } from 'contentlayer/generated'
import { usePathname } from 'next/navigation';

export function Disqus({post}: {post: Post}) {
    const pathname = usePathname();
    console.log('--->', pathname);
    return (
        <DiscussionEmbed
        shortname='Alex Pavlov - blog'
        config={
          {
            url: pathname,
            identifier: post._id,
            title: post.title,
            language: 'en_US'
          }
        }
      />
    );
}