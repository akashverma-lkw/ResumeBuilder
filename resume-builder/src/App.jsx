import { useState, useEffect, useRef } from "react";
import ResumeForm from "./components/ResumeForm";
import ResumePreview from "./components/ResumePreview";
import PreviewModal from "./components/PreviewModal";
import { useReactToPrint } from "react-to-print";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

export default function App() {
  const [resumeData, setResumeData] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [mode, setMode] = useState("light");

  const resumeRef = useRef(null);

  // Load resumeData from localStorage
  useEffect(() => {
    const storedData = localStorage.getItem("resumeData");
    if (storedData) {
      setResumeData(JSON.parse(storedData));
    }

    const storedMode = localStorage.getItem("mode");
    if (storedMode) {
      setMode(storedMode);
    }
  }, []);

  // Save resumeData to localStorage
  useEffect(() => {
    localStorage.setItem("resumeData", JSON.stringify(resumeData));
  }, [resumeData]);

  // Save mode to localStorage
  useEffect(() => {
    localStorage.setItem("mode", mode);
  }, [mode]);

  const handleFormChange = (data) => {
    setResumeData(data);
  };

  const handlePrint = async () => {
    const element = resumeRef.current;
    const canvas = await html2canvas(element);
    const imgData = canvas.toDataURL("image/png");
    const pdf = new jsPDF("p", "mm", "a4");
    const imgWidth = 210; // A4 width in mm
    const imgHeight = (canvas.height * imgWidth) / canvas.width;
    pdf.addImage(imgData, "PNG", 0, 0, imgWidth, imgHeight);
    pdf.save("MyResume.pdf");
  };


  return (
    <div className={`min-h-screen w-full p-4 transition-all duration-500 bg-gray-900 text-white`}>
      {/* Header Section */}
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 mt-4">
          <span className="text-red-500">R</span>esume{" "}
          <span className="text-red-500">B</span>uilder
        </h1>

      {/* Main Section */}
      <div className="flex flex-col md:flex-row gap-6">
        <ResumeForm onFormChange={handleFormChange} resumeData={resumeData} />

        <div className="hidden md:block w-1/2">
          <ResumePreview ref={resumeRef} resumeData={resumeData} />
        </div>

        {/* Mobile Preview Button */}
        <div className="md:hidden text-center mt-4">
          <button
            onClick={() => setShowModal(true)}
            className="px-4 py-2 bg-blue-600 text-white rounded"
          >
            Preview Resume
          </button>
        </div>

        {/* Modal Preview */}
        {showModal && (
          <PreviewModal onClose={() => setShowModal(false)}>
            <ResumePreview ref={resumeRef} resumeData={resumeData} />
          </PreviewModal>
        )}
      </div>

      {/* Download Button */}
      <div className="text-center">
        <button
          className="mt-8 px-4 py-2 bg-blue-600 text-white rounded"
          onClick={() => {
            if (resumeRef.current) {
              console.log("Printing...", resumeRef.current);
              handlePrint();
            } else {
              console.error("Component ref is null!");
            }
          }}
        >
          Download Resume PDF
        </button>
      </div>
    </div>
  );
}
