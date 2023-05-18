import { redirect } from "next/navigation";
export { reportWebVitals } from 'next-axiom';

export default function Home() {
  redirect('blog');
}
