// link (next js)
"use client";
import Link from "next/link";

// next hooks
import { usePathname } from "next/navigation";

// framer motion
import { motion } from "framer-motion";

const links = [
  { path: "/", name: "Trang Chủ" },
  { path: "/san-pham", name: "Sản Phẩm" },
  { path: "/lien-he", name: "Liên Hệ" },
];

const Nav = ({ containerStyles, linkStyles, underlineStyles, setActive }) => {
  const path = usePathname();

  return (
    <nav className={`${containerStyles}`}>
      {links.map((link, index) => {
        return (
          <Link
            href={link.path}
            key={index}
            className={`capitalize ${linkStyles}`}
            onClick={() => setActive(false)}
          >
            {link.path === path && (
              <motion.span
                initial={{ y: "-100%" }}
                animate={{ y: 0 }}
                transition={{ type: "tween" }}
                layoutId="underline"
                className={`${underlineStyles}`}
              />
            )}

            {link.name}
          </Link>
        );
      })}
    </nav>
  );
};

export default Nav;
