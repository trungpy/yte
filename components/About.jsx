import DevImg from "./DevImg";
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import {
  User2,
  MailIcon,
  HomeIcon,
  PhoneCall,
  GraduationCap,
  Calendar,
  Briefcase,
} from "lucide-react";

const infoData = [
  {
    icon: <User2 size={20} />,
    text: "MTV KHỞI LỘC PHÁT",
  },
  {
    icon: <PhoneCall size={20} />,
    text: "0326.3650 3000 – 0932.729874",
  },
  {
    icon: <MailIcon size={20} />,
    text: "khoilocphat@gmail.com",
  },
  {
    icon: <Calendar size={20} />,
    text: "Năm thành lập : 2013",
  },
  {
    icon: <GraduationCap size={20} />,
    text: "Đối tác tin cậy cho phòng thí nghiệm chất lượng",
  },
  {
    icon: <HomeIcon size={20} />,
    text: "4 Thanh Lương 17, Hòa Xuân, Cẩm Lệ Đà Nẵng",
  },
];

const qualificationData = [
  {
    title: "education",
    data: [
      {
        university: "Đại học Khoa học Tự nhiên",
        qualification: "Cử nhân Hóa học",
        years: "2010 - 2014",
      },
      {
        university: "Trường Đại học Bách Khoa",
        qualification: "Thạc sĩ Công nghệ Sinh học",
        years: "2015 - 2017",
      },
      {
        university: "Trường Đại học Quốc tế",
        qualification: "Tiến sĩ Môi trường",
        years: "2018 - 2022",
      },
    ],
  },
  {
    title: "experience",
    data: [
      {
        company: "Công ty TNHH Môi Trường Xanh",
        role: "Chuyên viên phân tích",
        years: "2014 - 2016",
      },
      {
        company: "Công ty Cổ phần Dược phẩm Việt",
        role: "Quản lý phòng thí nghiệm",
        years: "2016 - 2019",
      },
      {
        company: "Công ty TNHH MTV Khởi Lộc Phát",
        role: "Trưởng phòng Kỹ thuật",
        years: "2019 - Hiện tại",
      },
    ],
  },
];

const skillData = [
  {
    title: "skills",
    data: [
      {
        name: "Thực phẩm và thức ăn chăn nuôi",
      },
      {
        name: "Nông nghiệp và thủy sản",
      },
      {
        name: "Rượu, bia và nước giải khát",
      },
      {
        name: "Quan trắc và phân tích môi trường",
      },
      {
        name: "Công nghệ sinh học",
      },
      {
        name: "Đo lường và kiểm nghiệm",
      },
      {
        name: "Mỹ phẩm và dược phẩm",
      },
    ],
  },
  {
    title: "tools",
    data: [
      {
        imgPath: "/about/1 (1).png",
      },
      {
        imgPath: "/about/1 (2).jpg",
      },
      {
        imgPath: "/about/1 (4).jpg",
      },
      {
        imgPath: "/about/1 (3).png",
      },
    ],
  },
];

