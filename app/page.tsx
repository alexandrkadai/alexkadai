'use client';

import { projects } from '@/constants/projects';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { useRef, useState, useEffect } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUp, Github, ExternalLink } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const titleRef = useRef(null);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useGSAP(() => {
    gsap.fromTo(
      titleRef.current,
      { opacity: 0, y: -20 },
      { opacity: 1, y: 0, duration: 1, ease: 'power2.out' }
    );
  });

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="mx-auto max-w-6xl px-4 py-16 pb-20">
      {/* Section Title */}
      <div className="mb-16 text-center">
        <h1
          ref={titleRef}
          className="text-4xl md:text-5xl font-bold tracking-tight"
        >
          <span className="bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text text-transparent">
            Featured Projects
          </span>
        </h1>
        <div className="mx-auto mt-4 h-1 w-24 bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>
      </div>

      {/* Projects Grid */}
      <div className="grid gap-8">
        {projects.map((item) => (
          <div
            className="group relative overflow-hidden rounded-2xl border border-zinc-800 bg-gradient-to-br from-zinc-900 to-black transition-all duration-500 hover:border-purple-500/50 hover:shadow-2xl hover:shadow-purple-500/10"
            key={item.id}
          >
            {/* Project Content */}
            <div className="grid md:grid-cols-2 gap-6 p-6 md:p-8">
              {/* Image Section */}
              <div className="relative overflow-hidden rounded-xl border border-zinc-800 bg-black">
                <img
                  src={item.src}
                  alt={item.name}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Info Section */}
              <div className="flex flex-col justify-between space-y-6">
                <div>
                  <h2 className="text-3xl font-bold text-white mb-4">
                    {item.name}
                  </h2>
                  
                  {/* Technologies */}
                  <div className="mb-6">
                    <p className="text-sm uppercase tracking-wider text-zinc-400 mb-2">
                      Technologies
                    </p>
                    <p className="text-zinc-300 leading-relaxed">
                      {item.technologies}
                    </p>
                  </div>
                </div>

                {/* Links */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    className="flex items-center justify-center gap-2 rounded-lg border border-zinc-700 bg-zinc-800/50 px-6 py-3 font-semibold text-white transition-all duration-300 hover:border-purple-500 hover:bg-zinc-800 hover:shadow-lg hover:shadow-purple-500/20"
                    href={item.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github size={18} />
                    <span>GitHub</span>
                  </a>
                  <a
                    className="flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-purple-600 to-purple-500 px-6 py-3 font-semibold text-white shadow-lg shadow-purple-500/30 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/40 hover:scale-105"
                    href={item.http}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink size={18} />
                    <span>Live Demo</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-purple-600 to-purple-500 text-white shadow-lg shadow-purple-500/30 transition-all duration-300 hover:scale-110 hover:shadow-xl hover:shadow-purple-500/50 ${
          showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16 pointer-events-none'
        }`}
        aria-label="Scroll to top"
      >
        <ArrowUp size={24} />
      </button>
    </div>
  );
}
