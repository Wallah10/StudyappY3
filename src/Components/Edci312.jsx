import React from 'react'
import { Worker, Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
function Edci312() {
return (
    <div className="w-full h-screen overflow-auto bg-[#f8ebd3]">
        <div className="bg-green-500 min-h-screen">
              <div className="bg-white rounded-md shadow-md p-4">
                <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
                  <Viewer fileUrl="/docs/edci312cbc.pdf" />
                </Worker>
              </div>
            </div>
        </div>
    );
}

export default Edci312
