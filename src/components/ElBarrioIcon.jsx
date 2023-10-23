import React from "react";
import Image from "next/image";
import Link from "next/link";

const ElBarrioIcon = () => {
  return (
    <Link href="/" className="flex items-center gap-2">
      <div className="relative w-16 h-16 md:w-24 md:h-24">
        <Image src="/elbarrioiconyellow.jpg" alt="cart" fill />
      </div>
    </Link>
  );
};

export default ElBarrioIcon;
