import React from "react";
import Main from "../navigation/main";
import ReactPlayer from "react-player";


import Video1 from "../videos/Samir_Schabel.mp4";
import IMG1 from "../images/poster.jpg";

function pitch() {
  return (
    <div className="content">
      <div>
        <h1 className="title">My Pitch</h1>
      </div>

      <div>
        <Main />
      </div>

      <div className="videopitch" >
      <ReactPlayer url={Video1} playing={true} controls={true} width='640px' height='480px' />
      </div>
    
      <h3 className="pitchtext">
        Hi, ich bin der Samir. Ich bin Hamburger mit südhessischem Migrationshintergrund 
        und ich komme ursprünglich aus der Theologie. Ehrlich gesagt, hat mich dieser Berufszweig
        nicht wirklich geistig erfüllt. Ich wollte meine Situation ändern und war bereit etwas
        neues zu lernen.  In meiner Recherche nach einem geeigneten Träger fand,  ich das wunderbare
        Team von neuefische. In nur drei Monaten lernte ich Kenntnisse des FrontEnd Developments und
        die Applikation die ihr hier im Hintergrund laufen seht, ist das Ergebnis dieser geistreichen Zeit. 
        Ihr sucht einen Mitarbeiter, der hoch motiviert, kreativ und belastbar in stressigen Situationen ist
        und sich weiterentwickeln möchte, dann seid ihr bei MIR genau richtig. Ich suche eine Stelle als
        FrontEnd Developer in Vollzeit im Raum Hamburg und Remote bundesweit und freue mich wenn wir uns
        persönlich kennenlernen können.
        </h3>


    
    </div>
  );
}

export default pitch;
