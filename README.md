
# NextBlog

Blog built with NextJs 13, Contentlayer, Giscus and NextAuth. It uses Github API for admin section that allows managing markdown files rendered with Codemirror.

## Demo

### Home page

![image](https://github.com/pavlovtech/NextBlog/assets/6662454/6207daa6-4c75-4180-8365-71b75360afe4)

### Admin panel

![image](https://github.com/pavlovtech/NextBlog/assets/6662454/64acb476-bd83-4b8f-ace9-22ffcad32fa4)

## Admin panel - edit page

![image](https://github.com/pavlovtech/NextBlog/assets/6662454/499957db-5564-46c4-b5b8-7a03ce5d3b98)


## Used libraries

- [NextJS](https://nextjs.org/docs)
- [Contentlayer](https://www.contentlayer.dev/)
- [NextAuth](https://next-auth.js.org/getting-started/introduction)
- [Giscus](https://github.com/giscus/giscus)
- [GitHub API](https://docs.github.com/en/rest?apiVersion=2022-11-28)
- [Codemirror](https://codemirror.net/)

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file. They are needed for admin panel for editing your markdown files.

```yaml
GITHUB_TOKEN = token with access to the content of your blog's repository
NEXTAUTH_SECRET = any secret 
NEXTAUTH_URL= your site's url
ADMIN_EMAIL = your email
ADMIN_PASSWORD= your password
```
## Features

- Static content generation based on markdown files (./posts folder)
- Comments with Giscus
- Code hightlighting
- Automatic table of content generation
- Admin panel that works via Github API
- Mobile-friendly view
- Projects page
- Frontmatter support


## Quick Start Guide

`npm i`

`npm run dev`
