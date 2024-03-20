import "./Mentor.css";
import React, { useState } from "react";
import Card from "./card/Card";
import men1 from "./imgs/men.png";

const Mentor = () => {
  const [isHover, setIsHover] = useState(false);
  return (
    <>
      <div className="text-center font-sans pt-60">
        <h1 className="text-6xl text-zinc-200 pt-9 pb-8">Learn from Mentors</h1>
        <h2 className="text-white/40 pb-7">This is a changeable text</h2>
        {!isHover && (
          <div
            className="grid-cols-6 grid justify-center gap-4 mx-52"
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
          >
            <Card url={men1} name="Mentor1" quote="Something about mentor" mgt={"mt-6"} bg={true} />
            <Card url={men1} name="Mentor2" quote="Something about mentor" mgt={"mt-28"} />
            <Card url={men1} name="Mentor3" quote="Something about mentor" mgt={"mt-12"} bg={true} />
            <Card url={men1} name="Mentor4" quote="Something about mentor" mgt={"mt-20"} />
            <Card url={men1} name="Mentor5" quote="Something about mentor" mgt={"mt-28"} bg={true} />
            <Card url={men1} name="Mentor6" quote="Something about mentor" mgt={"mt-16"} />
          </div>
        )}
        {isHover && (
          <div
            className="grid-cols-6 grid justify-center gap-4 mx-52"
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
          >
            <Card url={men1} name="Mentor1" quote="Something about mentor" opa="chOpa" mgt={"mt-6"} bg={true} />
            <Card url={men1} name="Mentor2" quote="Something about mentor" opa="chOpa" mgt={"mt-28"} />
            <Card url={men1} name="Mentor3" quote="Something about mentor" opa="chOpa" mgt={"mt-12"} bg={true} />
            <Card url={men1} name="Mentor4" quote="Something about mentor" opa="chOpa" mgt={"mt-20"} />
            <Card url={men1} name="Mentor5" quote="Something about mentor" opa="chOpa" mgt={"mt-28"} bg={true} />
            <Card url={men1} name="Mentor6" quote="Something about mentor" opa="chOpa" mgt={"mt-16"} />
          </div>
        )}
      </div>
    </>
  );
};

export default Mentor;
// #5680E9

// #84CEEB

// #5AB9EA

// #C1C8E4

// #8860D0
