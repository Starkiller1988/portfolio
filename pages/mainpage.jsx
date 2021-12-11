import React from "react";
import Main from "../navigation/main";

function MainPage() {
  return (
    <>
      <div>
        <h1 className="title">Samir Schabel Portfolio</h1>
      </div>

      <div>
        <Main />
      </div>

      <div className="content">
        <h2>Welcome</h2>
      </div>
    </>
  );
}

export default MainPage;
