import Link from "next/link";
import React from "react";
import Image from "next/image";
import { ThemeToggler } from "./theme-toggler";
import SearchInput from "./search-input";

function Header() {
  return (
    <header className="fixed w-full z-20 top-0 items-center flex justify-between bg-gradient-to-t from-gray-200/0 via-gray-900/25 to-gray-900 p-5">
      <Link href={"/"}>
        <Image
          src="/profil_picture.jpg"
          alt="Main app icon"
          width={120}
          height={100}
          className="w-[120px] h-[120px] object-cover object-[50%_35%] cursor-pointer rounded-[120px] p-2"
        />
      </Link>
      <div className="flex space-x-2">
        <SearchInput />
        <ThemeToggler />
      </div>
    </header>
  );
}

export default Header;
