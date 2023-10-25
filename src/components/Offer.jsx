import Image from "next/image";
import React from "react";
import CountDown from "./Countdown";

const Offer = () => {
  return (
    <div className="bg-black h-screen flex flex-col md:flex-row md:justify-between md:bg-[url('/offerBg.png')] md:h-[70vh]">
      {/* TEXT CONTAINER */}
      <div className="flex-1 flex flex-col justify-center items-center text-center gap-8 p-6">
        <h1 className="text-barrioprimary text-5xl font-bold xl:text-6xl">
          Hamburguesa La Mistica
        </h1>
        <p className="text-barrioprimary  xl:text-xl">
          Son espeluznantemente deliciosas y solo estarán disponibles por el mes
          de HALLOWEEN!
        </p>
        <CountDown />
        <button className="bg-barrioprimary text-barriosecundary rounded-md py-3 px-6 font-bold">
          ¡Pruebame!
        </button>
      </div>
      {/* IMAGE CONTAINER */}
      <div className="flex-1 w-full relative md:h-full">
        <Image src="/burginicio.jpg" alt="" fill className="object-contain" />
      </div>
    </div>
  );
};

export default Offer;
