import { blogPostsMetatata } from '@/app/server/blog-posts';
import dynamic from 'next/dynamic';
import { redirect } from 'next/navigation';

export default async function Page({ params }: { params: { slug: string } }) {

    const slug = params.slug;

    let posts = await blogPostsMetatata;
    
    if(!posts.map(m => m.slug).includes(slug)) {
        redirect('/blog')
    }

    const MarkdownComponent = dynamic(() => import(`../../../data/blog/${params.slug}.mdx`));

    return <MarkdownComponent />;
}