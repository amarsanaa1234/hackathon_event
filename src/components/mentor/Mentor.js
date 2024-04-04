import "./Mentor.css";
import React, { useState } from "react";
import Card from "./card/Card";
import men1 from "./imgs/men.png";

const Mentor = () => {
  const [isHover, setIsHover] = useState(false);
  return (
    <>
      <div className="text-center font-sans pt-60 mb-44">
        <h1 className="text-6xl text-zinc-200 pt-9 pb-8 max-md:text-4xl max-md:pb-4">Learn from Mentors</h1>
        <h2 className="text-white/40 pb-7 max-md:text-lg">This is a changeable text</h2>
        {!isHover && (
          <div className="grid-cols-6 grid justify-center gap-4 x_linear contain" onMouseEnter={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)}>
            <Card url={men1} name="Mentor1" quote="Something about mentor" bg={true} />
            <Card url={men1} name="Mentor2" quote="Something about mentor" />
            <Card url={men1} name="Mentor3" quote="Something about mentor" bg={true} />
            <Card url={men1} name="Mentor4" quote="Something about mentor" />
            <Card url={men1} name="Mentor5" quote="Something about mentor" bg={true} />
            <Card url={men1} name="Mentor6" quote="Something about mentor" />
          </div>
        )}
        {isHover && (
          <div className="grid-cols-6 grid justify-center gap-4 x_linear contain " onMouseEnter={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)}>
            <Card
              url={men1}
              name="Mentor1"
              info={
                <>
                  <p>Education: SICT</p>
                  <p>Job Title: Mentor job</p>
                </>
              }
              quote="Something about mentor"
              opa="chOpa"
              bg={true}
            />
            <Card
              url={men1}
              name="Mentor2"
              info={
                <>
                  <p>Education: SICT</p>
                  <p>Job Title: Mentor job</p>
                </>
              }
              quote="Something about mentor"
              opa="chOpa"
            />
            <Card
              url={men1}
              name="Mentor3"
              info={
                <>
                  <p>Education: SICT</p>
                  <p>Job Title: Mentor job</p>
                </>
              }
              quote="Something about mentor"
              opa="chOpa"
              bg={true}
            />
            <Card
              url={men1}
              name="Mentor4"
              info={
                <>
                  <p>Education: SICT</p>
                  <p>Job Title: Mentor job</p>
                </>
              }
              quote="Something about mentor"
              opa="chOpa"
            />
            <Card
              url={men1}
              name="Mentor5"
              info={
                <>
                  <p>Education: SICT</p>
                  <p>Job Title: Mentor job</p>
                </>
              }
              quote="Something about mentor"
              opa="chOpa"
              bg={true}
            />
            <Card
              url={men1}
              name="Mentor6"
              info={
                <>
                  <p>Education: SICT</p>
                  <p>Job Title: Mentor job</p>
                </>
              }
              quote="Something about mentor"
              opa="chOpa"
            />
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
