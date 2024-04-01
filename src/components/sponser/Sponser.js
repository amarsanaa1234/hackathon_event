import React from "react";
import TextTyping from "./TextTyping";
import Sponser_1 from "./assets/sponser_1.png";
import Sponser_2 from "./assets/sponser_2.png";

function Sponser() {
  return (
    <section className="bg-main h-screen text-black">
      <div className="p-20 ">
        <div className="m-6 sm:m-24">
          <div className="flex justify-center text-4xl">
            <h2 className="text-[#f4f4f4] text-4xl font-mono">
              <TextTyping text="Main | Sponsor" />
            </h2>
          </div>
          <div className="flex justify-center items-center flex-col sm:mx-0 mx-5 py-14">
            <div className="w-full grid gap-5">
              <div className="grid grid-cols-1 gap-4 rounded-md">
                <div className="sponser-card">
                  <img src={Sponser_2} className="imgSize" alt="Sponser 1" />
                </div>
              </div>
              <div className="flex justify-center py-5 items-center text-[#f4f4f4]">
                <TextTyping text="Sponsor" />
              </div>
              <div className="grid grid-cols-1 gap-4 rounded-md sm:grid-cols-2">
                <div className="sponser-card">
                  <img src={Sponser_2} className="imgSize" alt="Sponser 2" />
                </div>

                <div className="sponser-card">
                  <img src={Sponser_2} className="imgSize" alt="Sponser 3" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Sponser;
