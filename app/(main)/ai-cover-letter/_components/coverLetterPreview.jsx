"use client"
import React, { useRef, useState, useEffect } from "react";
import MDEditor from "@uiw/react-md-editor";
import html2pdf from "html2pdf.js";
import { marked } from "marked";

const CoverLetterPreview = ({ content }) => {
  const [markdown, setMarkdown] = useState(content || "");
  const [htmlContent, setHtmlContent] = useState("");
  const [theme, setTheme] = useState("light"); // 'light' or 'dark'
  const previewRef = useRef(null);

  useEffect(() => {
    setHtmlContent(marked.parse(markdown));
  }, [markdown]);

  const handleDownloadPDF = () => {
    if (!previewRef.current) return;

    const opt = {
      margin: [0.5, 0.5, 0.5, 0.5],
      filename: "cover_letter.pdf",
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: "in", format: "a4", orientation: "portrait" },
    };

    html2pdf().set(opt).from(previewRef.current).save();
  };

  return (
    <div className={`py-4 px-5 dark: "bg-gray-900 dark:text-white"  "bg-white text-black"`}>
      {/* Theme Toggle */}
      <div className="mb-4">
        <button
          onClick={() => setTheme((prev) => (prev === "light" ? "dark" : "light"))}
          className="px-4 py-2 rounded bg-blue-500 text-white"
        >
          Toggle Theme
        </button>
      </div>

      {/* Markdown Editor */}
      <div data-color-mode={theme}>
        <MDEditor value={markdown} onChange={setMarkdown} height={500} preview="edit" />
      </div>

      {/* Preview */}
      <div className="mt-8">
        <h2 className="text-xl font-bold mb-2">Preview</h2>
        <div
          ref={previewRef}
          className={`prose max-w-none border p-4 rounded ${
            theme === "dark" ? "bg-gray-800 text-white" : "bg-white text-black"
          }`}
          dangerouslySetInnerHTML={{ __html: htmlContent }}
        />
      </div>

      {/* Download Button */}
      <button
        onClick={handleDownloadPDF}
        className="mt-6 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
      >
        Download as PDF
      </button>
    </div>
  );
};

export default CoverLetterPreview;
