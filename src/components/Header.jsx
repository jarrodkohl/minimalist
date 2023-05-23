import React, { useState } from "react";
import { Link } from "react-scroll";

const Header = () => {
  const [activeSection, setActiveSection] = useState('intro');

  return (
    <header className="fixed top-0 left-0 w-full bg-white bg-opacity-60 z-20 flex justify-end p-4 gap-4">
      {activeSection !== 'projects' && (
        <Link
          to="projects"
          spy={true}
          smooth={true}
          onSetActive={() => setActiveSection('projects')}
          className="px-4 py-2 rounded-full border-blue-500 border-2 text-blue-500 hover:bg-blue-500 hover:text-white shadow hover:shadow-lg transition duration-300"
        >
          Projects
        </Link>
      )}
      {activeSection !== 'timeline' && (
        <Link
          to="timeline"
          spy={true}
          smooth={true}
          onSetActive={() => setActiveSection('timeline')}
          className="px-4 py-2 rounded-full border-blue-500 border-2 text-blue-500 hover:bg-blue-500 hover:text-white shadow hover:shadow-lg transition duration-300"
        >
          Timeline
        </Link>
      )}
      {activeSection !== 'contact' && (
        <Link
          to="contact"
          spy={true}
          smooth={true}
          onSetActive={() => setActiveSection('contact')}
          className="px-4 py-2 rounded-full border-blue-500 border-2 text-blue-500 hover:bg-blue-500 hover:text-white shadow hover:shadow-lg transition duration-300"
        >
          Contact
        </Link>
      )}
    </header>
  );
};

export default Header;
