import Link from 'next/link';

export default function NavBar() {
  return (
    <div className="mt-5 flex w-full items-center justify-center gap-5 font-bold uppercase text-purple-500">
      <Link href="/">Main</Link>
      <Link href="/">CV</Link>
      <Link href="/">Projects</Link>
      <Link href="/">Contacs</Link>
    </div>
  );
}
