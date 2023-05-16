
import { createNewPost } from 'app/admin-backend';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    const req = await request.json();
    const resp = await createNewPost(req.slug, req.post);
    return NextResponse.json(resp.data);
}