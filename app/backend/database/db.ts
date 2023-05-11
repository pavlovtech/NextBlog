import { drizzle } from "drizzle-orm/planetscale-serverless";

import { connect } from '@planetscale/database'
const config = {
  host: process.env.PLANETSCALE_DB_HOST,
  username: process.env.PLANETSCALE_DB_USERNAME,
  password: process.env.PLANETSCALE_DB_PASSWORD
}

const conn = connect(config);

const db = drizzle(conn);

export default db;