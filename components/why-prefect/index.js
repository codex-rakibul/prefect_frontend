import React from "react";
import { useState } from "react";
import Modal from "react-modal";
import YouTube, { YouTubeProps } from "react-youtube";

export default function WhyPrefect() {
  return (
    <div> 
      <div className="card m-20 h-screen relative ">
        <div className="gradient-3 object-cover h-full w-full absolute"></div>
        <div className="gradient-4 object-cover h-full w-full absolute"></div>
        <div className="text-white p-10 grid sm:grid-cols-1 lg:grid-cols-2 ">
          <div className="flex justify-center">1</div>
          <div className="flex justify-center">
            <div className="grid grid-rows-3 gap-10">
              <div>1</div>
              <div>2</div>
              <div>3</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
