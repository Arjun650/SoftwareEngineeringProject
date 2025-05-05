"use client";

import React, { useRef, useState } from "react";
import MDEditor from "@uiw/react-md-editor";
import html2pdf from "html2pdf.js";

const CoverLetterPreview = ({ content }) => {
  const [markdown, setMarkdown] = useState(content || "");
  const hiddenPreviewRef = useRef(null);

  const handleDownloadPDF = () => {
    const opt = {
      margin: 10,
      filename: "cover_letter.pdf",
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
    };

    html2pdf().from(hiddenPreviewRef.current).set(opt).save();
  };

  return (
    <div className="py-4 ">
      {/* Editable Editor */}
      <MDEditor value={markdown} onChange={setMarkdown} height={700}
  />

      {/* Hidden Preview for PDF */}
      <div
        ref={hiddenPreviewRef}
        style={{ position: "absolute", left: "-9999px", top: "0", opacity: 0 }}
      >
        <MDEditor.Markdown source={markdown} />
      </div>

      {/* Download Button */}
      <button
        onClick={handleDownloadPDF}
        className="mt-4 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
      >
        Download as PDF
      </button>
    </div>
  );
};

export default CoverLetterPreview;
