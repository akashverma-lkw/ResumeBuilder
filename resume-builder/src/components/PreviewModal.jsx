import { useEffect } from "react";

export default function PreviewModal({ onClose, children }) {
  // Close modal on ESC key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 p-2 sm:p-4 animate-fadeIn"
      role="dialog"
      aria-modal="true"
    >
      <div className="bg-white dark:bg-gray-900 text-gray-800 dark:text-white rounded-2xl shadow-2xl w-full max-w-md sm:max-w-xl relative overflow-hidden">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-600 dark:text-gray-300 hover:text-red-600 text-2xl focus:outline-none transition-transform transform hover:scale-110"
          aria-label="Close modal"
        >
          &times;
        </button>

        {/* Modal Content */}
        <div className="p-4 sm:p-6 overflow-y-auto max-h-[80vh] custom-scrollbar">
          {children}

          {/* Optional Download Button Example */}
          {/* 
          <button
            onClick={onDownload}
            className="mt-6 w-full bg-blue-600 dark:bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-700 dark:hover:bg-blue-600 transition duration-300"
          >
            Download Resume
          </button> 
          */}
        </div>
      </div>
    </div>
  );
}
