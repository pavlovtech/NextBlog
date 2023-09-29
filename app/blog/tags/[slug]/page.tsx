import { compareDesc, format, parseISO } from 'date-fns'
import { Post, allPosts } from 'contentlayer/generated'
import { getMDXComponent } from 'next-contentlayer/hooks'
import { PostCard } from 'app/components/post-card';
import { notFound } from 'next/navigation';

const TagPage = ({ params }: { params: { slug: string } }) => {

    const tag = params.slug;

    const posts = allPosts.filter(post => post.tags?.includes(tag)).sort((a, b) =>
        compareDesc(new Date(a.publishedAt), new Date(b.publishedAt))
    );

    if (!posts) notFound();

    return (
        <div>
            <h2 className="flex pb-6 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-gray-100 sm:text-3xl md:text-5xl">
                {tag}
            </h2>
            <hr className="border-gray-200 dark:border-gray-700" />
            {!posts.length && 'No posts found.'}

            {posts.map((post, idx) => (
                <PostCard key={idx} {...post} />
            ))}
        </div>
    )
}

export default TagPage
