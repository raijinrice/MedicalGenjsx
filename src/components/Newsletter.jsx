import React from "react";

export default function Newsletter() {
  return (
    <div className="bg-[#2D4059] w-[1440px] h-[645px]">
      <h6 className="relative text-[#96BB7C] p-[200px] top-20 text-center text-sm font-bold tracking-wide">
        Newsletter
      </h6>
      <h2 className="relative text-white font-mont text-[41px] font-bold bottom-28 text-center">
        JOIN US
      </h2>
      <p className="relative text-white font-mont text-sm font-normal text-center bottom-[105px]">
        Problems trying to resolve the conflict between <br /> the two major
        realms of Classical physics: Newtonian mechanics{" "}
      </p>
      <input
        type="email"
        name="email"
        placeholder="Your Email"
        className="w-[688px] h-[58px] font-mont text-sm font-normal tracking-wide relative left-[25rem] rounded-md border border-solid border-white p-5 bottom-8"
      />
      <button className="relative w-[118px] h-[57px] px-[14px] py-[17px] rounded-md bg-[#96BB7C] text-white text-center bottom-[1.9rem] left-[17.6rem]">
        Subscribe
      </button>
    </div>
  );
}
