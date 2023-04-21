import "./styles.css";
import { GiHamburgerMenu } from "react-icons/gi";
import Navbar from "./components/Navbar";
import Title from "./components/Title";
import { useState } from "react";

export default function App() {
  const [showNav, setShowNav] = useState(false);
  return (
    <div className="App">
      <header>
        <div className="head">
          <ul>
            <li>
              <GiHamburgerMenu
                className="menu"
                onClick={() => setShowNav(!showNav)}
              />
            </li>
            <li>
              <h3>ALPHA CODERS</h3>
            </li>
            <li>
              <Title />
            </li>
          </ul>
        </div>
      </header>
      {showNav && <Navbar />}
    </div>
  );
}
