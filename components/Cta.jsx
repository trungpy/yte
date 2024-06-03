import { Button } from "./ui/button";
import Link from "next/link";

const Cta = () => {
  return (
    <section className="bg-tertiary py-24 dark:bg-secondary/40">
      <div className="container mx-auto">
        <div className="flex flex-col items-center">
          <h2 className="h2 mb-8 max-w-xl text-center">
            "Sẵn sàng biến ý tưởng của bạn thành hiện thực? Khởi Lộc Phát ở đây
            để giúp đỡ bạn."
          </h2>
          <Link href="/lien-he">
            <Button>Liên hệ ngay!</Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Cta;
