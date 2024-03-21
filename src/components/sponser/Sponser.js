import React from "react";
import InfiniteScroll from "./InfiniteScroll";
import TextTyping from "./TextTyping";
import Sponser_1 from "./assets/sponser_1.png";
import Sponser_2 from "./assets/sponser_2.png";

function Sponser() {
  return (
    <section className="h-screen w-full bg-main  text-black">
      <div className="">
        <div className="p-20">
          <div className="flex justify-center text-4xl">
            <h2 className="text-[#f4f4f4] text-4xl font-mono">
              {/* Main |<span className="text-white"> Sponser</span> */}
              <TextTyping text="Main | Sponser" />
            </h2>
          </div>

          <div className=" flex justify-center items-center flex-col mx-52 py-14">
            <div className="w-full grid gap-5">
              <div className="grid grid-cols-1 gap-4 rounded-md">
                <div className="sponser-card">
                  <img src={Sponser_2} className="imgSize"></img>
                </div>
              </div>
              <div className="flex justify-center py-5 items-center text-[#f4f4f4]">
                <TextTyping text="Sponser" />
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
            </div>
          </div>
        </div>
        {/* <InfiniteScroll /> */}
      </div>
    </section>
  );
}

export default Sponser;
