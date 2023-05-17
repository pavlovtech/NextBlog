
import { upsertPost, deletePost, getPost } from 'app/admin-backend';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    const req = await request.json();

    //console.log('req', req);

    const resp = await upsertPost(req.fileName, req.content, req?.sha);
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

export async function DELETE(request: Request) {
    const req = await request.json();

    console.log('req', req);

    const resp = await deletePost(req.fileName, req.sha);
    return NextResponse.json(resp.data);
}
