import React from "react";
import stars from "../assets/reviewstars.png";
import pfp1 from "../assets/testimonial3.png";
import pfp2 from "../assets/testimonial2.png";
import pfp3 from "../assets/testimonial1.png";

export default function Testimonialssec() {
  return (
    <div className="w-[1444px] h-[855px] bg-[#2D4059]">
      <h6 className="relative font-mont text-sm font-bold text-[#96BB7C] p-[121px] top-40">
        Practice Advice
      </h6>
      <h2 className="relative font-mont text-[41px] p-[119px] text-white bottom-[69px] font-bold tracking-wide">
        Each and every client is important
      </h2>
      <p className="relative font-mont text-white text-sm p-[121px] bottom-[18.8rem]">
        Problems trying to resolve the conflict between <br /> the two major
        realms of Classical physics: Newtonian mechanics{" "}
      </p>

      <div className="relative bg-[#FFFFFF] w-[350px] h-[333px] bottom-[21rem] left-[8rem]">
        <img src={stars} className="relative p-[70px] left-9" />
        <p className="relative font-mont text-[#737373] text-sm font-medium text-center bottom-14">
          Slate helps you see <br /> how many more days <br /> you need to work
          to <br /> reach your financial <br /> goal for the month <br /> and
          year.
        </p>
        <img src={pfp1} className="relative left-24 bottom-6" />
        <h6 className="relative text-[#96BB7C] font-mont text-sm font-bold bottom-[66px] left-[160px]">
          Malik Mbeki
        </h6>
        <h6 className="relative text-[#252B42] font-mont text-xs font-semibold bottom-[66px] left-[160px]">
          Designer
        </h6>
      </div>

      <div className="relative bg-[#FFFFFF] w-[350px] h-[333px] bottom-[41.8rem] left-[31rem]">
        <img src={stars} className="relative p-[70px] left-9" />
        <p className="relative font-mont text-[#737373] text-sm font-medium text-center bottom-14">
          Slate helps you see <br /> how many more days <br /> you need to work
          to <br /> reach your financial <br /> goal for the month <br /> and
          year.
        </p>
        <img src={pfp2} className="relative left-24 bottom-6" />
        <h6 className="relative text-[#96BB7C] font-mont text-sm font-bold bottom-[66px] left-[160px]">
          Regina Miles
        </h6>
        <h6 className="relative text-[#252B42] font-mont text-xs font-semibold bottom-[66px] left-[160px]">
          Designer
        </h6>
      </div>

      <div className="relative bg-[#FFFFFF] w-[350px] h-[333px] bottom-[62.6rem] left-[54rem]">
        <img src={stars} className="relative p-[70px] left-9" />
        <p className="relative font-mont text-[#737373] text-sm font-medium text-center bottom-14">
          Slate helps you see <br /> how many more days <br /> you need to work
          to <br /> reach your financial <br /> goal for the month <br /> and
          year.
        </p>
        <img src={pfp3} className="relative left-24 bottom-6" />
        <h6 className="relative text-[#96BB7C] font-mont text-sm font-bold bottom-[66px] left-[160px]">
          Arjun Mehta
        </h6>
        <h6 className="relative text-[#252B42] font-mont text-xs font-semibold bottom-[66px] left-[160px]">
          Designer
        </h6>
      </div>
    </div>
  );
}
