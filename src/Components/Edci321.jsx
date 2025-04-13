

import React from 'react';
import { Worker, Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

function Edci321() {
  return (
    
      <div className="bg-[#f5f591] rounded-md shadow-md">
        <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
          <Viewer fileUrl="/docs/itumanotes.pdf" />
        </Worker>
      </div>
   
  );
}

export default Edci321;
