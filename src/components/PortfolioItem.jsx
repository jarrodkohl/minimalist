import React from "react";

const PortfolioItem = ({ title, imgUrl, stack, link }) => {

  return (
    <div>
      <img
      src={imgUrl}
      alt="portfolio"
      className="w-full h-36 md:h-48 object-cover cursor-pointer"
      />
      <div className="w-full p-4">
        <h3>{title}</h3>
        <p>
          {stack.map((item) => (
            <span key={item} className="text-sm"
            >{item}</span>
            ))}
        </p>
      </div>
    </div>
  )
}

export default PortfolioItem