import React from "react";
import Menu from "./Menu";
import Image from "next/image";
import Link from "next/link";
import CartIcon from "./CartIcon";

const Navbar = () => {
  const user = false;

  return (
    <div className="h-12 p-4 flex justify-between items-center text-red-500 border-b-2 border-b-red-500 uppercase md:h-24 lg:px-20 xl:px-40">

      <div className="hidden md:flex gap-4 flex-1">

        {/* LEFT LINKS */}
        <Link href="/">Home</Link>
        <Link href="/menu">Menu</Link>
        <Link href="/">Contact</Link>

      </div>

      {/* LOGO */}
      <div className="text-xl md:font-bold flex-1 md:text-center">
        <Link href="/">El Barrio</Link>
      </div>

      {/* MOBILE MENU */}
      <div className="md:hidden">
        <Menu />
      </div>

      {/* RIGHT LINKS */}
      <div className="hidden md:flex gap-4 items-center justify-end flex-1">
        <div className="md:absolute top-3 r-2 lg:static flex items-center gap-2 curser-pointer bg-orange-300 px-1 rounded-md">
          <Image
            src="/phone.png"
            alt="phone number"
            width={20}
            height={20}
          ></Image>
          <span>8422-6359</span>
        </div>

        {!user ? (
          <Link href="/login">Login</Link>
        ) : (
          <div>
            <Link href="/orders">Orders</Link>
          </div>
        )}

        <CartIcon></CartIcon>
      </div>
    </div>
  );
};

export default Navbar;
