import { Octokit, App } from "octokit";

export async function createNewPost(slug: string, post: string) {
    const octokit = new Octokit({ auth: `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` });
 
   
    let buff = Buffer.from(post);
    let base64data = buff.toString('base64')


    var resp = await octokit.request(`PUT /repos/pavlovtech/nextblog/contents/posts/${slug}.mdx`, {
        owner: 'pavlovtech',
        repo: 'NextBlog',
        path: './posts',
        message: 'my commit message',
        committer: {
          name: 'Alex Pavlov',
          email: 'alexpppavlov93@gmail.com'
        },
        content: base64data,
        headers: {
          'X-GitHub-Api-Version': '2022-11-28'
        }
    });

    return resp;
}

export async function getAllPosts() {
    const octokit = new Octokit({ auth: `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` });

    var resp = await octokit.request(`GET /repos/pavlovtech/nextblog/contents/posts/`, {
        owner: 'pavlovtech',
        repo: 'NextBlog',
        path: 'posts',
        headers: {
          'X-GitHub-Api-Version': '2022-11-28'
        }
    });

    return resp.data;
}