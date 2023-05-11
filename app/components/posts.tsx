// import { getUserProjects } from '../backend/database/actions'
import Link from 'next/link';

const Projects = async () => {
  // const projects = await getUserProjects();

  const posts: any[] = [];

  return (
    <table className="border-collapse border-spacing-2 border w-100 border-slate-500 mt-10 bg-white">
      <thead>
        <tr>
          <th className="border border-slate-600 p-4">Project name</th>
          <th className="border border-slate-600 p-4">Collection Url</th>
          <th className="border border-slate-600 p-4">Project Id</th>
        </tr>
      </thead>
      <tbody>

        {posts.map(item => (
          <tr key={item.slug}>
            <td className="border border-slate-700 p-4"><Link
              href={`/posts/${item.slug}`}
              className='group'
            >
              <h3 className='mt-4 text-sm text-stone-400'>
                {item.projectName}
              </h3>
            </Link></td>
            <td className="border border-slate-700 p-4">title</td>
            <td className="border border-slate-700 p-4">test</td>
          </tr>
        ))}

      </tbody>
    </table>
  )
}

export default Projects
