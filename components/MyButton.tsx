"use client";
import React, { useState } from "react";

const MyButton = ({ title, description, images }) => {
  const [open, setOpen] = useState(false);
  const [hovered, setHovered] = useState(false);

  const setOpened = () => {
    setOpen(!open);
  };

  return (
    <div>
      <button
        onClick={setOpened}
        onMouseEnter={setHovered(true)}
        onMouseLeave={setHovered(false)}
        className={open || hovered ? "bg-amber-100" : "bg-blue-50"}
      >
        {title}
      </button>

      {open && <div>{description}</div>}
    </div>
  );
};

export default MyButton;
