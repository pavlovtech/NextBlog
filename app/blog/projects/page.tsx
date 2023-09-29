import Card from "app/components/project-card";
import Link from "next/link";

export const metadata = {
    title: 'Alex Pavlov - blog',
    description: 'my personal blog where I share my notes, ideas and inspirations'
}

const projectsData = [
    {
        title: 'WebReaper',
        description: `WebReaper is a declarative high performance web scraper, crawler and parser in C#. Designed as simple, extensible and scalable web scraping solution.`,
        imgSrc: '/public/images/reaper.png',
        github: 'https://github.com/pavlovtech/WebReaper',
        tech: ['.NET', 'Puppeteer', 'MongoDB', 'Redis']
    },
    {
        title: 'pipelined.io',
        description: `Azure DevOps release automation tool.`,
        href: 'https://pipelined.io',
        tech: ['NextJS', 'PlanetScale']
    },
    {
        title: 'NextBlog',
        description: `Blog with SSG built with NextJs 13, Contentlayer, Giscus, NextAuth. It uses Github API for admin section that allows managing markdown files rendered with Codemirror.`,
        github: 'https://github.com/pavlovtech/WebReaper',
        tech: ['NextJS', 'Contentlayer', 'NextAuth', 'Giscus', 'GitHub API', 'Codemirror']
    }
];

export default function Projects() {
    //const post = allProjects.find((post) => post.slug === params.slug)!;

    return (
        <>
            <div className="mx-auto max-w-6xl divide-y divide-gray-400">
                <div className="space-y-2 pt-6 pb-8 md:space-y-5">
                    <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
                        Projects
                    </h1>
                    <p className="text-md leading-7 text-gray-500 dark:text-gray-400">
                        A list of projects I have been working on or built
                    </p>
                </div>
                <div className="container py-12">
                    <div className="-m-4 flex flex-wrap">
                        {projectsData.map((d) => (
                            <Card
                                key={d.title}
                                title={d.title}
                                description={d.description}
                                imgSrc={d.imgSrc}
                                href={d.href}
                                github={d.github}
                                tech={d.tech}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}
