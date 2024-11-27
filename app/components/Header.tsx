import PDFDownloadButton from '../components/downloadFile';
export default function Header() {
  return (
    <div className="mt-10 w-full">
      <div className="mx-auto h-[300px] w-[350px] items-center justify-center bg-purple-500 text-center">
        <h1 className="text-[32px] font-bold tracking-wider text-black">
          Hello
        </h1>
        <h2 className="font-bold text-black">my name is</h2>
        <div className="mx-auto mt-2 h-[200px] w-[320px] items-center justify-center bg-white">
          <h1 className="relative top-[100px] text-[42px] font-bold text-black">
            Alex Kadai
          </h1>
        </div>
      </div>
      <div className="text-center uppercase text-purple-700">Front-end Developer React</div>
      <div className="text-center">
      <PDFDownloadButton fileName="Kadai_Alex_CV.pdf" fileUrl="/api/download-pdf" />
      </div>
    </div>
  );
}
