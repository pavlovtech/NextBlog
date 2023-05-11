'use server';

import { auth } from '@clerk/nextjs'
import { posts } from '../../../db/schema';;
import db from './db';

// import { connect } from '@planetscale/database'
// const config = {
//   host: process.env.PLANETSCALE_DB_HOST,
//   username: process.env.PLANETSCALE_DB_USERNAME,
//   password: process.env.PLANETSCALE_DB_PASSWORD
// }

// const conn = connect(config);


export async function getPosts() {
  const { userId } = auth();
  return await db.select().from(posts);
}
