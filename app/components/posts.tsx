import Link from 'next/link';
import Tag from './ui/tag';

import { blogPostsMetatata } from '../server/blog-posts';
import { formatDate } from '../../utils/date-utils';

const Posts = async () => {
  // const projects = await getUserProjects();

  let posts = await blogPostsMetatata;

  console.log(posts);

  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Posts
          </h1>
        </div>
        <ul>
          {!posts.length && 'No posts found.'}
          {posts.map((frontMatter) => {
            const { slug, date, title, summary, tags } = frontMatter
            return (
              <li key={slug} className="py-4">
                <article className="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
                  date && (<dl>
                    <dt className="sr-only">Published on</dt>
                    <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                      <time dateTime={date}>{formatDate(date)}</time>
                    </dd>
                  </dl>)
                  <div className="space-y-3 xl:col-span-3">
                    <div>
                      <h3 className="text-2xl font-bold leading-8 tracking-tight">
                        <Link href={`/blog/${slug}`} className="text-gray-900 dark:text-gray-100">
                          {title}
                        </Link>
                      </h3>
                      tags && (<div className="flex flex-wrap">
                        {tags.map((tag: string) => (
                          <Tag key={tag} text={tag} />
                        ))}
                      </div>)
                    </div>
                    summary && (<div className="prose max-w-none text-gray-500 dark:text-gray-400">
                      {summary}
                    </div>)
                  </div>
                </article>
              </li>
            )
          })}
        </ul>
      </div>
      {/* {pagination && pagination.totalPages > 1 && !searchValue && (
      <Pagination currentPage={pagination.currentPage} totalPages={pagination.totalPages} />
    )} */}
    </>
  )
}

export default Posts;