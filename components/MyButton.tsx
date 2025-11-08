"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

interface myButtonProps {
  title: string;
  description: string;
  images?: string[] | null;
  className?: string;
}
const MyButton: React.FC<myButtonProps> = ({
  title,
  description,
  images,
  className,
}) => {
  const [open, setOpen] = useState(false);
  const [hovered, setHovered] = useState(false);

  const setOpened = () => {
    setOpen(!open);
  };

  return (
    <div>
      <button
        onClick={setOpened}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className={`${className} ${"hover:cursor-pointer mt-15 px-8 py-4 rounded-sm text-xl border shadow-md p-4"}   

        ${
          open || hovered ? "bg-(--clicked-color)" : "bg-(--button-color)"
        }`}
      >
        {title}
      </button>

      {open && (
        <motion.div
          initial={{ opacity: 0, y: -5 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          {description}

          {images?.map((img, index) => (
            <img id={img} src={img} alt={`${title} ${index}`} />
          ))}
        </motion.div>
      )}
    </div>
  );
};

export default MyButton;
