import { upsertPost, getPost, uploadFile } from 'app/admin-backend';
import { revalidatePath } from 'next/cache';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    const data = await request.formData()
    const file: File | null = data.get('file') as unknown as File

    if (!file) {
        return NextResponse.json({ success: false })
    }

  const resp = await uploadFile(file);
  return NextResponse.json(resp.data);
}