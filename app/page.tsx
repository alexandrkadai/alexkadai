import { projects } from '@/constants/projects';
export default function Home() {
  return (
    <div className="p-10 md:p-15 lg:p-20 xl:p-25">
      <h1 className="text-center text-black text-2xl font-bold">Projects</h1>
      {projects.map((item) => (
        <div className="mt-10 flex flex-row justify-center" key={item.id}>
          <img src={item.src} width={200} height={400} alt="projectImage" />
          <div className="flex flex-col gap-5 text-black w-[350px] ml-5">
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
