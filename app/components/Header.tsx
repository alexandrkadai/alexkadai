export default function Header() {
  return (
    <div className="mt-10 w-full">
      <div className="mx-auto h-[450px] w-[350px] items-center justify-center rounded-md bg-purple-500 text-center md:h-[70vh] md:w-[50vw]">
        <h1 className="text-[32px] font-bold uppercase tracking-wider text-white">
          Hello
        </h1>
        <h2 className="font-bold uppercase text-white">my name is</h2>
        <div className="mx-auto mt-2 h-[300px] w-[200px] items-center justify-center rounded-md bg-white md:h-[45vh] md:w-[30vw]">
          <h1 className="relative top-[100px] text-[42px] font-bold uppercase text-purple-700">
            Alex Kadai
          </h1>
        </div>
      </div>
      <div className="m-auto mt-2 w-[350px] rounded-md border-2 border-purple-500 text-center text-xl font-bold uppercase text-purple-700 md:w-[50vw]">
        Front-end Developer React
      </div>
      <div className="text-center">
        <a
          className="m-auto mt-5 block h-[50px] w-[350px] rounded-md bg-purple-700 p-2 font-bold uppercase tracking-wider hover:bg-purple-500 md:w-[50vw]"
          href="/Kadai_Alex_CV.pdf"
          download
        >
          Download My CV
        </a>
      </div>
    </div>
  );
}
