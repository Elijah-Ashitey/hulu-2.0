import Image from "next/image";
import React from "react";

import { SearchIcon,GlobeAltIcon,MenuIcon, UserCircleIcon,UsersIcon } from "@heroicons/react/solid";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 grid  grid-cols-3 bg-white shadow-md p-5">
      {/* Left */}
      <div className="relative flex h-10 items-center cursor-pointer my-auto ">
        <Image
          layout="fill"
          src={"https://links.papareact.com/qd3"}
          alt={"logo"}
          objectFit="contain"
          objectPosition="left"
        />
      </div>
      {/* Middle */}
      <div className="flex items-center md:border-2 rounded-full py-2 md:shadow-sm">
        <input
          className="flex-grow text-gray-600 placeholder-gray-400 pl-5 bg-transparent outline-none"
          type="text"
          placeholder="Start your search"
        />
        <SearchIcon className="h-8 bg-red-400 hidden md:inline-flex text-white rounded-full p-2 cursor-pointer md:mx-2" />
      </div>

      {/* Right */}
      <div className="flex items-center space-x-4 justify-end text-gray-500">
          <p className="hidden md:inline">Become a host</p>
          <GlobeAltIcon className="h-6 "/>
          <div className=" flex border-2 p-2 items-center space-x-2  rounded-full">
          <MenuIcon className="h-6 "/>
          <UserCircleIcon className="h-6 "/>
          </div>
      </div>
    </header>
  );
}
