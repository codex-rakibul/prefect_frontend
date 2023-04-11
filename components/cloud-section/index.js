import React, { useRef, useState } from "react";
import Svgexport from "../../public/assets/Deploy and scale on Cloud.svg";
import Image from "next/image";
import cloud from "../../public/assets/cloud.png";

import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import style from "../../styles/cloud.module.css";
export default function CloudSection() {
  return (
    <div className="relative">
      <section className=" body-font ">
        <div className="relative container mx-auto flex px-5 pt-24 items-center justify-center flex-col">
          <div className="text-center lg:w-2/3 w-full opacity-200">
            <Image className="m-auto pb-4" src={Svgexport} alt="" />
            <p style={{ fontSize: "12px", color: "#0e50f5" }}>
              OPEN-SOURCE WORKFLOW MANAGEMENT
            </p>
            <h1
              className=" title-font sm:text-4xl text-3xl mb-1 mt-16 font-medium  lg:mx-auto opacity-100"
              style={{ fontSize: "64px" }}
            >
              Create powerful <br />
              <br /> data pipelines
            </h1>
            <p className=" leading-relaxed p-10">
              Let Prefect take care of scheduling, infrastructure, error
              handling, retries, logs, triggers, data serialization,
              parameterization, dynamic mapping, caching, concurrency, and more.
            </p>
            <div className="flex justify-center">
              <button className="btn inline-flex  bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg mr-10">
                START FREE
              </button>
              <button className=" inline-flex items-center  border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
                CONTACT SALES
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
            <div>
            <div className="mt-20 z-20">
            <Image  src={cloud} />
            </div>
            <div className="cloud-bottom h-96  z-10"
          style={{ marginTop: "-280px", marginRight: "280px", marginLeft:"-200px" }}
        ></div>
            </div>
          </div>
        </div>
        
      </section>
    </div>
  );
}
