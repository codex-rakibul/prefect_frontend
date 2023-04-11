import React from "react";
import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay, Navigation } from "swiper";
import MultiSlider1 from "../multi-slider";

const cards = [
  {
    id: 1,
    title: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
    tempore eveniet iure magni quis deleniti at voluptate
    tempora, voluptatibus cupiditate, ex pariatur dicta
    obcaecati? Soluta voluptatum aperiam nostrum velit possimus.`,
    position: "Web developer",
  },
  {
    id: 2,
    title: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
    tempore eveniet iure magni quis deleniti at voluptate
    tempora, voluptatibus cupiditate, ex pariatur dicta
    obcaecati? Soluta voluptatum aperiam nostrum velit possimus.`,
    position: "Web developer",
  },
  {
    id: 3,
    title: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
    tempore eveniet iure magni quis deleniti at voluptate
    tempora, voluptatibus cupiditate, ex pariatur dicta
    obcaecati? Soluta voluptatum aperiam nostrum velit possimus.`,
    position: "Web developer",
  },
  {
    id: 4,
    title: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
    tempore eveniet iure magni quis deleniti at voluptate
    tempora, voluptatibus cupiditate, ex pariatur dicta
    obcaecati? Soluta voluptatum aperiam nostrum velit possimus.`,
    position: "Web developer",
  },
  {
    id: 5,
    title: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
    tempore eveniet iure magni quis deleniti at voluptate
    tempora, voluptatibus cupiditate, ex pariatur dicta
    obcaecati? Soluta voluptatum aperiam nostrum velit possimus.`,
    position: "Web developer",
  },
];

export default function ClientSection() {
  return (
    <div className="bg-gray-200 -m-1">
      <div className=" grid sm:grid-cols-1 md:grid-cols-2 pt-24  ml-10 mr-10 gap-6 h-screen">
        <div className=" grid grid-cols-3 grid-rows-3 gap-4 h-2/3">
          <div>
            <MultiSlider1 time={20000} />
          </div>
          <div>
            <MultiSlider1 time={8000} />
          </div>
          <div>
            <MultiSlider1 time={7000} />
          </div>
          <div>
            <MultiSlider1 time={10000} />
          </div>
          <div>
            <MultiSlider1 time={9000} />
          </div>
          <div>
            <MultiSlider1 time={11000} />
          </div>
          <div>
            <MultiSlider1 time={6000} />
          </div>
          <div>
            <MultiSlider1 time={4000} />
          </div>
          <div>
            <MultiSlider1 time={1000} />
          </div>
        </div>
        <div className="">
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
          >
            {cards.map((card) => {
              const { id, title, position } = card;
              return (
                <SwiperSlide key={id}>
                  <div className="card">
                    <div className="card-content">
                      <div className="mt-10">
                        <h1>Title {id}</h1>
                      </div>
                      <div>
                        <p>{title}</p>
                      </div>
                      <div>
                        <p>{position}</p>
                      </div>
                      <div>
                        <button className="btn inline-flex  bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg mr-10">
                          WHAT CUSTOMERS ARE SAYING
                        </button>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </div>
  );
}
