"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const links = [
  { id: 1, name: "Home", path: "/" },
  { id: 2, name: "Menu", path: "/menu" },
  { id: 3, name: "Working Hours", path: "/" },
  { id: 4, name: "Contact Us", path: "/" },
];

const Menu = () => {
  const [open, setOpen] = useState(false);
  const user = false;

  return (
    <div>
      {!open ? (
        <Image
          src="/open.png"
          alt="menu display"
          width={20}
          height={20}
          onClick={() => setOpen(true)}
        />
      ) : (
        <Image
          src="/close.png"
          alt="menu display"
          width={20}
          height={20}
          onClick={() => setOpen(false)}
        />
      )}

       { open && ( <div className="bg-red-500 text-white absolute left-0 top-24 h-[calc(100vh-6rem)] flex flex-col gap-8 w-full items-center justify-center text-3xl z-10">

        {links.map((link) => (
          <div key={link.id}>
            <Link href={link.path} className="" onClick={() => setOpen(false)}>
              {link.name}
            </Link>
          </div>
        ))}

        {!user ? (
          <Link href="/login" onClick={() => setOpen(false)}>Login</Link>
        ) : (
          <div>
            <Link href="/orders" onClick={() => setOpen(false)}>Orders</Link>
            <Link href="logout" onClick={() => setOpen(false)}>Logout</Link>
          </div>
        )}

        <Link href="/cart" onClick={() => setOpen(false)}>Cart</Link>

      </div> )}

    </div> 
  );
};

export default Menu;