const About = () => {
  const getData = (arr, title) => {
    return arr.find((item) => item.title === title);
  };

  return (
    <section className="pt-20 sm:py-20 xl:h-[860px] xl:py-24">
      <div className="container mx-auto">
        <h2 className="section-title mx-auto mb-8 text-center xl:mb-16">
          Giới Thiệu Chung
        </h2>
        <div className="flex flex-col xl:flex-row">
          {/* image */}
          <div className="relative hidden flex-1 xl:flex">
            <DevImg
              containerStyles="bg-about_shape_light dark:bg-about_shape_dark w-[505px] h-[505px] bg-no-repeat relative"
              imgSrc="/about/developer.png"
            />
          </div>
          {/* tabs */}
          <div className="flex-1">
            <Tabs defaultValue="personal">
              <TabsList className="grid w-full dark:border-none xl:max-w-[520px] xl:grid-cols-3 xl:border">
                <TabsTrigger className="w-[162px] xl:w-auto" value="personal">
                  Thông Tin
                </TabsTrigger>
                <TabsTrigger
                  className="w-[162px] xl:w-auto"
                  value="qualifications"
                >
                  Chuyên Môn
                </TabsTrigger>
                <TabsTrigger className="w-[162px] xl:w-auto" value="skills">
                  Lĩnh Vực
                </TabsTrigger>
              </TabsList>
              {/* tabs content */}
              <div className="mt-12 text-lg xl:mt-8">
                {/* personal */}
                <TabsContent value="personal">
                  <div className="text-center xl:text-left">
                    <h3 className="h3 mb-4">
                      Chất lượng dịch vụ trong hơn 10 năm
                    </h3>
                    <p className="subtitle mx-auto max-w-xl xl:mx-0">
                      Chúng tôi chuyên cung cấp các thiết bị khoa học kỹ thuật
                      tiên tiến, mang đến trải nghiệm người dùng động và hấp dẫn
                      cho các phòng thí nghiệm.
                    </p>
                    {/* icons */}
                    <div className="mb-12 grid gap-4 xl:grid-cols-2">
                      {infoData.map((item, index) => {
                        return (
                          <div
                            className="flex items-center gap-x-4 text-start xl:mx-0"
                            key={index}
                          >
                            <div className="text-primary">{item.icon}</div>
                            <div>{item.text}</div>
                          </div>
                        );
                      })}
                    </div>
                    {/* languages */}
                    <div className="flex flex-col gap-y-2">
                      <div className="text-primary">Language Skill</div>
                      <div className="border-b border-border"></div>
                      <div>English, French, VietNam, Italian</div>
                    </div>
                  </div>
                </TabsContent>
                {/* qualifications */}
                <TabsContent value="qualifications">
                  <div>
                    <h3 className="h4 mb-8 text-center xl:text-left">
                      Hành Trình Tuyệt Vời Của Chúng Tôi
                    </h3>
                    {/* experience & education wrapper */}
                    <div className="grid gap-y-8 md:grid-cols-2">
                      {/* experience */}
                      <div className="flex flex-col gap-y-6">
                        <div className="flex items-center gap-x-4 text-[22px] text-primary">
                          <Briefcase />
                          <h4 className="font-medium capitalize">
                            {getData(qualificationData, "experience").title}
                          </h4>
                        </div>
                        {/* list */}
                        <div className="flex flex-col gap-y-8">
                          {getData(qualificationData, "experience").data.map(
                            (item, index) => {
                              const { company, role, years } = item;
                              return (
                                <div className="group flex gap-x-8" key={index}>
                                  <div className="relative ml-2 h-[84px] w-[1px] bg-border">
                                    <div className="absolute -left-[5px] h-[11px] w-[11px] rounded-full bg-primary transition-all duration-500 group-hover:translate-y-[84px]"></div>
                                  </div>
                                  <div>
                                    <div className="mb-2 text-xl font-semibold leading-none">
                                      {company}
                                    </div>
                                    <div className="mb-4 text-lg leading-none text-muted-foreground">
                                      {role}
                                    </div>
                                    <div className="text-base font-medium">
                                      {years}
                                    </div>
                                  </div>
                                </div>
                              );
                            },
                          )}
                        </div>
                      </div>
                      {/* education */}
                      <div className="flex flex-col gap-y-6">
                        <div className="flex items-center gap-x-4 text-[22px] text-primary">
                          <GraduationCap size={28} />
                          <h4 className="font-medium capitalize">
                            {getData(qualificationData, "education").title}
                          </h4>
                        </div>
                        {/* list */}
                        <div className="flex flex-col gap-y-8">
                          {getData(qualificationData, "education").data.map(
                            (item, index) => {
                              const { university, qualification, years } = item;
                              return (
                                <div className="group flex gap-x-8" key={index}>
                                  <div className="relative ml-2 h-[84px] w-[1px] bg-border">
                                    <div className="absolute -left-[5px] h-[11px] w-[11px] rounded-full bg-primary transition-all duration-500 group-hover:translate-y-[84px]"></div>
                                  </div>
                                  <div>
                                    <div className="mb-2 text-xl font-semibold leading-none">
                                      {university}
                                    </div>
                                    <div className="mb-4 text-lg leading-none text-muted-foreground">
                                      {qualification}
                                    </div>
                                    <div className="text-base font-medium">
                                      {years}
                                    </div>
                                  </div>
                                </div>
                              );
                            },
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>
                {/* skills */}
                <TabsContent value="skills">
                  <div className="text-center xl:text-left">
                    <h3 className="h3 mb-8">
                      Những Thiết Bị Khởi Lộc Phát Cung Cấp
                    </h3>
                    {/* skills */}
                    <div className="mb-16">
                      <h4 className="mb-2 text-2xl font-semibold">
                        Lĩnh vực hoạt động
                      </h4>
                      <div className="mb-4 border-b border-border"></div>
                      {/* skill list */}
                      <div>
                        {getData(skillData, "skills").data.map(
                          (item, index) => {
                            const { name } = item;
                            return (
                              <ul
                                className="mx-auto w-full list-disc pl-4 text-start font-medium md:w-2/4 xl:mx-0 xl:text-left"
                                key={index}
                              >
                                <li className="text-md font-normal">{name}</li>
                              </ul>
                            );
                          },
                        )}
                      </div>
                    </div>
                    {/* tools */}
                    <div>
                      <h4 className="mb-2 text-xl font-semibold xl:text-left">
                        Đối Tác
                      </h4>
                      <div className="mb-4 border-b border-border"></div>
                      {/* tool list */}
                      <div className="flex justify-center gap-x-8 xl:justify-start">
                        {getData(skillData, "tools").data.map((item, index) => {
                          const { imgPath } = item;
                          return (
                            <div key={index}>
                              <Image
                                src={imgPath}
                                width={48}
                                height={48}
                                alt=""
                                priority
                              />
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </div>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
