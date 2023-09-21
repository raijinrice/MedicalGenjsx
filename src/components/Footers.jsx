import React from "react";
import phone from "../assets/phone.png";
import enve from "../assets/envelope.png";
import loc from "../assets/location.png";

export default function Footers() {
  return (
    <div className="bg-white w-[1420px] h-[270px]">
      <div>
        <h4 className="relative text-[#252B42] font-mont text-base font-bold p-14 left-40 tracking-wide">
          Company Info
        </h4>
        <a
          href="/aboutus"
          className="relative text-[#737373] font-mont text-sm font-bold bottom-9 left-[216px] tracking-wide"
        >
          About us
        </a>
        <a
          href="/carrier"
          className="relative text-[#737373] font-mont text-sm font-bold left-[148px] tracking-wide"
        >
          Carrier
        </a>
        <a
          href="/hiring"
          className="relative text-[#737373] font-mont text-sm font-bold top-8 left-[96.8px] tracking-wide"
        >
          We are hiring
        </a>
        <a
          href="/blog"
          className="relative text-[#737373] font-mont text-sm font-bold top-16 right-2 tracking-wide"
        >
          Blog
        </a>
      </div>
      <div>
        <h4 className="relative text-[#252B42] font-mont text-base font-bold p-14 left-[20.8rem] bottom-[10rem] tracking-wide">
          Legal
        </h4>
        <a
          href="/aboutus"
          className="relative text-[#737373] font-mont text-sm font-bold bottom-[12.4rem] left-[388px] tracking-wide"
        >
          About us
        </a>
        <a
          href="/carrier"
          className="relative text-[#737373] font-mont text-sm font-bold bottom-[10.1rem] left-[318px] tracking-wide"
        >
          Carrier
        </a>
        <a
          href="/hiring"
          className="relative text-[#737373] font-mont text-sm font-bold bottom-[8rem] left-[263px] tracking-wide"
        >
          We are hiring
        </a>
        <a
          href="/blog"
          className="relative text-[#737373] font-mont text-sm font-bold bottom-[6rem] left-[159px] tracking-wide"
        >
          Blog
        </a>
      </div>
      <div>
        <h4 className="relative text-[#252B42] font-mont text-base font-bold p-14 left-[32.3rem] bottom-[20.2rem] tracking-wide">
          Features
        </h4>
        <a
          href="/aboutus"
          className="relative text-[#737373] font-mont text-sm font-bold bottom-[22.5rem] left-[572px] tracking-wide"
        >
          Business Marketing
        </a>
        <a
          href="/carrier"
          className="relative text-[#737373] font-mont text-sm font-bold bottom-[20.2rem] left-[420px] tracking-wide"
        >
          User Analytic
        </a>
        <a
          href="/hiring"
          className="relative text-[#737373] font-mont text-sm font-bold bottom-[17.9rem] left-[319px] tracking-wide"
        >
          Live Chat
        </a>
        <a
          href="/blog"
          className="relative text-[#737373] font-mont text-sm font-bold bottom-[15.9rem] left-[246px] tracking-wide"
        >
          Unlimited Support
        </a>
      </div>
      <div>
        <h4 className="relative text-[#252B42] font-mont text-base font-bold p-14 left-[47.2rem] bottom-[30.2rem] tracking-wide">
          Resources
        </h4>
        <a
          href="/aboutus"
          className="relative text-[#737373] font-mont text-sm font-bold bottom-[32.5rem] left-[811px] tracking-wide"
        >
          IOS & Android
        </a>
        <a
          href="/carrier"
          className="relative text-[#737373] font-mont text-sm font-bold bottom-[30rem] left-[703px] tracking-wide"
        >
          Watch a Demo
        </a>
        <a
          href="/hiring"
          className="relative text-[#737373] font-mont text-sm font-bold bottom-[27.9rem] left-[589px] tracking-wide"
        >
          Customers
        </a>
        <a
          href="/blog"
          className="relative text-[#737373] font-mont text-sm font-bold bottom-[25.9rem] left-[507px] tracking-wide"
        >
          API
        </a>
      </div>
      <div>
        <h4 className="relative text-[#252B42] font-mont text-base font-bold p-14 left-[59.7rem] bottom-[40.2rem] tracking-wide">
          Get In Touch
        </h4>

        <img
          src={phone}
          className="relative p-28 bottom-[49.4rem] left-[56rem]"
        />
        <h4 className="relative bottom-[57.8rem] font-mont text-sm font-bold text-[#737373] left-[65rem]">
          (480) 555-0103
        </h4>

        <img src={loc} className="relative p-28 bottom-[63rem] left-[56rem]" />
        <h4 className="relative bottom-[72.2rem] left-[65rem] font-mont text-sm font-bold text-[#737373]">
          4517 Washington Ave. Manchester, <br /> Kentucky 39495
        </h4>

        <img
          src={enve}
          className="relative p-28 bottom-[78.4rem] left-[56.1rem]"
        />
        <h4 className="relative bottom-[86.7rem] left-[65rem] font-mont text-sm font-bold text-[#737373]">
          debra.holt@example.com
        </h4>
        <h3 className="relative bottom-[80rem] font-mont text-sm font-bold tracking-wide text-[#737373] left-[213px]">
          Made With Love By Ahan All Right Reserved{" "}
        </h3>
      </div>
    </div>
  );
}
