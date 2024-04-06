import React, { useState } from "react";
import sysco from "../../../image/Syscotech logo 3.png";
import "./Card.css";

const Card = ({ url, name, quote, mgt, bg, opa, info }) => {
  const [isClicked, SetIsClicked] = useState(false);
  return (
    <>
      {isClicked && (
        <div className="absolute card">
          <div className={bg ? "bg-gradient-to-b from-emerald-300 to-emerald-100 selecter" : "bg-gradient-to-b from-red-300 to-red-100 selecter"}>
            <div className="selected">
              <div className="topping">
                <p> {"<Dev Hackaton 2024 />"}</p>
                <p>|</p>
                <div>
                  <img src={sysco} />
                </div>
              </div>
            </div>
            <div className="content">
              <div>
                <h3>{quote}</h3>
                <h1>{name}</h1>
                <p>{info}</p>
              </div>
              <div>
                <img src={url} />
              </div>
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
        </div>
      )}

      <div
        className={`${mgt} ${opa} opaAlwaysOne cursor-pointer`}
        onClick={() => {
          SetIsClicked(true);
        }}
      >
        <div className={bg ? "bg-gradient-to-b from-emerald-500 to-emerald-200 own" : "bg-gradient-to-b from-red-500 to-red-200 own"}>
          <img src={url} alt="mentor" className="pt-7" />
        </div>
        <div className="p-4 text-white mentorInfo">
          <h3 className="text-lg font-bold">{name}</h3>
          <p className="text-sm">{quote}</p>
        </div>
      </div>
      {/* )} */}
    </>
  );
};

export default Card;
