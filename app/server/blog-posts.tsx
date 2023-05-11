import matter from "gray-matter";
import path from "path";
import { promises as fs } from 'fs'
import { Post } from '../../models/post';

const getBlogPostsMetadata = async(): Promise<Post[]> => {

    console.log('getBlogPostsMetadata');

    const dir = path.join(process.cwd(), '/data/blog');
    const fileNames = await fs.readdir(dir);
    const filePaths = fileNames.map(fileName => ({
      fullPath: path.join(dir, fileName),
      fileName
    }));
    console.log(filePaths);
  
    let posts = filePaths.map((fileInfo) => {
      const data = matter.read(fileInfo.fullPath).data;
  
      return {
        ...data,
        slug: fileInfo.fileName.replace('.mdx', '')
      };
    });
    return posts as Post[];
}

export const blogPostsMetatata = getBlogPostsMetadata();


  