import { Project, allProjects } from ".contentlayer/generated";
import Card from "app/components/project-card";
import Link from "next/link";

export const metadata = {
    title: 'Alex Pavlov - blog',
    description: 'Alex Pavlov - projects',
    languages: {
      'en-US': '/en-US',
    },
    keywords: ['Alex Pavlov', 'Projects', '.NET', 'C#', 'JavaScript'],
    creator: 'Alex Pavlov',
}

export default function Projects() {
    return (
        <>
            <div className="mx-auto max-w-6xl">
                <div className="space-y-2 pt-6 md:space-y-5">
                    <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
                        Projects
                    </h1>
                    <p className="text-md leading-7 text-gray-500 dark:text-gray-400">
                        A list of projects I have been working on or built
                    </p>
                </div>
                <div className="container py-12">
                    <div className="-m-4 flex flex-wrap">
                        {allProjects.map((d) => (
                            <Card
                                key={d.title}
                                title={d.title}
                                description={d.body.raw}
                                imgSrc={d.coverImage}
                                href={d.link}
                                github={d.github}
                                tech={d.technologies?.split(',')}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}
