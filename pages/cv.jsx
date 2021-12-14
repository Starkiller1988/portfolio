import React, { useState } from "react";
import Main from "../navigation/main";
import { Document, Page } from "react-pdf";

function cv() {
  const [numPages, setNumPages] = useState(2);
  const [pageNum, setPageNum] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <>
      <div>
        <h1 className="title">My CV</h1>
      </div>

      <div>
        <Main />
      </div>

      <div>
        <Document
          file="../documents/Lebenslauf_Samir_Schabel.pdf"
          onLoadSuccess={onDocumentLoadSuccess}
        >
          <Page pageNum={pageNum} />
        </Document>
        <p>
          Page {pageNum} of {numPages}
        </p>
      </div>
    </>
  );
}

export default cv;
