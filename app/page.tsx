import { Button } from "@/components";
import { ModeToggle } from "@/components/ModeToggle";
import { ThemeProvider } from "@/components/ThemeProvider";
import Image from "next/image";
import React from "react";
import { Roboto } from "next/font/google";
import StuffButton from "@/components/stuffButton"
const roboto = Roboto({
  weight: ["400", "700"],
  subsets: ["latin"],
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
            <div>
              <div
                className={`${roboto.className} text-center  text-4xl mb-5`}
              >
                My Personal Profile
              </div>
              I’m a Mathematics student at the University of Waterloo
              specializing in Machine Learning and Computer Science, currently
              pursuing the CFA Level I and holding an LLQP certification. I
              previously worked as a Junior Manager at UU Farm, where I gained
              experience in staff management, scheduling, and recruitment.
              Alongside my studies, I’m developing as a proprietary trader
              through FTMO verification, combining analytical, technical, and
              financial skills to approach problems with precision and practical
              insight.
            </div>
          </div>
          <div className="images">
            <div className="hs">
              <Image
                src="/images/hs.png"
                alt="My Photo"
                width={200}
                height={200}
                className="rounded-2xl"
              />
            </div>
            <div className="links flex gap-10">
              <a
                href="https://github.com/edwin-lin777"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/images/github.png"
                  alt="GitHub"
                  width={40}
                  height={40}
                />
              </a>
              <a
                href="https://www.linkedin.com/in/edwin-lin-81552a312/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/images/linkedin.png"
                  alt="LinkedIn"
                  width={40}
                  height={40}
                />
              </a>
            </div>
          </div>
        </div>
        <div className="line">Stuff I've done</div>
       <div> <StuffButton text="tesrre"/> </div>
      </div>
    </ThemeProvider>
  );
};

export default page;
