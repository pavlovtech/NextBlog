import { Octokit, App } from "octokit";

const githubToken = process.env.GITHUB_TOKEN;

console.log(githubToken);

export async function upsertPost(slug: string, post: string, sha?: string) {
    const octokit = new Octokit({ auth: githubToken });
    let buff = Buffer.from(post);
    let base64data = buff.toString('base64')

    var resp = await octokit.request(`PUT /repos/pavlovtech/nextblog/contents/content/posts/${slug}`, {
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
        },
        sha
    });

    return resp;
}

export async function uploadFile(file: File) {
  const bytes = await file.arrayBuffer()
  const buffer = Buffer.from(bytes);
  let base64data = buffer.toString('base64')

  const octokit = new Octokit({ auth: githubToken });

  var resp = await octokit.request(`PUT /repos/pavlovtech/nextblog/contents/public/images/${file.name}`, {
      owner: 'pavlovtech',
      repo: 'NextBlog',
      path: './public/assets',
      message: 'added image',
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
    const octokit = new Octokit({ auth: githubToken });
    var resp = await octokit.request(`GET /repos/pavlovtech/nextblog/contents/content/posts`, {
        owner: 'pavlovtech',
        repo: 'NextBlog',
        path: 'posts',
        headers: {
          'X-GitHub-Api-Version': '2022-11-28'
        }
    });

    return resp.data.filter((post: any) => post.name.endsWith('.md') || post.name.endsWith('.mdx'));
}

export async function getPost(fileName: string) {
  const octokit = new Octokit({ auth: githubToken });
  var resp = await octokit.request(`GET /repos/pavlovtech/nextblog/contents/content/posts/${fileName}`, {
      owner: 'pavlovtech',
      repo: 'NextBlog',
      path: 'posts',
      headers: {
        'X-GitHub-Api-Version': '2022-11-28'
      }
  });

  let buff = Buffer.from(resp.data.content, 'base64');
  let text = buff.toString('utf-8');

  return {
    content: text,
    fileName: fileName,
    path: resp.data.path,
    sha: resp.data.sha
  };
}

export async function deletePost(fileName: string, sha: string) {
  const octokit = new Octokit({ auth: githubToken });
  var resp = await octokit.request(`DELETE /repos/pavlovtech/nextblog/contents/content/posts/${fileName}`, {
    owner: 'pavlovtech',
    repo: 'NextBlog',
    path: './posts',
    message: 'my commit message',
    committer: {
      name: 'Alex Pavlov',
      email: 'alexpppavlov93@gmail.com'
    },
    headers: {
      'X-GitHub-Api-Version': '2022-11-28'
    },
    sha
  });

  return resp;
}