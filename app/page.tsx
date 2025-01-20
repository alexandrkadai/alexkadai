'use client';

import { projects } from '@/constants/projects';
import { gsap } from "gsap";
import { useGSAP } from '@gsap/react';
import { useRef } from 'react';
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const titleRef = useRef(null);

  useGSAP(() => {
    let tl = gsap.timeline({repeat: -1, repeatDelay: 0});
    tl.to(titleRef.current, {
      x: 100,
      ease: 'power1.inOut',
      duration: 2,
    }).to(titleRef.current,{
      x: -100,
      ease: 'power1.inOut',
      duration: 2,
    }).to(titleRef.current,{
      x: 0,
      ease: 'power1.inOut',
      duration: 2,
    })
  });

  return (
    <div className="md:p-15 xl:p-25 p-0 lg:p-20">
      <h1 ref={titleRef} className="animated-word mt-10 text-center text-3xl font-bold uppercase tracking-widest text-black">
        Projects
      </h1>
      {projects.map((item) => (
        <div
          className="mt-5 pb-5 flex flex-col-reverse items-center lg:items-start justify-center lg:flex-row"
          key={item.id}
        >
          <img
            src={item.src}
            width={200}
            height={400}
            alt="projectImage"
            className="mt-5 lg:mt-0"
          />
          <div className="lg:ml-5 mt-5 flex w-[333px] flex-col gap-5 rounded-md border-2 border-black bg-purple-400 p-2 text-black lg:mt-0 lg:w-[450px]">
            <h2 className="text-2xl font-bold">{item.name}</h2>
            <a href={item.github}>Github Link</a>
            <a href={item.http}>{item.http}</a>
            <p className="">{item.technologies}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
