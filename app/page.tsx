"use client";
import { Button } from "@/components";
import { ModeToggle } from "@/components/ModeToggle";
import { ThemeProvider } from "@/components/ThemeProvider";
import Image from "next/image";
import React from "react";
import { Roboto } from "next/font/google";

import Text from "@/components/myText";
import MyImages from "@/components/MyImages";
import LoadProjects from "@/components/LoadProjects";
 import { motion } from "framer-motion";
const roboto = Roboto({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});

const page = () => {
  return (
    <motion.div
    initial={{opacity: 0, y: -15}}
    animate={{opacity: 1, y: 0}}
    transition={{duration: 2}}
    >
    <ThemeProvider defaultTheme="light">
      <div className="toggler">
        <ModeToggle />
      </div>

      <div className="portfolio-section">
        <div className="box">
          <div className="description">
            <div className={`text-center  text-4xl mb-5`}>Edwin Lin</div>
            <Text />
          </div>

          <MyImages />
        </div>

        <div className="projects-section w-[95%] mx-auto">
          <div className=" text-3xl"> My Projects</div>
          <hr className="border-1 rounded-full"></hr>
          <LoadProjects/>
        </div>
      </div>
    </ThemeProvider>
    </motion.div>
  );
};

export default page;
