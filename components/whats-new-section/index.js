import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Navigation, Mousewheel, Keyboard } from "swiper";

const alldata = [
  {
    id: 1,
    title: " Lorem ipsum dolor sit amet consectetur",
    decs: "adipisicing elit. Fuga, impedit totam beatae nobis magnam optio asperiores magni. Cum officia omnis est commodi culpa. Voluptatem labore a, atque debitis amet possimus?,",
  },
  {
    id: 2,
    title: " Lorem ipsum dolor sit amet consectetur",
    decs: "adipisicing elit. Fuga, impedit totam beatae nobis magnam optio asperiores magni. Cum officia omnis est commodi culpa. Voluptatem labore a, atque debitis amet possimus?,",
  },
  {
    id: 3,
    title: " Lorem ipsum dolor sit amet consectetur",
    decs: "adipisicing elit. Fuga, impedit totam beatae nobis magnam optio asperiores magni. Cum officia omnis est commodi culpa. Voluptatem labore a, atque debitis amet possimus?,",
  },
  {
    id: 4,
    title: " Lorem ipsum dolor sit amet consectetur",
    decs: "adipisicing elit. Fuga, impedit totam beatae nobis magnam optio asperiores magni. Cum officia omnis est commodi culpa. Voluptatem labore a, atque debitis amet possimus?,",
  },
];

export default function WhatsNew() {
  return (
    <div className="-mt-20 ml-24 mr-24 mb-24 h-full">
      <Swiper
        cssMode={true}
        navigation={true}
        mousewheel={true}
        slidesPerView={2}
        spaceBetween={50}
        autoplay={{
          delay: 2000,
          
        }}
        modules={[Autoplay, Navigation, Mousewheel, Keyboard]}
        className="mySwiper"
      >
        {alldata.map((data) => {
          const { id, title, decs } = data;
          return (
            <SwiperSlide key={id}>
              <div className="grid gap-6 bg-white p-6">
                <div>{title}</div>
                <div>{decs}</div>
                <div>skjajk</div>
                <div>READ THE STORY</div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
