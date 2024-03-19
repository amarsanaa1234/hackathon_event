import React from "react";
import Box from "./Box/Box";
import dataBank from "../../image/databank-logo-3.png";
import nashaTech from "../../image/NashaTech_Logo-01 (1).png";
import fibo from "../../image/fibocloud.png";

const Sponser = () => {
  return (
    <>
      <div className="text-center my-20">
        <h1 className="text-6xl text-zinc-200 my-12 font-sans">Sponsors</h1>
        <div>
          <div className="flex justify-center ">
            <Box url={dataBank} wid="w-2/5" imgwid={`w-2/3`} />
            <Box url={nashaTech} wid="w-2/5" imgwid={`w-2/3`} />
          </div>
          <div className="flex justify-center">
            <Box url={fibo} wid="w-4/5" imgwid={`w-1/3`} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Sponser;
