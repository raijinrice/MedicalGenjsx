import React from "react";

export default function NavHero() {
  return (
    <div className="bg-hero w-[1390px] h-[693px] bg-cover">
      <div className="">
        <h1 className="relative p-8 text-white font-mont font-bold text-2xl left-[11rem]">
          MedicalGenuin
        </h1>
        <a
          href="#"
          className="relative p-14 text-white font-mont text-sm font-semibold bottom-[4.7rem] left-[24rem]"
        >
          Home
        </a>
        <a
          href="#"
          className="relative p-14 text-white font-mont text-sm font-semibold bottom-[4.7rem] left-[18.7rem]"
        >
          Product
        </a>
        <a
          href="#"
          className="relative p-14 text-white font-mont text-sm font-semibold bottom-[4.7rem] left-[13.3rem]"
        >
          Pricing
        </a>
        <a
          href="#"
          className="relative p-14 text-white font-mont text-sm font-semibold bottom-[4.7rem] left-[7.8rem]"
        >
          Contact
        </a>
        <a
          href="#"
          className="relative p-14 text-white font-mont text-sm font-semibold bottom-[4.7rem] left-[11rem]"
        >
          Login
        </a>

        <button className="relative bg-[#96BB7C] rounded-md w-[135px] h-[50px] font-mont text-sm font-semibold text-white left-[10rem] bottom-[4.7rem]">
          JOIN US
        </button>

        <h5 className="relative text-[#96BB7C] font-mont text-base font-semibold p-20 text-center">
          Join Us
        </h5>

        <h1 className="relative text-white font-mont text-6xl font-bold leading-normal text-center bottom-10">
          Meet the Best <br /> Hospital
        </h1>

        <p className="relative text-white font-mont text-xl font-normal leading-snug text-center bottom-4">
          We are always fully focused on helping <br />
          your child and you{" "}
        </p>

        <button className="relative bg-[#96BB7C] rounded-md w-[135px] h-[50px] font-mont text-sm font-semibold text-white left-[39rem] top-6">
          JOIN US
        </button>
      </div>
    </div>
  );
}
