'use client';
interface PDFDownloadButtonProps {
    fileName: string;
    fileUrl: string;
  }
  
  const PDFDownloadButton: React.FC<PDFDownloadButtonProps> = ({ fileName, fileUrl }) => {
    const handleDownload = async () => {
      try {
        const response = await fetch(fileUrl);
        const blob = await response.blob();
        
        
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = fileName;
        document.body.appendChild(link);
        link.click();
        

        document.body.removeChild(link);
        URL.revokeObjectURL(link.href);
      } catch (error) {
        console.error('Download failed:', error);
      }
    };
  
    return (
      <button 
        onClick={handleDownload} 
        className="bg-purple-500 hover:bg-purple-700 text-white font-bold mt-5 py-2 px-4 rounded"
      >
        Download My Cv
      </button>
    );
  };
  
  export default PDFDownloadButton;