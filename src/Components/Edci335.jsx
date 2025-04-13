import React from 'react'
import { Worker, Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
function Edci335() {
  return (
    <div className="bg-green-500 min-h-screen p-4">
          <div className="bg-white rounded-md shadow-md p-4">
            <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
              <Viewer fileUrl="/docs/kisw335notes.pdf" />
            </Worker>
          </div>
        </div>
  )
}

export default Edci335
