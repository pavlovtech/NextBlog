
# NextBlog

Blog built with NextJs 13, Contentlayer, Giscus and NextAuth. It uses Github API for admin section that allows managing markdown files rendered with Codemirror.

Design is based on https://github.com/pycoder2000/blog

## Demo

Demo: [alexpavlov.dev](https://alexpavlov.dev)

### Home page

![image](https://github.com/pavlovtech/NextBlog/assets/6662454/6207daa6-4c75-4180-8365-71b75360afe4)

## 📚 Tech Stack

| Name            | Link                                                      |
| --------------- | --------------------------------------------------------- |
| Framework       | [NextJS](https://nextjs.org/docs)                         |
| Markdown        | [Contentlayer](https://www.contentlayer.dev/)             |
| Authentication  | [NextAuth](https://next-auth.js.org/)                     |
| Deployment      | [Vercel](https://vercel.com)                              |
| Styling         | [Tailwindcss](https://tailwindcss.com/)                   |
| Comments        | [Giscus](https://github.com/giscus/giscus)                |
| Data access     | GitHub API                                                |
| Markdown editor | [Codemirror](https://codemirror.net/)                  |


## 🪜 Project structure

```bash
📦 root
├── 🗂️ app                     # NextJs 13 app router directory
│ ├── 🗂️ admin                 # Admin functionality for creating and editing blog posts
│ ├── 🗂️ api                   # CRUD api blog posts (Github API is used)
│ └── 🗂️ blog                  # Blog functionality
│ └── 🗂️ components            # Blog UI components
├── 🗂️ configs                 # Configs
├── 🗂️ lib                     # Utilities
├── 🗂️ posts                   # Blog posts in markdown
├── 🗂️ public                  # Static files for images
├── 🗂️ styles                  # CSS
├── 📝 contentlayer.config.ts  # Contentlayer config
└── 📝 next.config.js          # configuration related to Next.js
```

## Google Lighthouse performance statistics

![image](https://github.com/pavlovtech/NextBlog/assets/6662454/9681f814-3b35-4ceb-9085-71e9fc46bbdb)


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
