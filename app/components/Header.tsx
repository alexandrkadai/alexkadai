export default function Header() {
  return (
    <div className="w-full py-16 px-4">
      {/* Hero Section */}
      <div className="mx-auto max-w-4xl">
        <div className="relative overflow-hidden rounded-2xl border border-zinc-800 bg-gradient-to-br from-zinc-900 to-black p-8 md:p-12 shadow-2xl">
          {/* Accent Line */}
          <div className="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-purple-600 via-purple-400 to-purple-600"></div>
          
          {/* Content */}
          <div className="text-center space-y-6">
            <div className="space-y-2">
              <p className="text-sm uppercase tracking-widest text-zinc-400">Hello, I'm</p>
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
                <span className="bg-gradient-to-r from-white via-purple-100 to-white bg-clip-text text-transparent">
                  Alex Kadai
                </span>
              </h1>
            </div>
            
            <div className="inline-block">
              <p className="text-xl md:text-2xl font-medium text-white border-b-2 border-purple-500 pb-2 px-4">
                Front-end Developer React
              </p>
            </div>
          </div>
        </div>

        {/* Contact Cards */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
          <a 
            href="tel:+380502656564" 
            className="group relative overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900/50 p-4 text-center transition-all duration-300 hover:border-purple-500 hover:bg-zinc-900 hover:shadow-lg hover:shadow-purple-500/20"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600/0 via-purple-600/5 to-purple-600/0 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <p className="relative text-sm uppercase tracking-wider text-zinc-400 mb-1">Phone</p>
            <p className="relative font-semibold text-white">+38 050 265 6564</p>
          </a>
          
          <a 
            href="https://github.com/alexandrkadai" 
            target="_blank"
            rel="noopener noreferrer"
            className="group relative overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900/50 p-4 text-center transition-all duration-300 hover:border-purple-500 hover:bg-zinc-900 hover:shadow-lg hover:shadow-purple-500/20"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600/0 via-purple-600/5 to-purple-600/0 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <p className="relative text-sm uppercase tracking-wider text-zinc-400 mb-1">GitHub</p>
            <p className="relative font-semibold text-white">@alexandrkadai</p>
          </a>
          
          <a 
            href="mailto:alexandrkadai@gmail.com" 
            className="group relative overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900/50 p-4 text-center transition-all duration-300 hover:border-purple-500 hover:bg-zinc-900 hover:shadow-lg hover:shadow-purple-500/20"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600/0 via-purple-600/5 to-purple-600/0 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <p className="relative text-sm uppercase tracking-wider text-zinc-400 mb-1">Email</p>
            <p className="relative font-semibold text-white truncate">alexandrkadai@gmail.com</p>
          </a>
        </div>

        {/* CV Download Button */}
        <div className="mt-8 text-center">
          <a
            className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-purple-600 to-purple-500 px-8 py-4 font-semibold uppercase tracking-wider text-white shadow-lg shadow-purple-500/30 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/40 hover:scale-105"
            href="/Alex_Kadai_FE_CV.pdf"
            download
          >
            Download My CV
          </a>
        </div>
      </div>
    </div>
  );
}
