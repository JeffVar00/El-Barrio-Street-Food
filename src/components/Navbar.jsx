import React from "react";
import Menu from "./Menu";
import Image from "next/image";
import Link from "next/link";
import CartIcon from "./CartIcon";
import ElBarrioIcon from "./ElBarrioIcon";

const Navbar = () => {
  const user = false;

  return (
    <div className="h-16 p-4 flex justify-between items-center text-barriosecundary bg-barrioprimary font-bold md:h-24 lg:px-20 xl:px-40 ">
      <div className="hidden md:flex gap-4 flex-1">
        {/* LEFT LINKS */}
        <div className="md:absolute top-3 r-2 lg:static flex items-center gap-2 curser-pointer bg-barrioprimary lg:bg-barriosecundary lg:text-barrioprimary px-2 rounded-md">
          <Image
            src="/phone.png"
            alt="phone number"
            width={20}
            height={20}
            className=""
          ></Image>
          <span>8422-6359</span>
        </div>
        <Link href="/">Inicio</Link>
        <Link href="/menu">Menú</Link>
        <Link href="/">Contacto</Link>
      </div>

      {/* LOGO */}
      <div className="flex-1 md:flex md:justify-center">
        <ElBarrioIcon />
      </div>

      {/* MOBILE MENU */}
      <div className="md:hidden">
        <Menu />
      </div>

      {/* RIGHT LINKS */}
      <div className="hidden md:flex gap-4 items-center justify-end flex-1">
        {!user ? (
          <Link href="/login">Iniciar sesión</Link>
        ) : (
          <div>
            <Link href="/orders">Mis ordenes</Link>
          </div>
        )}

        <CartIcon></CartIcon>
      </div>
    </div>
  );
};

export default Navbar;
