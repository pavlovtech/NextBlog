import { Post } from "contentlayer/generated";

export type PostWithStatus = Post & {
    status: string;
    sha: string;
}