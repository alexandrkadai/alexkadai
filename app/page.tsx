import { projects } from '@/constants/projects';
export default function Home() {
  return (
    <div className="md:p-15 xl:p-25 p-10 lg:p-20">
      <h1 className="text-center text-2xl font-bold uppercase tracking-widest text-black">
        Projects
      </h1>
      {projects.map((item) => (
        <div
          className="mt-10 flex justify-center md:flex-col lg:flex-row"
          key={item.id}
        >
          <img src={item.src} width={200} height={400} alt="projectImage" />
          <div className="ml-5 flex flex-col gap-5 rounded-md border-2 border-black bg-purple-400 p-2 text-black md:w-[333px] lg:w-[444px]">
            <h2 className="text-2xl font-bold">{item.name}</h2>
            <a href={item.github}>{item.github}</a>
            <a href={item.http}>{item.http}</a>
            <p className="">{item.technologies}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
