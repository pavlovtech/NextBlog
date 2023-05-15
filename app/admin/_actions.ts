"use server";
import { Octokit, App } from "octokit";

export async function createNewPost(formData: any) {
    "use server"

    const data = Object.fromEntries(formData);

    const octokit = new Octokit({ auth: `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` });
 
   
    let buff = Buffer.from(data.post);
    let base64data = buff.toString('base64')


    var resp = await octokit.request(`PUT /repos/pavlovtech/nextblog/contents/posts/${data.slug}.mdx`, {
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

    //console.log('git resp', resp);
}