'use client';

import { projects } from '@/constants/projects';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { useRef } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUpRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const titleRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({ repeat: -1, repeatDelay: 0 });
    tl.to(titleRef.current, {
      x: 100,
      ease: 'power1.inOut',
      duration: 2,
    })
      .to(titleRef.current, {
        x: -100,
        ease: 'power1.inOut',
        duration: 2,
      })
      .to(titleRef.current, {
        x: 0,
        ease: 'power1.inOut',
        duration: 2,
      });
  });

  return (
    <div className="md:px-15 xl:px-25 p-0 lg:px-20">
      <h1
        ref={titleRef}
        className="animated-word mt-3 text-center text-3xl font-bold uppercase tracking-widest text-purple-600"
      >
        Projects
      </h1>
      {projects.map((item) => (
        <div
          className="mt-5 mx-auto flex flex-col-reverse items-center justify-center pb-5 lg:flex-row lg:items-start w-[50vw]"
          key={item.id}
        >
          <img
            src={item.src}
            width={200}
            height={400}
            alt="projectImage"
            className="mt-5 object-cover lg:mt-0"
          />
          <div className="mt-5 flex w-[333px] flex-col gap-5 rounded-md border-2 border-purple-700 bg-purple-400 p-2 text-purple-900 lg:ml-5 lg:mt-0 lg:w-[450px]">
            <h2 className="text-2xl font-bold">{item.name}</h2>
            <a
              className="flex flex-row gap-2 font-bold underline"
              href={item.github}
            >
              Github Link <ArrowUpRight size={20} />
            </a>
            <div className="">
              <p className="text-xl font-bold">Project Online :</p>
              <a className="font-bold underline" href={item.http}>
                {item.http}
              </a>
            </div>
            <div className="">
              <p className="text-xl font-bold">Technologies:</p>
              <p className="">{item.technologies}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
