import { useState } from "react";
import domtoimage from "dom-to-image-more";
import jsPDF from "jspdf";

import StudentForm from "./components/StudentForm";
import Idcardfront from "./components/Idcardfront";
import Idcardback from "./components/Idcardback";

/* ================= TYPES ================= */

type StudentFormData = {
  name: string;
  dept: string;
  rollNo: string;
  batch: string;
  fatherName: string;
  bloodGroup: string;
  phone: string;
  address: string;
  validUpto: string;
  photo: File | null;
};

function App() {
  const [student, setStudent] = useState<StudentFormData | null>(null);

  const handleFormSubmit = (data: StudentFormData) => {
    setStudent(data);
  };

  /* ===== CLEAN PREVIEW → PDF (NO DIV BORDERS) ===== */
  const downloadPDF = async () => {
    const node = document.getElementById("capture-area");
    if (!node) return;

    const scale = 3;

    const dataUrl = await domtoimage.toPng(node, {
      bgcolor: "#ffffff",
      width: node.scrollWidth * scale,
      height: node.scrollHeight * scale,

      // 🔥 FORCE REMOVE ALL BORDERS & SHADOWS
      style: {
        transform: `scale(${scale})`,
        transformOrigin: "top left",
        border: "none",
        outline: "none",
        boxShadow: "none",
      },

      // 🔥 REMOVE BORDER FROM ALL CHILD DIVS
      filter: (domNode) => {
        if (domNode instanceof HTMLElement) {
          domNode.style.border = "none";
          domNode.style.outline = "none";
          domNode.style.boxShadow = "none";
        }
        return true;
      },

      quality: 1,
    });

    const pdf = new jsPDF("p", "mm", "a4");
    const pdfWidth = pdf.internal.pageSize.getWidth();

    const img = new Image();
    img.src = dataUrl;

    img.onload = () => {
      const imgHeight = (img.height * pdfWidth) / img.width;
      pdf.addImage(dataUrl, "PNG", 0, 0, pdfWidth, imgHeight);
      pdf.save("student-id-card.pdf");
    };
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {/* ===== FORM ===== */}
      <StudentForm onSubmit={handleFormSubmit} />

      {/* ===== PREVIEW AREA (NO BORDER) ===== */}
      <div className="mt-10 flex justify-center border-1">
        <div
          id="capture-area"
          style={{
            display: "flex",
            gap: "24px",
            background: "transparent",
          }}
        >
          {student ? (
            <>
              <Idcardfront data={student} />
              <Idcardback data={student} />
            </>
          ) : (
            <p style={{ color: "#666" }}>
              Fill the form to preview ID card
            </p>
          )}
        </div>
      </div>

      {/* ===== DOWNLOAD PDF ===== */}
      <div className="flex justify-center mt-6">
        <button
          onClick={downloadPDF}
          className="px-6 py-2 bg-green-600 font-bold text-white rounded hover:bg-blue-700"
        >
          Download PDF
        </button>
      </div>
    </div>
  );
}

export default App;
