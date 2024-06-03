"use client";
import Link from "next/link";
import { Button } from "./ui/button";

import Image from "next/image";
import { Card, CardHeader } from "./ui/card";
import { Link2Icon } from "lucide-react";
import { Badge } from "./ui/badge";

// import swiper react components
import { Swiper, SwiperSlide } from "swiper/react";

// import swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

import { productData } from "@/lib/placeholder";

import { createUrl } from "@/lib/utils";

const Work = () => {
  const allItems = [];

  productData.forEach((category) => {
    category.subcategories.forEach((subcategory) => {
      subcategory.items.forEach((item) => {
        item.category = category.category;
        item.subcategory = subcategory.name;
        allItems.push(item);
      });
    });
  });

  return (
    <section className="relative mb-12 xl:mb-48">
      <div className="container mx-auto">
        {/* text */}
        <div className="mx-auto mb-12 flex max-w-[400px] flex-col items-center justify-center text-center xl:mx-0 xl:h-[400px] xl:items-start xl:text-left">
          <h2 className="section-title mb-4">Sản phẩm mới</h2>
          <p className="subtitle mb-8">Khởi Lộc Phát - Đối Tác Tin Tậy</p>
          <Link href="/san-pham">
            <Button>Tất Cả</Button>
          </Link>
        </div>
        {/* slider */}
        <div className="right-0 top-0 xl:absolute xl:max-w-[1000px]">
          <Swiper
            className="h-[400px]"
            slidesPerView={1}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
            }}
            spaceBetween={30}
            modules={[Pagination]}
            pagination={{ clickable: true }}
          >
            {allItems.slice(0, 7).map((project, index) => {
              return (
                <SwiperSlide key={index}>
                  <Card className="group relative h-[90%] overflow-hidden">
                    <CardHeader className="relative h-[200px] p-0">
                      <div className="relative flex h-full w-full items-center justify-center overflow-hidden bg-tertiary dark:bg-secondary/40 xl:bg-work_project_bg_light xl:bg-[100%] xl:bg-no-repeat xl:dark:bg-work_project_bg_dark">
                        <Image
                          className="absolute bottom-0 shadow-2xl"
                          src={project.image}
                          width={247}
                          height={250}
                          alt=""
                          priority
                        />
                        <div className="flex gap-x-4">
                          <Link
                            href={createUrl(
                              project.category,
                              project.subcategory,
                              project.id,
                            )}
                            className="flex h-[54px] w-[54px] scale-0 items-center justify-center rounded-full bg-secondary opacity-0 transition-all duration-200 group-hover:scale-100 group-hover:opacity-100"
                          >
                            <Link2Icon className="text-white" />
                          </Link>
                        </div>
                      </div>
                    </CardHeader>
                    <div className="h-full px-8">
                      <Badge className="absolute left-5 top-4 mb-2 text-sm font-medium uppercase">
                        {project.category}
                      </Badge>
                      <Link
                        href={createUrl(
                          project.category,
                          project.subcategory,
                          project.id,
                        )}
                      >
                        <h4 className="h4 mb-1">{project.name}</h4>
                      </Link>
                      <p className="text-lg text-muted-foreground">
                        {project.description}
                      </p>
                    </div>
                  </Card>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Work;
