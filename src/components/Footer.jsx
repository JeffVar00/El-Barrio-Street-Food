import React from "react";
import ElBarrioIcon from "./ElBarrioIcon";

const Footer = () => {
  return (
    <div className="h-20 md:h-24 p-4 lg:p-20 xl:p40 text-barriosecundary bg-barrioprimary flex items-center justify-between font-bold">
      <ElBarrioIcon></ElBarrioIcon>
      <p>Todos los derechos reservados.</p>
    </div>
  );
};

export default Footer;
