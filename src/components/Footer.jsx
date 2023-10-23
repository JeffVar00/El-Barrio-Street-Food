import React from "react";
import ElBarrioIcon from "./ElBarrioIcon";
import SocialMedia from "./SocialMedia";

const Footer = () => {
  return (
    <div className="h-16 md:h-24 p-4 lg:p-20 xl:p40 text-barriosecundary bg-barrioprimary flex items-center justify-between font-bold">
      <div className="flex flex-row gap-4">
        <ElBarrioIcon></ElBarrioIcon>
        <SocialMedia />
      </div>
      <div className="text-sm md:text-base flex flex-col md:flex-row md:gap-2">
        <p>© 2023 El Barrio - Street Food </p>
        <p>Todos los derechos reservados.</p>
      </div>
    </div>
  );
};

export default Footer;
