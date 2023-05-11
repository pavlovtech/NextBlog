export const runtime = 'edge';
import dynamic from 'next/dynamic';

export default async function Page({ params }: { params: { slug: string } }) {

    const slug = params.slug;

    const MdxContent = dynamic(() => import(`./${slug}.mdx`));

    return <MdxContent></MdxContent>;
}