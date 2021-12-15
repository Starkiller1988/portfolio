import React from "react";
import Main from "../navigation/main";

import Pdf from '../components/pdf'

function cv() {
 

  return (
    <>
      <div>
        <h1 className="title">My CV</h1>
      </div>

      <div>
        <Main />
      </div>

      <div className="cv-viewer">
        <Pdf />
      </div>

    </>
  );
}

export default cv;
