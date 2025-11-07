'use cleint'
import { Button } from "@/components";
import { ModeToggle } from "@/components/ModeToggle";
import { ThemeProvider } from "@/components/ThemeProvider";
import Image from "next/image";
import React from "react";
import { Roboto } from "next/font/google";

import Text from "@/components/myText";
import MyImages from "@/components/MyImages";
import MyButton from "@/components/MyButton";

const roboto = Roboto({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap"
});

const page = () => {
  return (
    <ThemeProvider defaultTheme="light">
      <div className="toggler">
        <ModeToggle />
      </div>

      <div className="portfolio-section">
        <div className="box">
          <div className="description">
            <div className={`text-center  text-4xl mb-5`}>
              Edwin Lin
            </div>
            <Text />
          </div>

          <MyImages />
        
        </div>
        <div className="line w-[95%] mx-auto text-3xl" >My Projects</div>
        <MyButton title={"tesrre "} description={"hello"} images={"hello"}/>
      </div>
    </ThemeProvider>
  );
};

export default page;
