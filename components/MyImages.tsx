import React from "react";
import Image from "next/image";

export const MyImages = () => {
  return (
    <div className="scale-175">
      <div className="relative w-[100%] aspect-square max-w-[300px] min-w-[120px]">
        <Image
          src="/images/hs.png"
          alt="My Photo"
          fill
           sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-contain rounded-xl"
        />
      </div>
      <div className="links flex  mt-[0%] gap-0">
        <a
          href="https://github.com/edwin-lin777"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/images/github.png"
            alt="LinkedIn"
            width={0}
            height={0}
            sizes="(max-width: 768px) 20px, (max-width: 1024px) 25px, 30px"
            className="w-[70%] sm:w-[70%] md:w-[70%] h-auto"
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
            width={0}
            height={0}
            sizes="(max-width: 768px) 20px, (max-width: 1024px) 25px, 30px"
            className="w-[70%] sm:w-[70%] md:w-[70%] h-auto"
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
            width={0}
            height={0}
            sizes="(max-width: 768px) 20px, (max-width: 1024px) 25px, 30px"
            className="w-[70%] sm:w-[70%] md:w-[70%] h-auto"
          />
        </a>
      </div>
    </div>
  );
};
export default MyImages;
