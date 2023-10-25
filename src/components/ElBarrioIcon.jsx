import React from "react";
import Image from "next/image";
import Link from "next/link";

const ElBarrioIcon = () => {
  return (
    <Link href="/" className="flex items-center gap-2">
      <div className="relative w-16 h-12 md:w-28 md:h-20">
        <Image src="/elbarrioiconyellow.jpg" alt="cart" fill className="" />
      </div>
    </Link>
  );
};

export default ElBarrioIcon;
