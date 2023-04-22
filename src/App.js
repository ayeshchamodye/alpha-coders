import "./styles.css";
import { GiHamburgerMenu } from "react-icons/gi";
import Navbar from "./components/Navbar";
import Title from "./components/Title";
import Serv from "./components/Serv";
import scrollX from "react-native";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function App() {
  const [showNav, setShowNav] = useState(false);
  return (
    <div className="App">
      <scrollY className="scrollY">
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

        <div>{showNav && <Navbar />}</div>
        <Serv />
      </scrollY>
    </div>
  );
}
