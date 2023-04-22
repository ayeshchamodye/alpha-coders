import ".././styles.css";
import { motion, AnimatePresence } from "framer-motion";

const item = {
  exit: {
    opacity: 0,
    height: 0,
    transition: {
      ease: "easeInOut",
      duration: 0.3,
      delay: 1.2
    }
  }
};

const Navbar = () => {
  return (
    <div className="sidenav active">
      <AnimatePresence>
        {open && (
          <motion.div
            className="menu_container"
            variants={item}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "100vh", opacity: 1 }}
            transition={{ duration: 0.5 }}
            exit="exit"
          >
            <ul>
              <li>
                <motion.a
                  href=""
                  initial={{ y: 80, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.8 }}
                  exit={{
                    opacity: 0,
                    y: 90,
                    transition: {
                      ease: "easeInOut",
                      delay: 1
                    }
                  }}
                >
                  <a className="hover-underline-animation">Home</a>
                </motion.a>
              </li>
              <li>
                <motion.a
                  href=""
                  initial={{ y: 80, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.7 }}
                  exit={{
                    opacity: 0,
                    y: 90,
                    transition: {
                      ease: "easeInOut",
                      delay: 0.8
                    }
                  }}
                >
                  <a className="hover-underline-animation">About</a>
                </motion.a>
              </li>
              <li>
                <motion.a
                  href=""
                  initial={{ y: 80, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  exit={{
                    opacity: 0,
                    y: 90,
                    transition: {
                      ease: "easeInOut",
                      delay: 0.6
                    }
                  }}
                >
                  <a className="hover-underline-animation">Services</a>
                </motion.a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
