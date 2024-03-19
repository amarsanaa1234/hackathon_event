import React from "react";

const Card = ({ url, name, quote, mgt, bg }) => {
  return (
    <>
      <div className={mgt}>
        <div
          className={
            bg ? "bg-gradient-to-b from-emerald-400 to-emerald-100" : "bg-gradient-to-b from-red-400 to-red-100"
          }
        >
          <img src={url} alt="mentor" className="pt-7" />
        </div>
        <div className="p-4 text-white">
          <h3 className="text-lg font-bold">{name}</h3>
          <p className="text-sm">{quote}</p>
        </div>
      </div>
    </>
  );
};

export default Card;
