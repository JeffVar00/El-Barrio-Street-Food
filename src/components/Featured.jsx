import React from "react";
import Image from "next/image";
import { featuredProducts } from "@/data";

const Featured = () => {
  return (
    <div className="w-screen overflow-x-scroll text-barriosecundary ">
      {/* WRAPPER */}
      <div className="w-max flex animate-scroll-indicator">
        {/* SINGLE ITEM */}
        {featuredProducts.map((item) => (
          <div
            key={item.id}
            className="w-screen p-6 h-[60vh] flex flex-col items-center justify-around  transition-all duration-300 md:w-[50vw] xl:w-[33vw] xl:h-[90vh] border-x-2 border-barriosecundary"
          >
            {/* IMAGE CONTAINER */}
            {item.img && (
              <div className="relative flex-1 w-full mt-4 ">
                <Image
                  src={item.img}
                  alt="food"
                  fill
                  className="object-contain"
                ></Image>
              </div>
            )}

            {/* TEXT CONTAINER */}
            <div className="flex-1 flex flex-col gap-4 items-center text-center justify-center p-4">
              <h1 className="text-xl font-bold uppercase xl:text-2xl 2xl:text-3xl">
                {item.title}
              </h1>
              <p className="p-4 2xl:p-8">{item.desc}</p>
              <span className="text-xl font-bold">₡ {item.price}</span>
              <button className="bg-barriosecundary text-barrioprimary rounded-md py-3 px-6 font-bold">
                Agregar al carrito
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Featured;
