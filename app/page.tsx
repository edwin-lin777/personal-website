import { ModeToggle } from "@/components/ModeToggle";
import { ThemeProvider } from "@/components/ThemeProvider";

import React from "react";

const page = () => {
  return (
    <ThemeProvider defaultTheme="light">
      <div>
        hello <ModeToggle />
      </div>
    </ThemeProvider>
  );
};

export default page;
