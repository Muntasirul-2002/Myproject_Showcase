import Projects from "../projects/Projects";
import "./hero.scss";
import { motion } from "framer-motion";
const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerchildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};

const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-220%",

    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 20,
    },
  },
};
const Hero = () => {
  const items = ["Projects"];
  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div
          className="textContainer"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h2 variants={textVariants} whileHover={{ color: "orange" }}>
            MUNTASIRUL ISLAM
          </motion.h2>
          <motion.h1 variants={textVariants}>
            Professional FrontEnd Developer
          </motion.h1>
          <motion.div className="buttons" variants={textVariants}>
            <motion.button
              variants={textVariants}
              whileHover={{
                backgroundColor: "orange",
                color: "Black",
              }}
            >
              {items.map((item) => (
                <a href={`#${item}`} key={item}>
                  See the Latest Works
                </a>
              ))}
            </motion.button>
            <motion.button
              variants={textVariants}
              whileHover={{ backgroundColor: "white", color: "Black" }}
            >
              {" "}
              <a
                href="https://www.linkedin.com/in/muntasirulislam/"
                target="_blank"
              >
                Contact Me
              </a>
            </motion.button>
          </motion.div>
          <motion.img
            variants={textVariants}
            animate="scrollButton"
            src="/scroll.png"
            alt="scroll"
          />
        </motion.div>
      </div>
      <motion.div
        className="slidingTextcontainer"
        variants={sliderVariants}
        initial="initial"
        animate="animate"
      >
        Freelencer
      </motion.div>

      {/* <div className="imageContainer">
        <img src="/hero.png" alt="" />
      </div> */}
    </div>
  );
};

export default Hero;
