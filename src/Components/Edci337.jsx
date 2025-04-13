import React from 'react'
import { Worker, Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
function Edci337() {
  return (
    
          <div className="bg-white rounded-md shadow-md">
            <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
              <Viewer fileUrl="/docs/geogTmethods.pdf" />
            </Worker>
          </div>
       
  )
}

export default Edci337
