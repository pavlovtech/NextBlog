'use client';
import { RoughNotation } from 'react-rough-notation';
import { allPages, Page } from "contentlayer/generated";

export const metadata = {
    title: 'Alex Pavlov - blog',
    description: 'my personal blog where I share my notes, ideas and inspirations'
}

export function AboutMe() {
    "use client";

    const aboutMe = allPages
      .find(p => p.slug == 'about-me')?.body.raw;

    return (
      <div className="pt-6">
        <h1 className="pb-6 text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
          Hi, I am{' '}
          <span className="text-primary-color-500 dark:text-primary-color-dark-500">Alex</span>
        </h1>
        <p className="pt-5 text-lg text-gray-600 dark:text-gray-300">
          {aboutMe}
        </p>
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