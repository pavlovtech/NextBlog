
import Tag from "app/components/tag";
import { allPosts } from "contentlayer/generated";

export default function TagsPage() {
  const allTags = allPosts
    .map(post => post.tags?.split(",").map(p => p.trim()))
    .flat();

  const tags = [...new Set(allTags)];

  return (
    <div className="flex flex-col items-start justify-start divide-y divide-gray-200 dark:divide-gray-700 md:mt-24 md:flex-row md:items-center md:justify-center md:space-x-6 md:divide-y-0">
      <div className="space-x-2 pt-6 pb-8 md:space-y-5">
        <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:border-r-2 md:px-6 md:text-6xl md:leading-14">
          Tags
        </h1>
      </div>
      <div className="flex max-w-lg flex-wrap">
        {tags.length === 0 && 'No tags found.'}
        {tags.map((t) => {
          return (
            <div key={t} className="mt-2 mb-2">
              <Tag text={t!} />
            </div>
          )
        })}
      </div>
    </div>
  );
}
