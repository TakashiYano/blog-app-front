import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export const HeaderNavigation = () => {
  const router = useRouter();
  const [pastSplash, setPastSplash] = useState("");

  const handleScroll = () => {
    if (window.scrollY > Math.round(window.innerHeight / 13)) {
      setPastSplash("fixed w-full z-50 border-b dark:border-gray-500 top-0 left-0");
    } else {
      setPastSplash("");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`bg-white dark:bg-gray-800 border-b border-gray-300 dark:border-gray-500 ${pastSplash}`}>
      <div className="px-5 mx-auto my-0 md:px-10" style={{ maxWidth: "1200px", minWidth: "420px" }}>
        <Link key="/" href="/">
          <a
            className={`hover:text-green-400 font-bold py-2 mr-7 ${
              router.pathname == "/" ? "text-green-400 border-b-2 border-green-400" : "text-gray-400"
            }`}
          >
            Home
          </a>
        </Link>
        <Link key="/about" href="/about">
          <a
            className={`hover:text-green-400 font-bold py-2 mr-7 inline-block ${
              router.pathname == "/about" ? "text-green-400 border-b-2 border-green-400" : "text-gray-400"
            }`}
          >
            About
          </a>
        </Link>
      </div>
    </nav>
  );
};
