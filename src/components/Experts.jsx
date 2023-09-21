import React from "react";
import doctor from "../assets/doctor.png";
import card from "../assets/redcard.png";
import bar from "../assets/analytics.png";
import whitebg from "../assets/whitebg.png";
import arrow from "../assets/greenarrow2.png";

export default function Experts() {
  return (
    <div className="bg-[#2D4059] w-[1400px] h-[900px]">
      <img src={whitebg} className="relative p-20 left-[11rem] top-[5rem]" />
      <img
        src={doctor}
        className="relative p-20 bottom-[26.6rem] left-[10rem]"
      />
      <img src={card} className="relative left-[33rem] bottom-[46rem]" />
      <img src={bar} className="relative left-[9rem] bottom-[46.6rem]" />

      <div className="relative w-[95px] h-[7px] bg-[#FF7171] bottom-[61.5rem] left-[52rem]"></div>
      <h2 className="relative font-mont text-4xl font-bold text-white left-[51.8rem] bottom-[59.3rem]">
        Meet Our Experts
      </h2>
      <p className="relative text-white font-mont text-sm font-normal leading-normal bottom-[57rem] left-[52rem]">
        Problems trying to resolve the conflict between <br /> the two major
        realms of Classical physics: <br /> Newtonian mechanics{" "}
      </p>
      <h6 className="relative text-[#96BB7C] font-mont text-sm font-bold bottom-[55rem] left-[52.1rem]">
        Learn more
      </h6>
      <img src={arrow} className="relative bottom-[56.1rem] left-[58.4rem]" />

      <h1 className="relative text-[#96BB7C] font-mont text-6xl font-bold leading-snug bottom-[38rem] left-[11.5rem]">
        15K
      </h1>
      <h6 className="relative text-white font-mont text-base font-bold bottom-[37.8rem] left-[10.2rem]">
        Happy Customers
      </h6>
      <h1 className="relative text-[#96BB7C] font-mont text-6xl font-bold leading-snug left-[28.5rem] bottom-[44.8rem]">
        150K
      </h1>
      <h6 className="relative text-white font-mont text-base font-bold bottom-[44.5rem] left-[28.8rem]">
        Monthly Visitors
      </h6>
      <h1 className="relative text-[#96BB7C] font-mont text-6xl font-bold bottom-[50.7rem] left-[49rem]">
        15
      </h1>
      <h6 className="relative text-white font-mont text-base font-bold bottom-[49.8rem] left-[46rem]">
        Countries Worldwide
      </h6>
      <h1 className="relative text-[#96BB7C] font-mont font-bold text-6xl bottom-[56rem] left-[65.2rem]">
        100+
      </h1>
      <h6 className="relative text-white font-mont font-bold text-base bottom-[55.3rem] left-[65.6rem]">
        Top Partners
      </h6>
    </div>
  );
}
