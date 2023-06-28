import React from "react";
import { useInView } from 'react-intersection-observer';
import { motion } from "framer-motion";

const Value = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger the animation only once
    threshold: 0.1,    // Percentage of the element is visible
  });

  return (
    <div
      className="md:flex justify-between my-10 px-4 p-10 rounded-xl"
      id="value"
      ref={ref}
    >
      <motion.div 
        className="w-full md:w-1/2 space-y-4"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : -50 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-4xl mb-4 text-blue-700">Powering Up Your Web Presence</h2>
        <p className="text-lg">
          As a full-stack developer with a knack for AI integrations, I'm your
          go-to tech expert for building digital solutions that take your
          business to the next level.
        </p>
        <p className="text-lg mt-4">
          Whether you're looking for a bespoke AI solution, a fast-loading
          website, or you're just starting to explore the digital landscape,
          let's chat. Reach out today and let's turn your vision into a
          tech-driven reality!
        </p>
      </motion.div>
      
      <motion.div 
        className="w-full md:w-1/2 space-y-4 mt-6 md:mt-0 md:pl-8"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <h3 className="text-2xl mb-4 text-blue-700">What I bring to the table:</h3>
        <ul className="list-disc list-inside text-lg">
          <li>Specialized in creating fast, SEO-optimized websites and applications in Wordpress and Webflow</li>
          <li>Adept at converting site visitors into leads and accelerating sales</li>
          <li>Proficient in infusing intelligence into your digital presence with AI skills</li>
          <li>Experience in creating custom integrations tailored to supercharge your business processes, drive efficiency, and deliver a superior user experience</li>
        </ul>
       
      </motion.div>
    </div>
  )
}

export default Value;
