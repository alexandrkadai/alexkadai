import Link from "next/link";

export default function NavBar() {
  return (
    <div className="w-full mt-5 flex gap-5 items-center justify-center text-purple-500 font-bold uppercase ">
        <Link href='/'>Main</Link>
        <Link href='/'>CV</Link>
        <Link href='/'>Projects</Link>
        <Link href='/'>Contacs</Link>
    </div>
  )
}
