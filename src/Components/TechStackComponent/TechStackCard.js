import React from "react";

const TechStackCard = ({ logo, name }) => {
  return (
    <>
      <div className="h-12 w-12">{logo}</div>
      <p className="text-white font-poppins text-xs font-bold text-center text-shadow-lg">
        {name}
      </p>
    </>
  );
};

export default TechStackCard;
