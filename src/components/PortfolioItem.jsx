import React from "react";

const PortfolioItem = ({ title, imgUrl, stack, link, subtitle }) => {

  return (
    <div 
    className="border-2 border-stone-400 rounded-md shadow-md mx-2 transition-all transform hover:scale-105 duration-300 ease-in-out cursor-pointer"
    onClick={() => window.open(link, "_blank")}
    >
      <img
      src={imgUrl}
      alt="portfolio"
      className="w-full h-36 md:h-48 object-cover cursor-pointer"
      />
      <div className="w-full p-4">
        <h3 className="text-lg md:text-xl mb-2 md:mb-3 font-semibold">{title}</h3>
        <h5 className="mb-2 md:mb-3">{subtitle}</h5>
        <p className="flex flex-wrap gap-2 float-row items-center justify-start text-xs md:text-sm">
          {stack.map((item) => (
            <span key={item} className="inline-block px-2 py-1 rounded bg-gray-200 text-gray-800"
            >{item}</span>
            ))}
        </p>
      </div>
    </div>
  )
}

export default PortfolioItem