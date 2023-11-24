import "./services.scss";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChindren: 0.1,
    },
  },
};
const Services = () => {
  const ref = useRef();

  const isInView = useInView(ref, { margin: "-100px" });
  return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
      // whileInView="animate"
      ref={ref}
      animate={"animate"}
    >
      <motion.div className="textContainer" variants={variants}>
        <p>
          I focus on helping you development and brand grow <br /> and move
          forward
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <img src="/people.png" alt="" />
          <h1>
            My <motion.b whileHover={{ color: "orange" }}>Services</motion.b>
          </h1>
        </div>
        <div className="title">
          <h1>
            For your{" "}
            <motion.b whileHover={{ color: "orange" }}>
              Business development
            </motion.b>
          </h1>
          <button>WHAT I DO?</button>
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Software Design</h2>
          <p>
            I specialize in creating the blueprints for your digital solutions.
            From crafting the architecture to planning the functionality, I
            ensure your software is not only visually appealing but also
            structurally sound
          </p>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>End-to-End Web Development</h2>
          <p>
            From inception to deployment, I provide a comprehensive development
            process. This encompasses every stage, from concept and design to
            coding and testing, ensuring a seamless and high-quality end
            product.
          </p>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Frontend Development</h2>
          <p>
            I excel in bringing your web interfaces to life. With a keen eye for
            aesthetics and a focus on user experience, I create responsive and
            user-friendly frontends that engage your audience and leave a
            lasting impression.
          </p>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>MERN Development</h2>
          <p>
            MERN stack development is my expertise in crafting dynamic,
            full-stack web applications. MongoDB serves as the database,
            Express.js powers the server, React drives the front-end, and
            Node.js manages server-side operations. This modern and versatile
            technology stack allows me to create highly responsive, scalable,
            and feature-rich web applications that meet your specific needs.
          </p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Services;
