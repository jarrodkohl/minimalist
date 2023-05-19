import React from "react";

const TimelineItem = ({ year, title, duration, details }) => {
  return (
    <div className="flex items-start mb-4">
      <div className="flex-none w-4 h-4 bg-gray-500 rounded-full mt-1 mr-4"></div>
      <div>
        <div className="flex items-center text-sm font-semibold text-gray-900 mb-1">
          <span className="inline-block bg-gray-900 text-white px-2 py-1 rounded-md mr-2">{year}</span>
          <h3 className="">{title}</h3>
        </div>
        <div className="text-sm text-gray-700">{duration}</div>
        <p className="text-base text-gray-500 mt-1">{details}</p>
      </div>
    </div>
  );
}

export default TimelineItem;
