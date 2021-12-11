import React from "react";
import Main from '../navigation/main'

function myapps() {
  return (
    <>
    <div>
      <h1 className="title">My Apps</h1>
    </div>

    <div>
      <Main />
    </div>

    <div className="content"></div>
  </>
  );
}

export default myapps;
