'use client';
import { RoughNotation } from 'react-rough-notation';

export const metadata = {
    title: 'Alex Pavlov - blog',
    description: 'my personal blog where I share my notes, ideas and inspirations'
}

export function AboutMe() {
    "use client";
    return (
      <div className="pt-6">
        <h1 className="pb-6 text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
          Hi, I am{' '}
          <span className="text-primary-color-500 dark:text-primary-color-dark-500">Alex</span>
        </h1>
        <h2 className="pt-5 text-lg text-gray-600 dark:text-gray-300">
        I have over 10 years of expertise in software engineering. My skills and knowledge span a wide range of areas, including .NET, RESTful services, software architecture, microservices, Azure, React.JS, Next.JS, Angular, JavaScript, SQL and NoSQl databases. In my free time, I like developing side projects and learning new technologies.
        </h2>
        <p className="pt-10 text-lg leading-7 text-slate-600 dark:text-slate-300">
          This is my place for{' '}
          <RoughNotation
            animate={true}
            type="box"
            show={true}
            color="#DE1D8D"
            animationDelay={1000}
            animationDuration={2500}
          >
            thoughts, reflections & everything&nbsp;
          </RoughNotation>
          in between. Have a good read!{' '}
        </p>
      </div>
    );
  }