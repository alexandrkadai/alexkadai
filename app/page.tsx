import { projects } from '@/constants/projects';
export default function Home() {
  return (
    <div className="md:p-15 xl:p-25 p-0 lg:p-20">
      <h1 className="mt-10 text-center text-2xl font-bold uppercase tracking-widest text-black">
        Projects
      </h1>
      {projects.map((item) => (
        <div
          className="mt-5 flex flex-col-reverse items-center justify-center lg:flex-row"
          key={item.id}
        >
          <img
            src={item.src}
            width={200}
            height={400}
            alt="projectImage"
            className="mt-5 lg:mt-0"
          />
          <div className="lg:ml-5 mt-5 flex w-[333px] flex-col gap-5 rounded-md border-2 border-black bg-purple-400 p-2 text-black lg:mt-0 lg:w-auto">
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
