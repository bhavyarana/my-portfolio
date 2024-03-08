import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-cards";
import c1 from "../assets/c1.jpg";
import c2 from "../assets/c2.jpeg";
import c3 from "../assets/c3.jpeg";
import c4 from "../assets/c4.jpeg";
import c5 from "../assets/c5.jpeg";
const Slider = () => {
  return (
    <>
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className="lg:w-[800px] w-[45%] h-auto "
      >
        <SwiperSlide className="rounded-2xl bg-blue-600">
          <a
            href="https://coursera.org/verify/NL6RNP29BHLU"
            target="_blank"
            className="cursor-grab"
          >
            <img src={c2} alt="" />
          </a>
        </SwiperSlide>
        <SwiperSlide className="rounded-2xl bg-green-400">
          <a
            href="https://coursera.org/verify/7DB2JKHS8BAK"
            target="_blank"
            className="cursor-grab"
          >
            <img src={c3} alt="" />
          </a>
        </SwiperSlide>
        <SwiperSlide className="rounded-2xl bg-orange-400">
          <a
            href="https://coursera.org/verify/ND5882A8WVFZ"
            target="_blank"
            className="cursor-grab"
          >
            <img src={c4} alt="" />
          </a>
        </SwiperSlide>
        <SwiperSlide className="rounded-2xl bg-green-600">
          <a
            href="https://coursera.org/verify/QRDPBDGA6KG6"
            target="_blank"
            className="cursor-grab"
          >
            <img src={c5} alt="" />
          </a>
        </SwiperSlide>
        <SwiperSlide className="rounded-2xl  w-auto flex justify-center items-center">
          <a
            href="https://drive.google.com/file/d/1tQSgSrRmOyc_bdjqxfUCEnGLWyIZcups/view?
            usp=sharing
            "
            target="_blank"
            className="cursor-grab"
          >
            <img
              src={c1}
              className="lg:h-[600px] lg:w-[500px] h-[300px] w-[250px]"
              alt=""
            />
          </a>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Slider;
