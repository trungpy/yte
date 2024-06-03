import Link from "next/link";
import Image from "next/image";

const Logo = () => {
  return (
    <Link href="/" className="relative flex-shrink-0">
      <Image
        src="/logo.svg"
        width={200}
        height={200}
        priority
        alt=""
        className="flex flex-shrink-0"
      />
    </Link>
  );
};

export default Logo;
