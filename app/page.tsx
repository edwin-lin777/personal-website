import { Button } from "@/components";
import { ModeToggle } from "@/components/ModeToggle";
import { ThemeProvider } from "@/components/ThemeProvider";
import Image from "next/image";
import React from "react";
import { Roboto } from "next/font/google";
import StuffButton from "@/components/stuffButton";
import Text from "@/components/myText";
import MyImages from "@/components/MyImages";

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
        <div className="line">Stuff I've done</div>
        <StuffButton text="tesrre" />{" "}
      </div>
    </ThemeProvider>
  );
};

export default page;
