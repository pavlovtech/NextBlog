import { blogPostsMetatata } from '@/app/server/blog-posts';
import { redirect } from 'next/navigation';
import { MDXRemote } from 'next-mdx-remote/rsc';
import matter from 'gray-matter';
import path from 'path';

export default async function Page({ params }: { params: { slug: string } }) {

    const slug = params.slug;

    let posts = await blogPostsMetatata;
    
    if(!posts.map(m => m.slug).includes(slug)) {
        redirect('/blog')
    }

    const fullPath = path.join(process.cwd(), `data/blog/${params.slug}.mdx`);

    var result = matter.read(fullPath);


    {/* @ts-expect-error Server Component */}
    return <MDXRemote source={result.content} />;
}