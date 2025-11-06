import React from "react";
import Image from "next/image";


export const MyImages = () => {
  return (
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
          <Image src="/images/github.png" alt="GitHub" width={40} height={40} />
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
  );
};
export default MyImages