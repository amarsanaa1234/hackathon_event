import React from "react";
import "./Card.css";

const Card = ({ url, name, quote, mgt, bg, opa }) => {
  return (
    <>
      <div className={`${mgt} ${opa} opaAlwaysOne`}>
        <div
          className={
            bg ? "bg-gradient-to-b from-emerald-500 to-emerald-200 own" : "bg-gradient-to-b from-red-500 to-red-200 own"
            // "own"
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
