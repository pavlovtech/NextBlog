import { deletePost } from 'app/admin-backend';
import { NextResponse } from 'next/server';

export async function DELETE(request: Request,
    {
      params,
    }: {
      params: { slug: string };
    },) {

    const sha = request.headers.get('sha')!
    console.log('---------> del route', sha, params.slug);
    const resp = await deletePost(params.slug, sha);

    console.log(resp);
    return NextResponse.json(resp);
}