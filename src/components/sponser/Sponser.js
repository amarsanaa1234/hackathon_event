import React from "react";
import Sponser_1 from "./assets/sponser_1.png";
import Sponser_2 from "./assets/sponser_2.png";

function Sponser() {
  return (
    <section className="h-screen w-full  text-black">
      <div className="p-20">
        <div className="flex justify-center text-4xl">
          <h2 className="text-white  font-mono">
            Sponser<span className="text-[#5680e9]">|</span>
          </h2>
        </div>

        <div className=" flex justify-center items-center flex-col mx-52 py-14">
          <div className="w-full grid gap-5">
            <div className="grid grid-cols-2 gap-4 ">
              <div className="sponser-card">
                <img src={Sponser_1} className="imgSize"></img>
              </div>
              <div className="sponser-card">
                <img src={Sponser_2} className="imgSize"></img>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-4 rounded-md">
              <div className="sponser-card">
                <img src={Sponser_2} className="imgSize"></img>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-4 rounded-md">
              <div className="sponser-card">
                <img src={Sponser_2} className="imgSize"></img>
              </div>
              <div className="sponser-card">
                <img src={Sponser_1} className="imgSize"></img>
              </div>
              <div className="sponser-card">
                <img src={Sponser_2} className="imgSize"></img>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4   rounded-md">
              <div className="sponser-card">
                <img src={Sponser_1} className="imgSize"></img>
              </div>
              <div className="sponser-card">
                <img src={Sponser_2} className="imgSize"></img>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-4   rounded-md">
              <div className="sponser-card">
                <img src={Sponser_2} className="imgSize"></img>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Sponser;
