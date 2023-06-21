import React, { useState, useEffect } from "react";

import "animate.css";

import wpIcon from "../../src/assets/png/whatsAppBottom.png";
import usePixelPerfect from "../hooks/usePixelPerfect";

export default function WhatsAppBottom() {
  const { PP } = usePixelPerfect();
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    // Función para manejar el cambio del estado del hover
    const handleHoverChange = (hover) => {
      setIsHovered(hover);
    };

    // Agregar event listener al hacer hover
    const handleMouseEnter = () => {
      handleHoverChange(true);
    };

    // Remover event listener al quitar el hover
    const handleMouseLeave = () => {
      handleHoverChange(false);
    };

    const imageElement = document.getElementById("whatsApp-image");

    if (imageElement) {
      imageElement.addEventListener("mouseenter", handleMouseEnter);
      imageElement.addEventListener("mouseleave", handleMouseLeave);
    }

    // Remover los event listeners al desmontar el componente
    return () => {
      if (imageElement) {
        imageElement.removeEventListener("mouseenter", handleMouseEnter);
        imageElement.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, []);

  return (
    <>
      <a href="https://wa.link/kvxz15" target="_blank" rel="noreferrer">
        <img
          id="whatsApp-image"
          src={wpIcon}
          width={`${PP(60)}`}
          style={{
            position: "fixed",
            bottom: `${PP(30)}`,
            right: `${PP(30)}`,
            cursor: "pointer",
            zIndex: 5,
          }}
          className="animate__animated animate__swing"
          alt="wp-icon"
        />
      </a>
      {isHovered && (
        <div
          style={{
            position: "fixed",
            bottom: `${PP(30)}`,
            right: `${PP(100)}`,
            marginLeft: `${PP(60)}`,
            zIndex: 10,
            backgroundColor: "white",
            padding: `${PP(20)}`,
            borderRadius: `${PP(20)}`,
            boxShadow: `0 0 ${PP(5)} rgba(0, 0, 0, 0.3)`,
            height: `${PP(30)}`,
            fontSize: `${PP(20)}`,
          }}
        >
          Write me
        </div>
      )}
    </>
  );
}
