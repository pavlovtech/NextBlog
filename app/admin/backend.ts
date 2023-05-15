import { Octokit, App } from "octokit";

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

    console.log('git resp', resp);

    return resp.data;
}