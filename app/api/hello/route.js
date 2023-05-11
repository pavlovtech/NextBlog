import { NextResponse } from 'next/server'
import { currentUser } from '@clerk/nextjs'

export async function GET() {
  const user = await currentUser()

  if (!user) {
    return NextResponse.json({ message: 'You are not logged in.' })
  }

  return NextResponse.json({ name: user.firstName })
}
