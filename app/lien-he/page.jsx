import { MailIcon, HomeIcon, PhoneCall, FacebookIcon } from "lucide-react";
export const metadata = {
  title: "Liên hệ",
};
import Form from "@/components/Form";

const Contact = () => {
  return (
    <section>
      <div className="container mx-auto">
        <div className="mb-6 grid pt-12 xl:mb-24 xl:h-[480px] xl:grid-cols-2">
          <div className="flex flex-col justify-center">
            <div className="mb-4 flex items-center gap-x-4 text-lg text-primary">
              <span className="h-[2px] w-[30px] bg-primary"></span>
              Say Hello 👋
            </div>
            <h1 className="h1 mb-8 max-w-md">Let's Work Together.</h1>
            <p className="subtitle max-w-[400px]">
              Nếu bạn có bất kỳ thắc mắc nào cần hỗ trợ, vui lòng liên hệ với
              chúng tôi qua thông tin dưới đây:
            </p>
          </div>

          <div className="hidden w-full bg-contact_illustration_light bg-contain bg-top bg-no-repeat dark:bg-contact_illustration_dark xl:flex"></div>
        </div>

        <div className="mb-24 grid xl:mb-32 xl:grid-cols-2">
          <div className="mb-12 flex flex-col gap-y-4 text-base xl:mb-24 xl:gap-y-14 xl:text-lg">
            <div className="flex items-center gap-x-8">
              <HomeIcon size={18} className="text-primary" />
              <div>14 Thanh Lương 17, Hòa Xuân, Cẩm Lệ Đà Nẵng</div>
            </div>

            <div className="flex items-center gap-x-8">
              <MailIcon size={18} className="text-primary" />
              <div>khoilocphat@gmail.com</div>
            </div>

            <div className="flex items-center gap-x-8">
              <PhoneCall size={18} className="text-primary" />
              <div>0326.3650 3000 – 0932.729874</div>
            </div>

            <div className="flex items-center gap-x-8">
              <FacebookIcon size={18} className="text-primary" />
              <div>Science-Labs</div>
            </div>
          </div>
          <Form />
        </div>
      </div>
    </section>
  );
};

export default Contact;
