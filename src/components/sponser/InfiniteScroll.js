import React from "react";
import Sponser_1 from "./assets/sponser_1.png";
import Sponser_2 from "./assets/sponser_2.png";
const InfiniteScroll = () => {
  return (
    <div className="infinite-scroll-container flex justify-center items-center">
      <div className="infinite-scroll-text text-white">
        <span className="infinite-scroll-duplicate">
          <div className="flex ">
            <img src={Sponser_2} className="imgSize"></img>
            <img src={Sponser_1} className="imgSize"></img>
          </div>
        </span>
      </div>
    </div>
  );
};

export default InfiniteScroll;
