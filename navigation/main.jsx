import { Link } from "react-router-dom";

const Main = () => {
  return (
    <>
     <div>
      </div>
      
      <div className="navigation">
        <ul>
        <li>
            <Link to="/">
              <h1>Home</h1>
            </Link>
          </li>
          <li>
            <Link to="/about">
              <h1>About Me</h1>
            </Link>
          </li>
          <li>
          <Link to="/cv">
              <h1>My CV</h1>
            </Link>
          </li>
          <li>
          <Link to="/myapps">
              <h1>My Apps</h1>
            </Link>
          </li>
          <li>
          <Link to="/pitch">
              <h1>My Pitch</h1>
            </Link>
          </li>
          <li>
          <Link to="/techstack">
              <h1>Tech Stack</h1>
            </Link>
          </li>
          <li>
          <Link to="/contact">
              <h1>Contact</h1>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Main;
