export const runtime = 'nodejs';

import Posts from '@/app/components/posts'
import Link from 'next/link';

const AdminPage = async () => {
  return <>
    <div className='container'>
      <Link href='/projects/create' className='bg-green-600 color p-3 text-white'>Create a new project</Link> 
      {/* @ts-expect-error Server Component */}
      <Posts /> 
    </div>
  </>
}

export default AdminPage;

