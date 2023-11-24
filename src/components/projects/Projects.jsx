import { useRef } from "react";
import "./project.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
const items = [
  {
    id: 1,
    title: "CarHub - Car rental",
    img: "/car.jpg",
    desc: "This is a website for renting cars, and its named Rose CarHub. where you can find additional features such as a functioning search bar, data pulled from an api, an eco-friendly design, and working car details. When you click the see more button to move to the next page to view more information on cars, the url is also immediately changed.",
    link: "https://car-hub-car-rental.vercel.app/",
  },
  {
    id: 2,
    title: "Crypto Dashboard",
    img: "/crypto.jpg",
    desc: "It is a Live auto updating Dashboard. This dashboard visualizes Crypto Market Data. Data used is dynamic, coming directly from crypto API. Creating a crypto live dashboard using React with live data fetching from an API and interactive features like a dropdown to select different currencies is a great project. To implement this, i've used ApexCharts for rendering dynamic and interactive charts.",
    link: "https://crypto-live-by-islam.netlify.app/",
  },
  {
    id: 3,
    title: "GPT-3",
    img: "/gpt3.jpg",
    desc: "GPT-3 is the name of this interactive front-end project. I used Tailwind CSS and React to create this website. This website is only available for desktop and tablet viewing. This is an fully responsive frontend project.",
    link: "https://gpt-3bymuntasirul.netlify.app/",
  },
  {
    id: 4,
    title: "Apple Mart",
    img: "/applemart.jpg",
    desc: "This is an E-commerce Website which is called Apple_Mart. I used Node Js., JavaScript, React Js, HTML,CSS, Bootstrap etc.",
    link: "https://applemartby-m-islam.netlify.app/",
  },
  {
    id: 5,
    title: "My Protfolio",
    img: "/protfolio.jpg",
    desc: "This is my portfolio where you can view my qualifications.",
    link: "https://m-islam.netlify.app/",
  },
  {
    id: 6,
    title: "3D Shirt Customization",
    img: "/3dshirt.jpg",
    desc: "I build a 3D shirt customization website using React and Three.js, where users can change shirt colors, add stickers, and even request AI-generated shirt designs based on their preferences. This platform offers a dynamic and engaging way for users to create and visualize their own custom shirt designs.",
    link: "https://3dshirtby-muntasirul.netlify.app/",
  },
  {
    id: 7,
    title: "Text To Speech",
    img: "/texttospeech.jpg",
    desc: "This voice to speech software is a great tool for people who want to listen to text instead of reading it. It can also be used by people with disabilities who have difficulty reading. This voice to speech software is a Javascript application that uses to convert text into audio. It can be used to read aloud text files, websites, and other documents. The software is easy to use and can be customized to meet your needs.",
    link: "https://text-to-speech-byislam.netlify.app/",
  },
];

const Single = ({ item }) => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
  });
  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);
  return (
    <>
      <section>
        <div className="container">
          <div className="imageContainer" ref={ref}>
            <a href={item.link}>
              <img src={item.img} alt="" />
            </a>
          </div>

          <motion.div className="textContainer" style={{ y }}>
            <a href={item.link}>
              <h2>{item.title}</h2>
            </a>

            <p>{item.desc}</p>

            <button>
              {" "}
              <a href="https://github.com/Muntasirul-2002" target="_blank">
                Github
              </a>{" "}
            </button>
          </motion.div>
        </div>
      </section>
    </>
  );
};

const Projects = () => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end ", "start start"],
  });
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });
  return (
    <div className="projects">
      <div className="progress">
        <h1>Futured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
        <p>Click on the photo to see the demo</p>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Projects;
