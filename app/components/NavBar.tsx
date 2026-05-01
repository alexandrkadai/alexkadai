import Link from 'next/link';

export default function NavBar() {
  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md bg-black/80 border-b border-zinc-800">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex items-center justify-center gap-8 py-4 font-medium uppercase tracking-wider text-sm">
          <Link 
            href="/" 
            className="text-zinc-400 transition-colors duration-300 hover:text-purple-400 relative group"
          >
            Main
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-500 transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link 
            href="/" 
            className="text-zinc-400 transition-colors duration-300 hover:text-purple-400 relative group"
          >
            CV
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-500 transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link 
            href="/" 
            className="text-zinc-400 transition-colors duration-300 hover:text-purple-400 relative group"
          >
            Projects
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-500 transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link 
            href="/pricing" 
            className="text-zinc-400 transition-colors duration-300 hover:text-purple-400 relative group"
          >
            Pricing
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-500 transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link 
            href="/" 
            className="text-zinc-400 transition-colors duration-300 hover:text-purple-400 relative group"
          >
            Contact
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-500 transition-all duration-300 group-hover:w-full"></span>
          </Link>
        </div>
      </div>
    </nav>
  );
}
