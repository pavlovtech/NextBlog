import { redirect } from 'next/navigation';
import { RoughNotation } from 'react-rough-notation';
import Link from 'next/link';
import Tag from './components/ui/tag';

export const metadata = {
  title: 'Alex Pavlov',
  description: 'Created by Alex Pavlov',
  locale: 'en-US',
}

const MAX_DISPLAY = 3

const formatDate = (date: Date) => {
  const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  } as any;

  const now = new Date(date).toLocaleDateString(metadata.locale, options)

  return now
}

const Page = () => {
  const posts: any[] = [];

  return (
    <>
      Hello
    </>
  );
}

export default Page
