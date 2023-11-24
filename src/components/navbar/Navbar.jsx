import Sidebar from "../sidebar/Sidebar";
import "./Navbar.scss";
import { motion } from "framer-motion";
const Navbar = () => {
  return (
    <div className="navbar">
      {/* sidebar */}
      <Sidebar />
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          Project Showcase
        </motion.span>
        <div className="social">
          <a href="https://www.facebook.com/muntasirul.msd" target="_blank">
            <img src="/facebook.png" alt="facebook" />
          </a>
          {/* <a href="">
            <img src="/instagram.png" alt="instagram" />
          </a> */}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
