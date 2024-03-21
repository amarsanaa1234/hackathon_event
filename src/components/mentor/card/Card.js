import React, { useState } from "react";
import "./Card.css";

const Card = ({ url, name, quote, mgt, bg, opa, info }) => {
  const [isClicked, SetIsClicked] = useState(false);
  return (
    <>
      {isClicked && (
        <div className="selected">
          <div className={bg ? "bg-emerald-400" : "bg-red-400"}>
            <img src={url} />
          </div>
          <div className="font-bold text-black text-left inline-block align-middle">
            <h1 className="mb-3 text-3xl">{name}</h1>
            <p className="text-2xl">{quote}</p>
            <p className="text-2xl">{info}</p>
          </div>
          <div
            onClick={() => {
              SetIsClicked(false);
            }}
            className="absolute right-3 top-2 p-3 cursor-pointer text-black font-bold hover:text-opacity-55"
          >
            X
          </div>
        </div>
      )}
      {/* {!isClicked && ( */}
      <div
        className={`${mgt} ${opa} opaAlwaysOne cursor-pointer`}
        onClick={() => {
          SetIsClicked(true);
        }}
      >
        <div
          className={
            bg ? "bg-gradient-to-b from-emerald-500 to-emerald-200 own" : "bg-gradient-to-b from-red-500 to-red-200 own"
          }
        >
          <img src={url} alt="mentor" className="pt-7" />
        </div>
        <div className="p-4 text-white">
          <h3 className="text-lg font-bold">{name}</h3>
          <p className="text-sm">{quote}</p>
        </div>
      </div>
      {/* )} */}
    </>
  );
};

export default Card;
