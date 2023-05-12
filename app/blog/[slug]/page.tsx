import { blogPostsMetatata } from '@/app/server/blog-posts';
import { redirect } from 'next/navigation';
import { MDXRemote } from 'next-mdx-remote/rsc';
import matter from 'gray-matter';
import path from 'path';
import { SerializeOptions } from 'next-mdx-remote/dist/types';
import remarkGfm from "remark-gfm";
import '../../globals.css'

export default async function Page({ params }: { params: { slug: string } }) {

    const slug = params.slug;

    let posts = await blogPostsMetatata;
    
    if(!posts.map(m => m.slug).includes(slug)) {
        redirect('/blog')
    }

    const fullPath = path.join(process.cwd(), `data/blog/${params.slug}.mdx`);

    var result = matter.read(fullPath);

    let optionsInstance: SerializeOptions = { 
        mdxOptions: {
            remarkPlugins: [remarkGfm],
            rehypePlugins: [],
            format: 'mdx',
      },
      parseFrontmatter: true
    };

    return <div className='container'>
    <h1>Test</h1>
    {/* @ts-expect-error Server Component */}
    <MDXRemote options={optionsInstance} source={result.content} />
    </div>;
}