import React from "react";
import Image from "next/image";

export default function Banner() {
  return (
    <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px]">
      <Image
        layout="fill"
        src={"https://links.papareact.com/0fm"}
        alt={"logo"}
        //   height
        objectFit="cover"
        //   objectPosition="left"
      />
      <div className=" absolute top-1/2 text-center w-full"><p className="text-sm sm:text-md">
          Not Sure where to go?</p>
          <button className="text-purple-500 bg-white px-10 py-4 shadow-md rounded-full font-bold my-3 hover:shadow-2xl active:scale-90 transition duration-100">I am Flexible</button>
          </div>
      
    </div>
  );
}
