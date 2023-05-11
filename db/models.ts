import { InferModel } from "drizzle-orm";
import { posts } from "./schema";

export type Post = InferModel<typeof posts>;
export type NewPost = InferModel<typeof posts, 'insert'>;