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
          src="https://media.licdn.com/dms/image/D5603AQGfjxh6bt3R5g/profile-displayphoto-shrink_400_400/0/1680613624537?e=1717027200&v=beta&t=udteSDyw9nOF2nuULwJGefaeANQw5yAsVZKyYMcTXzI"
          alt="Main app icon"
          width={120}
          height={100}
          className="cursor-pointer rounded-[120px] p-2"
        />
      </Link>
      <div className="flex space-x-2">
        <SearchInput/>
        <ThemeToggler />
      </div>
    </header>
  );
}

export default Header;
