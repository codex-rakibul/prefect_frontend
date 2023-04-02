import React from "react";
import Abbe from "../../styles/assets/svgexport-1.svg";
import Image from "next/image";

export default function Navbar() {
  return (
    <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
      <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
        <Image className="nav-logo" src={Abbe}/>
        {/* <span className="ml-3 text-white text-xl">PREFECT</span> */}
      </a>
      <span></span>
      <nav className="md:ml-auto flex flex-wrap gap-4 items-center text-base justify-center text-white">
        <a className="mr-5 hover:text-gray-900">PRODUCT</a>
        <a className="mr-5 hover:text-gray-900">COMPANY</a>
        <a className="mr-5 hover:text-gray-900">COMMUNITY</a>
        <a className="mr-5 hover:text-gray-900">RESOURCES</a>
        <a className="mr-5 hover:text-gray-900">PRICING</a>
        <a className="btn mr-5 hover:text-gray-900">GET STARTED</a>
      </nav>
      <button className="text-white inline-flex items-center  border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
        LOG IN
        <svg
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          className="w-4 h-4 ml-1"
          viewBox="0 0 24 24"
        >
          <path d="M5 12h14M12 5l7 7-7 7"></path>
        </svg>
      </button>
    </div>
  );
}
