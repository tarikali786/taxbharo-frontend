import React from "react";
import WhatsAppIcon from "../../assets/whatsApp.webp";
import { Link } from "react-router-dom";

export const WhatsApp = () => {
  const message = encodeURIComponent("Welcome to TaxBharo!");

  return (
    <Link
      target="_blank"
      to={`https://wa.me/917286058270?text=${message}`}
      className="fixed bottom-6 right-6 rounded-full z-50 shadow-sm"
    >
      <img
        src={WhatsAppIcon}
        alt="WhatsApp Icon"
        className="size-10 md:size-14"
      />
    </Link>
  );
};
