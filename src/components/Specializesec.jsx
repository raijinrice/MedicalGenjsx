import React from "react";
import red1 from "../assets/minired1.png";
import red2 from "../assets/minired2.png";
import red3 from "../assets/minired3.png";
import arrow from "../assets/iconarrow.png";

export default function Specializesec() {
  return (
    <div className="bg-[#2D4059] w-[1440px] h-[850px]">
      <div className="bg-white w-[234px] h-[294px] shadow-lg relative px-9 py-10 left-[43rem] top-[7rem]">
        <img src={red1} />
        <h5 className="relative font-mont text-[#252B42] text-base font-bold top-4">
          Quick examination
        </h5>
        <div className="bg-[#FF7171] w-[50px] h-[2px] relative top-8 left-[2px]"></div>
        <p className="text-[#737373] font-mont text-sm font-normal leading-normal relative top-[52px]">
          The gradual <br /> accumulation of <br /> information about{" "}
        </p>
      </div>

      <div className="bg-white w-[234px] h-[294px] shadow-lg relative px-9 py-10 left-[60rem] top-[1.6rem]">
        <img src={red2} />
        <h5 className="relative font-mont text-[#252B42] text-base font-bold top-4">
          Emergency Case
        </h5>
        <div className="bg-[#FF7171] w-[50px] h-[2px] relative top-8 left-[2px]"></div>
        <p className="text-[#737373] font-mont text-sm font-normal leading-normal relative top-[52px]">
          The gradual <br /> accumulation of <br /> information about{" "}
        </p>
      </div>

      <div className="bg-white w-[234px] h-[310px] shadow-lg relative px-9 py-10 left-[43rem] bottom-[10rem]">
        <img src={red3} />
        <h5 className="relative font-mont text-[#252B42] text-base font-bold top-4 leading-relaxed">
          Best Dental <br /> surgeons
        </h5>
        <div className="bg-[#FF7171] w-[50px] h-[2px] relative top-8 left-[2px]"></div>
        <p className="text-[#737373] font-mont text-sm font-normal leading-normal relative top-[52px]">
          The gradual <br /> accumulation of <br /> information about{" "}
        </p>
      </div>

      <div className="bg-[#FF7171] w-[92px] h-[7px] relative bottom-[38rem] left-[10.6rem]"></div>
      <h1 className="relative text-white font-mont text-[40px] font-bold bottom-[35.3rem] leading-tight left-[10.3rem]">
        Our Doctors <br />
        Specialize in you
      </h1>

      <p className="relative text-white font-mont text-sm font-normal bottom-[33rem] left-[10.6rem] leading-normal">
        Problems trying to resolve the conflict between <br /> the two major
        realms of Classical physics: <br /> Newtonian mechanics{" "}
      </p>

      <h6 className="relative text-[#96BB7C] font-mont text-sm font-bold bottom-[31rem] left-[10.6rem]">
        Learn More
      </h6>
      <img src={arrow} className="relative bottom-[32.1rem] left-[16.5rem]" />
    </div>
  );
}
