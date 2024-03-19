import React from "react";

const Box = ({ url, wid, imgwid }) => {
  return (
    <>
      <div
        className={`${wid} bg-gradient-to-r from-yellow-200 to-emerald-200 rounded-s-2xl border-4 py-6 border-black justify-center flex`}
      >
        <img src={url} className={`${imgwid}`} />
      </div>
    </>
  );
};

export default Box;
