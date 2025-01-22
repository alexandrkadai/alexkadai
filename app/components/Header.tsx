export default function Header() {
  return (
    <div className="mt-10 w-full">
      <div className="mx-auto w-[350px] h-[450px] md:h-[70vh] md:w-[50vw] items-center justify-center bg-purple-500 text-center rounded-md">
        <h1 className="text-[32px] font-bold tracking-wider text-white uppercase">
          Hello
        </h1>
        <h2 className="font-bold text-white uppercase ">my name is</h2>
        <div className="mx-auto mt-2 w-[200px] h-[300px] md:h-[45vh] md:w-[30vw] items-center justify-center bg-white rounded-md">
          <h1 className="relative top-[100px] text-[42px] font-bold text-purple-700 uppercase">
            Alex Kadai
          </h1>
        </div>
      </div>
      <div className="text-xl w-[350px] md:w-[50vw] m-auto border-2 border-purple-500 mt-2 rounded-md font-bold text-center uppercase text-purple-700">Front-end Developer React</div>
      <div className="text-center">
    <a className="block m-auto w-[350px] md:w-[50vw] h-[50px] bg-purple-700 p-2 mt-5 uppercase rounded-md font-bold tracking-wider hover:bg-purple-500" href="/Kadai_Alex_CV.pdf" download >Download My CV</a>
      </div>
    </div>
  );
}
