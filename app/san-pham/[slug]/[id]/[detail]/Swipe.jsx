"use client";
import React from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { CardContent } from "@/components/ui/card";
export default function Swipe(data) {
  return (
    <>
      <Swiper
        loop={true}
        className="h-full w-full"
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={0}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {data?.data?.images.map((data, index) => (
          <SwiperSlide key={index}>
            <CardContent className="relative min-h-96">
              <Image
                src={data}
                alt=""
                fill={true}
                className="rounded-md object-cover"
              />
            </CardContent>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
