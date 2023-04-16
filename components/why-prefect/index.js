import React from "react";
import { useState } from "react";
import Modal from "react-modal";
import YouTube, { YouTubeProps } from "react-youtube";

export default function WhyPrefect() {
  return (
    <div className="m-10  ">
      <div className="card  relative video ">
        <div className="gradient-3 object-cover h-full w-full absolute"></div>
        <div className="gradient-4 object-cover h-full w-full absolute"></div>
        <div className="text-white p-10 grid sm:grid-cols-1 lg:grid-cols-2 ">
          <div className="flex justify-center">

          </div>
          <div className="flex justify-center">
            <div className="grid grid-rows-3 gap-4">
              <div className="flex items-center">
                <div> Cloud convenience</div>
                <div> with on-prem security</div>
              </div>
              <div>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Corporis earum ab perferendis eligendi maxime in, debitis sunt,
                consequatur quis quisquam obcaecati, incidunt ut iste. Itaque
                perspiciatis nobis nam reprehenderit nisi.
              </div>
              <div className="flex items-center">
                <button className="btn inline-flex  bg-white border-0 py-2 px-6 focus:outline-none  rounded text-lg mr-10">
                  START FREE
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="grid lg:grid-cols-2 sm:grid-cols-1 xl:grid-cols-4">
        <div>

        </div>
        <div>

        </div>
      </div>
    </div>
  );
}
