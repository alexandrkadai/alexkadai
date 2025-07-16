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
      <div className="m-auto w-[350px] md:w-[50vw] flex justify-between mt-5 flex-col gap-4">
        <span className="p-2 border-purple-500 border-2 rounded-md flex justify-center shadow-purple-500 shadow-[2px_2px_0]"><a href="tel:+496170961709" className="text-black uppercase font-bold">+38 050 265 6564</a></span>
        <span className="p-2 border-purple-500 border-2 rounded-md flex justify-center shadow-purple-500 shadow-[2px_2px_0]"><a className="text-black uppercase font-bold" href="https://github.com/alexandrkadai">Github</a></span>
        <span className="p-2 border-purple-500 border-2 rounded-md flex justify-center shadow-purple-500 shadow-[2px_2px_0]"><a href="mailto:alexandrkadai@gmail.com" className="text-black uppercase font-bold">alexandrkadai@gmail.com</a></span>
      </div>
      <div className="text-center">
        <a
          className="m-auto mt-5 block h-[50px] w-[350px] rounded-md bg-purple-700 p-2 font-bold uppercase tracking-wider hover:bg-purple-500 md:w-[50vw]"
          href="/Kadai_Alex_FE_CV.pdf"
          download
        >
          Download My CV
        </a>
      </div>
    </div>
  );
}
