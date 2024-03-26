import React, { useState } from "react";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import Header from "./Header";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { delay: 1.5, duration: 1.5 },
  },
  exit: {
    x: "-100vw",
    transition: { ease: "easeInOut" },
  },
};

const childVariants = {
  hidden: {
    x: 100,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 50,
      delay: 1.5,
      duration: 1.5,
    },
  },
  exit: {
    x: -100,
    transition: { ease: "easeInOut" },
  },
};

const childFadeInVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  transition: { delay: 1.5, duration: 1.5 },
};

const Intro = () => {
  const [bostonVisibility, setBostonVisibility] = useState(false);

  return (
    <>
    <Header />
    
    <motion.div
      className="relative flex items-center justify-center flex-col text-center pt-20 pb-6 min-h-screen"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      {bostonVisibility && (
        <div style={{
          backgroundImage: 'url("assets/Boston_skline_Splash.png")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.5,
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: -1
        }}/>
      )}
      <div className="flex flex-col md:flex-row text-left bg-white bg-opacity-60 rounded-xl px-6 py-6 mt-12 mx-auto md:mx-0">

        <div className="relative md:mr-6">
          <motion.h1
            className="text-4xl md:text-7xl mb-3 font-bold text-blue-600 transform transition duration-500 hover:scale-115 transition-all duration-300 ease-in-out transform hover:-translate-y-1"
            variants={childVariants}
          >
            Jarrod Kohl
          </motion.h1>
          
          <motion.p
            className="text-base md:text-xl mb-3 text-blue-600 italic"
            variants={childVariants}
          >
            Software Engineer & Web Designer
          </motion.p>
          <motion.p
            className="text-md max-w-2xl mb-6 text-gray-800"
            variants={childFadeInVariants}
          >
            Hello, I am a{" "}
            <span 
            onClick={() => setBostonVisibility(!bostonVisibility)}
            className="cursor-pointer hover:text-blue-600 transition duration-300 text-bold text-blue-600"
            >
              Boston
            </span>
            -based software developer. Fusing a background in real estate with a
            passion for technology, I deliver tailored software solutions and custom
            designed websites that offer seamless user experiences and efficient
            operations. Let me help you to drive growth through web design and
            technology.
          </motion.p>
        </div>
        <div className="mt-6 md:mt-0 relative w-64 h-64 md:w-96 md:h-96">
          <img
            src="assets/WRfenway0264.jpg"
            alt="picture of Jarrod looking awesome"
            className="absolute inset-0 w-full h-full object-cover rounded-xl shadow-lg"
          />
          <div className="absolute inset-0 rounded-xl shadow-lg"></div>
        </div>
      </div>
    </motion.div>
    </>
  );
};

export default Intro;
