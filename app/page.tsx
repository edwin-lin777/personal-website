import { Button } from "@/components";
import { ModeToggle } from "@/components/ModeToggle";
import { ThemeProvider } from "@/components/ThemeProvider";

import React from "react";

const page = () => {
  return (
    <ThemeProvider defaultTheme="light">
      <div className="toggler">
        <ModeToggle />
      </div>

      <div className="portfolio-section">
        <div className="box">
          <div className="description">
            <p>
              I’m a Mathematics student at the University of Waterloo
              specializing in Machine Learning and Computer Science, currently
              pursuing the CFA Level I and holding an LLQP certification. I
              previously worked as a Junior Manager at UU Farm, where I gained
              experience in staff management, scheduling, and recruitment.
              Alongside my studies, I’m developing as a proprietary trader
              through FTMO verification, combining analytical, technical, and
              financial skills to approach problems with precision and practical
              insight.
            </p>
          </div>
          <div className="pictureandlinks"></div>
        </div>
      </div>
      <div className="line">Stuff I've done</div>
    </ThemeProvider>
  );
};

export default page;
