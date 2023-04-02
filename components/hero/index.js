import React from "react";
import Navbar from "../navbar";

export default function HeroSection() {
  return (
    <div className="relative ">
      <div className="gradient-1 absolute object-cover w-full h-full"></div>
      <div className="gradient-2 absolute object-cover w-full h-full"></div>
      <Navbar/>
      <section className="text-white body-font">
        <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
          <div className="text-center lg:w-2/3 w-full">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              Coordinate
            </h1>
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              your dataflow
            </h1>

            <p className="mb-8 leading-relaxed">
              Orchestrate anything, observe erverything.
            </p>
            <div className="flex justify-center">
              <button className="btn2 inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                START FREE
              </button>
              <button className="btn ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
                DEPLOY OPEN SOURCE
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
