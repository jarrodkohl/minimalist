import React from "react";
import { Link } from "react-scroll";

const Intro = () => {
  return (
    <div className="flex items-center justify-center flex-col text-center pt-20 pb-6 min-h-screen">
      <h1 className="text-4xl md:text-7xl mb-3 font-bold text-blue-600 transform transition duration-500 hover:scale-105"
      >
      Jarrod Kohl</h1>
      <p className="text-base md:text-xl mb-3 text-blue-600 italic"
      >Software Engineer & Web Designer</p>
      <p className="text-sm max-w-4xl mb-6 text-gray-800"
      >Hello, I am a Boston-based software developer. Fusing a background in real estate with a passion for technology, I deliver tailored software solutions and custom designed websites that offer seamless user experiences and efficient operations. Let me help you to drive growth through web design and technology.</p>
      <div className="flex gap-4">
        <Link 
          to="contact"
          spy={true} 
          smooth={true} 
          className="px-4 py-2 rounded-full border-blue-500 border-2 text-blue-500 hover:bg-blue-500 hover:text-white shadow hover:shadow-lg transition duration-300"
         >Contact</Link>
        <Link 
          to="projects" 
          spy={true} 
          smooth={true} 
          className="px-4 py-2 rounded-full border-blue-500 border-2 text-blue-500 hover:bg-blue-500 hover:text-white shadow hover:shadow-lg transition duration-300"
          >Projects</Link>
        <Link 
          to="timeline" 
          spy={true} 
          smooth={true} 
          className="px-4 py-2 rounded-full border-blue-500 border-2 text-blue-500 hover:bg-blue-500 hover:text-white shadow hover:shadow-lg transition duration-300"
          >Timeline</Link>
      </div>
    </div>
  )
}

export default Intro;
