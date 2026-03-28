import { useState, useEffect } from "react";
import "./styles/PDFViewer.css";

const PDFViewer = () => {
  const [pdfText, setPdfText] = useState<string>("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const extractPDFContent = async () => {
      try {
        setLoading(true);
        console.log("Starting PDF extraction...");

        // Dynamic import to avoid build issues
        const pdfjsLib = await import("pdfjs-dist");
        const pdfModule = pdfjsLib as any;

        // Set up worker from local public folder
        pdfModule.GlobalWorkerOptions.workerSrc = "/pdf.worker.min.mjs";

        const pdfUrl = "/profile.pdf";
        console.log("Loading PDF from:", pdfUrl);

        const response = await fetch(pdfUrl);
        if (!response.ok) {
          throw new Error(`HTTP Error: ${response.status}`);
        }

        const arrayBuffer = await response.arrayBuffer();
        console.log("PDF data received, size:", arrayBuffer.byteLength);

        const pdf = await pdfModule.getDocument({ data: arrayBuffer }).promise;
        console.log("PDF loaded successfully, pages:", pdf.numPages);

        let fullText = "";

        for (let i = 1; i <= pdf.numPages; i++) {
          try {
            const page = await pdf.getPage(i);
            const textContent = await page.getTextContent();
            const pageText = textContent.items
              .map((item: any) => (item.str ? item.str : ""))
              .join(" ");
            fullText += pageText + "\n\n";
            console.log(`Page ${i} extracted`);
          } catch (pageError) {
            console.warn(`Warning on page ${i}:`, pageError);
          }
        }

        console.log("Full text extracted, length:", fullText.length);
        if (fullText.trim()) {
          setPdfText(fullText);
          setError(null);
        } else {
          setError("PDF loaded but no text content found");
        }
      } catch (err: any) {
        console.error("Error loading PDF:", err);
        const errorMessage = err?.message || "Failed to load PDF";
        setError(`Error: ${errorMessage}`);
      } finally {
        setLoading(false);
      }
    };

    extractPDFContent();
  }, []);

  if (loading) {
    return (
      <div className="pdf-container">
        <div className="pdf-loading">Loading PDF content...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="pdf-container">
        <div className="pdf-error">
          <div>Error: {error}</div>
          <div style={{ fontSize: "12px", marginTop: "10px", opacity: 0.8 }}>
            Check browser console for more details
          </div>
        </div>
      </div>
    );
  }

  if (!pdfText) {
    return (
      <div className="pdf-container">
        <div className="pdf-error">No text content found in PDF</div>
      </div>
    );
  }

  return (
    <div className="pdf-container">
      <div className="pdf-content">
        {pdfText.split("\n").map((line, index) => (
          <p key={index}>{line || "\u00A0"}</p>
        ))}
      </div>
    </div>
  );
};

export default PDFViewer;
