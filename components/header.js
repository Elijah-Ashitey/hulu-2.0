import Image from "next/image";
import React from "react";
import HeaderItem from "./headerItem";
import { LightningBoltIcon, HomeIcon,BadgeCheckIcon,CollectionIcon,SearchIcon,UserIcon } from "@heroicons/react/outline";
const menus = [
  {
    title: "HOME",
    Icon: HomeIcon,
  },
 
  {
    title: "TRENDING",
    Icon: LightningBoltIcon,
  },{
    title: "VERIFIED",
    Icon: BadgeCheckIcon,
  },{
    title: "COLLECTIONS",
    Icon: CollectionIcon,
  },{
    title: "SEARCH",
    Icon: SearchIcon,
  },{
    title: "ACCOUNT",
    Icon: UserIcon,
  },
];
export default function Header() {
  return (
    <header className="flex flex-col sm:flex-row p-5 justify-between items-center h-auto">
      <div className=" flex flex-grow justify-evenly max-w-2xl">
        {menus.map((e) => (
          <HeaderItem title={e.title} Icon={e.Icon} key={e.title}/>
        ))}
      </div>
      <Image
        alt="logo"
        className="object-contain"
        src="https://links.papareact.com/ua6"
        width={200}
        height={100}
      />
    </header>
  );
}
