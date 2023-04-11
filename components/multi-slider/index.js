import React from "react";
import Figma from "../../public/assets/Figma.svg";
import Apple from "../../public/assets/Apple.svg";
import BD from "../../public/assets/BD.svg";
import Capital from "../../public/assets/Capital One.svg";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import {  Autoplay , Navigation} from "swiper";


const images = [
  {
    id: 1,
    img: Figma,
  },
  {
    id: 2,
    img: BD,
  },
  {
    id: 3,
    img:Capital,
  },
  {
    id: 4,
    img:Apple,
  },
];
export default function MultiSlider1({time}) {
  return <div className="bg-gray-200">
    <Swiper
          slidesPerView={1}
          spaceBetween={30}
          autoplay={{
            delay: time,
            disableOnInteraction: false,
          }}
          
          modules={[Autoplay, Navigation]}
          className="mySwiper"
        >
          
          {images.map((image) => {
            const { id, img} = image;
            return (
              <SwiperSlide key={id}>
                <Image src={img}/>
              </SwiperSlide>
            );
          })}
        </Swiper>
  </div>;
}
