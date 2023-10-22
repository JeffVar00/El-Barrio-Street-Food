"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { useState } from "react";

const data = [
  {
    id: 1,
    image: "/slide1.png",
  },
  {
    id: 2,
    image: "/slide2.png",
  },
  {
    id: 3,
    image: "/slide3.jpg",
  },
];

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const inverval = setInterval(
      () =>
        setCurrentSlide((prev) => (prev === data.length - 1 ? 0 : prev + 1)),
      2000
    );
    return () => clearInterval(inverval);
  }, []);

  return (
    <div className="flex flex-col h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] lg:flex-row">
      {/* TEXT CONTAINER */}
      <div className="flex-1 flex items-center justify-center flex-col gap-8 fond-bold bg-black">
        <h1 className="neon text-5xl text-center uppercase p-4 md:p-10 md:text-6xl xl:text-7xl font-bold">
          Panza llena, corazón contento
        </h1>
        <button className="bg-red-500 text-white py-4 px-8 rounded-lg">
          Ordene ahora
        </button>
      </div>
      {/* IMAGE CONTAINER */}
      <div className="w-full flex-1 relative ">
        <Image
          src={data[currentSlide].image}
          alt="Panza llena, corazón contento"
          fill
          className="object-cover"
        />
      </div>
    </div>
  );
};

export default Slider;
