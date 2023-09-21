import React from "react";
import surgeon from "../assets/surgeoncover.png";
import product from "../assets/productactions.png";
import rate from "../assets/rating.png";
import down from "../assets/downloadsign.png";
import neu from "../assets/neuronactivation.png";
import support from "../assets/support.png";

export default function Departments() {
  return (
    <div className="bg-[#2D4059] w-[1440px] h-[1158px]">
      <h6 className="relative text-[#96BB7C] font-mont text-sm font-bold left-[7rem] top-[15.5rem]">
        Practice Advice
      </h6>
      <h1 className="relative text-white font-mont text-[40px] font-bold tracking-wide top-[16rem] left-[6.7rem]">
        Our Department
      </h1>
      <p className="relative text-white font-mont text-sm font-normal tracking-wide top-[16.6rem] left-[6.7rem]">
        Problems trying to resolve the conflict between <br /> the two major
        realms of Classical physics: Newtonian mechanics
      </p>

      <div className="relative bg-[#FFF] w-[338px] h-[345px] top-[40rem] left-[6.7rem]">
        <img src={surgeon} className="relative bottom-[18.6rem]" />
        <img src={product} className="relative bottom-[22.5rem] left-24" />
        <button className="relative bg-[#E74040] w-[50px] h-[27px] font-mont text-sm text-white font-bold bottom-[38.8rem] rounded-sm left-3">
          Sale
        </button>
        <h6 className="relative font-mont font-bold text-sm text-[#96BB7C] tracking-wide bottom-[22rem] p-5">
          Cancer care
        </h6>
        <img src={rate} className="relative bottom-[24.7rem] left-[16.2rem]" />
        <h5 className="relative bottom-[23rem] text-[#252B42] font-mont font-bold text-base left-4">
          Best Dental Surgeons
        </h5>
        <p className="relative bottom-[22.4rem] text-[#737373] font-mont font-normal text-sm left-4">
          We focus on ergonomics and meeting <br /> you where you work. It's
          only a <br />
          keystroke away.
        </p>
        <img src={down} className="relative bottom-[21.6rem] left-4" />
        <h6 className="relative text-[#737373] font-mont font-bold text-sm bottom-[22.7rem] left-12">
          15 Sales
        </h6>
        <h6 className="relative text-[#BDBDBD] font-mont font-bold text-base bottom-[21.4rem] left-4">
          $16.48
        </h6>
        <h6 className="relative text-[#FFAB71] font-mont font-bold text-base bottom-[22.9rem] left-[4.8rem]">
          $6.48
        </h6>
        <button className="relative border-[#96BB7C] rounded-3xl border w-[142px] h-[45px] bottom-[22rem] left-3 font-mont text-[#96BB7C] text-sm font-bold">
          Learn More
        </button>
      </div>

      <div className="relative bg-[#FFF] w-[349px] h-[344px] top-[18.5rem] left-[28.8rem]">
        <img src={neu} className="relative bottom-[18.7rem]" />
        <img src={product} className="relative bottom-[22.5rem] left-24" />
        <button className="relative bg-[#E74040] w-[50px] h-[27px] font-mont text-sm text-white font-bold bottom-[38rem] rounded-sm left-3">
          Sale
        </button>
        <h6 className="relative font-mont font-bold text-sm text-[#96BB7C] tracking-wide bottom-[22.4rem] p-5">
          Emergency Case
        </h6>
        <img src={rate} className="relative bottom-[25.2rem] left-[16.2rem]" />
        <h5 className="relative bottom-[23.3rem] text-[#252B42] font-mont font-bold text-base left-4">
          Online Appoinment
        </h5>
        <p className="relative bottom-[22.7rem] text-[#737373] font-mont font-normal text-sm left-4">
          We focus on ergonomics and meeting <br /> you where you work. It's
          only a <br />
          keystroke away.
        </p>
        <img src={down} className="relative bottom-[21.6rem] left-4" />
        <h6 className="relative text-[#737373] font-mont font-bold text-sm bottom-[22.7rem] left-12">
          15 Sales
        </h6>
        <h6 className="relative text-[#BDBDBD] font-mont font-bold text-base bottom-[21.4rem] left-4">
          $16.48
        </h6>
        <h6 className="relative text-[#FFAB71] font-mont font-bold text-base bottom-[22.9rem] left-[4.8rem]">
          $6.48
        </h6>
        <button className="relative border-[#96BB7C] rounded-3xl border w-[142px] h-[45px] bottom-[22rem] left-3 font-mont text-[#96BB7C] text-sm font-bold">
          Learn More
        </button>
      </div>

      <div className="relative bg-[#FFF] w-[338px] h-[344px] bottom-[3rem] left-[52rem]">
        <img src={support} className="relative bottom-[18.6rem]" />
        <img src={product} className="relative bottom-[22.5rem] left-24" />
        <button className="relative bg-[#E74040] w-[50px] h-[27px] font-mont text-sm text-white font-bold bottom-[38.8rem] rounded-sm left-3">
          Sale
        </button>
        <h6 className="relative font-mont font-bold text-sm text-[#96BB7C] tracking-wide bottom-[22rem] p-5">
          Painless procedures
        </h6>
        <img src={rate} className="relative bottom-[24.9rem] left-[16.2rem]" />
        <h5 className="relative bottom-[23rem] text-[#252B42] font-mont font-bold text-base left-4">
          Emergency Case
        </h5>
        <p className="relative bottom-[22.5rem] text-[#737373] font-mont font-normal text-sm left-4">
          We focus on ergonomics and meeting <br /> you where you work. It's
          only a <br />
          keystroke away.
        </p>
        <img src={down} className="relative bottom-[21.6rem] left-4" />
        <h6 className="relative text-[#737373] font-mont font-bold text-sm bottom-[22.7rem] left-12">
          15 Sales
        </h6>
        <h6 className="relative text-[#BDBDBD] font-mont font-bold text-base bottom-[21.4rem] left-4">
          $16.48
        </h6>
        <h6 className="relative text-[#FFAB71] font-mont font-bold text-base bottom-[22.9rem] left-[4.8rem]">
          $6.48
        </h6>
        <button className="relative border-[#96BB7C] rounded-3xl border w-[142px] h-[45px] bottom-[22rem] left-3 font-mont text-[#96BB7C] text-sm font-bold">
          Learn More
        </button>
      </div>
    </div>
  );
}
