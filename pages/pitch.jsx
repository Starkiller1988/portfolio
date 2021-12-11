import React from "react";
import Main from "../navigation/main";
import { ReactVideo } from "reactjs-media";

import Video1 from "../videos/Samir_Schabel.mp4";
import IMG1 from "../images/poster.jpg";

function pitch() {
  return (
    <>
      <div>
        <h1 className="title">My Pitch</h1>
      </div>

      <div>
        <Main />
      </div>

      <div className="content">
        <h3 className="">This was my </h3>

        <ReactVideo
          className="video_pitch"
          src={Video1}
          poster={IMG1}
          primaryColor="red"
          width="300"
          height="200"
        />
      </div>
    </>
  );
}

export default pitch;
