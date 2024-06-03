"use client";

import Image from "next/image";

import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

// import swiper react components
import { Swiper, SwiperSlide } from "swiper/react";

// import swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

const reviewsData = [
  {
    avatar: "/reviews/avatar-1.png",
    name: "Trần Văn Nam",
    job: "Quản lý dịch vụ khách hàng",
    review:
      "Chất lượng sản phẩm vượt xa mong đợi, giá cả hợp lý, đem lại sự hiệu quả và tiết kiệm chi phí.",
  },
  {
    avatar: "/reviews/avatar-2.png",
    name: "Nguyễn Thị Hằng",
    job: "Giám đốc điều hành",
    review:
      "Sản phẩm chất lượng cao và dịch vụ chuyên nghiệp, làm hài lòng mọi nhu cầu công việc của chúng tôi.",
  },
  {
    avatar: "/reviews/avatar-3.png",
    name: "Nguyễn Anh Tuấn",
    job: "Chuyên viên tư vấn công nghệ",
    review:
      "Đội ngũ nhân viên am hiểu và hỗ trợ tận tình, giúp giải quyết mọi vấn đề một cách nhanh chóng và hiệu quả.",
  },
  {
    avatar: "/reviews/avatar-4.png",
    name: "Lê Thị Thu Hà",
    job: "Chuyên viên kỹ thuật",
    review:
      "Công nghệ tiên tiến và giải pháp sáng tạo, giúp doanh nghiệp của chúng tôi phát triển mạnh mẽ.",
  },
  {
    avatar: "/reviews/avatar-5.png",
    name: "Phạm Văn Tuấn",
    job: "Nhân viên bảo trì thiết bị",
    review:
      "Dịch vụ tư vấn tận tình, phản hồi nhanh chóng, mang lại sự tin cậy và hài lòng tuyệt đối.",
  },
  {
    avatar: "/reviews/avatar-6.png",
    name: "Hoàng Minh Đức",
    job: "Trưởng phòng kinh doanh",
    review:
      "Đối tác đáng tin cậy, mối quan hệ lâu dài và thành công, chắc chắn sẽ tiếp tục hợp tác.",
  },
];

const Reviews = () => {
  return (
    <section className="mb-12 w-full max-w-full xl:mb-32">
      <div className="relative w-full">
        <h2 className="section-title mx-auto text-center text-sm">
          Đánh giá của khách
        </h2>
        {/* slider */}
        <Swiper
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            1400: { slidesPerView: 3 },
          }}
          spaceBetween={30}
          modules={[Pagination]}
          pagination={{
            clickable: true,
          }}
          className="h-[350px]"
        >
          {reviewsData.map((person, index) => {
            return (
              <SwiperSlide key={index}>
                <Card className="min-h-[300px] bg-tertiary p-8 dark:bg-secondary/40">
                  <CardHeader className="mb-10 p-0">
                    <div className="flex items-center gap-x-4">
                      {/* image */}
                      <Image
                        src={person.avatar}
                        width={70}
                        height={70}
                        alt=""
                        priority
                      />
                      {/* name */}
                      <div className="flex flex-col">
                        <CardTitle>{person.name}</CardTitle>
                        <p>{person.job}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardDescription className="text-lg text-muted-foreground">
                    {person.review}
                  </CardDescription>
                </Card>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};

export default Reviews;
