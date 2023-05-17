
import { createNewPost, getPost } from 'app/admin-backend';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    const req = await request.json();
    const resp = await createNewPost(req.slug, req.post);
    return NextResponse.json(resp.data);
}

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const slug = searchParams.get('slug');
    const resp = await getPost(slug!);
    let buff = Buffer.from(resp.content, 'base64');
    let text = buff.toString('utf-8');
    return NextResponse.json({
        content: text,
        path: resp.path,
        sha: resp.sha
    });
}