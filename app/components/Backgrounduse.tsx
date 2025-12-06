import { BackgroundBeams } from "./Backgroundbeams"
import Image from "next/image"
import linkden from "@/public/linkedin (1).png";
import github from "@/public/github (1).png";
import hs from "@/public/hs.png";
export default function Backgrounduse() {
  return (
    <div className="h-[40rem] w-full bg-white relative flex flex-col items-center justify-center antialiased">
      <div className="lg:flex sm:items-center  md:flex-row sm:flex-col -mt-15 -mb-10 lg:flex-row gap-15 max-w-7xl mx-auto py-20  md:px-8 lg:px-10">
        {" "}
        {/* parent flex containre*/}
        <div className="lg:w-1/2  scale-110">
          <div className="max-w-10xl mx-auto py-20 px-4 md:px-8 lg:px-10">
            <h2 className="sm:text-sm lg:text-3xl md:text-2xl mb-4 text-black dark:text-white max-w-4xl">
              Edwin Lin
            </h2>
            <p className="text-neutral-700 sm:text-sm dark:text-neutral-300 lg:text-md md:text-base">
              I'm a first year studying Mathematics at Waterloo. I am passionate
              about finance, trading, as well as developing full stack
              applications. I previously worked as a Junior Manager at UU Farm,
              where I gained experience in staff management, scheduling, and
              recruitment. Furthermore, apart my studies, I am currently trading
              as a proprietary trader with FTMO.
            </p>
            <p className="text-neutral-700 sm:block hidden sm:text-sm dark:text-neutral-300 lg:text-md md:text-base">
              <br></br>I hope to contuine my journey with trading Index CFDs and
              to apply my knowledge with the financial markets to more applied
              projects in the Financial Technology world.
            </p>
          </div>
        </div>
        <div className="-mt-35 md:mt-0">
          <div className="lg:w-1/2 flex flex-col lg:mt-5 items-start transform lg:scale-75 md:scale-75  scale-55 ">
            <div className="w-96 h-96 relative">
              <h2 className="font-sans text-2xl">
                Applied Mathematics and Machine Learning [@] UWaterloo
              </h2>

              <Image
                src={hs}
                className="rounded-2xl"
                alt="University of Waterloo"
              />
            </div>

            <div className="gap-4 mt-10 flex flex-row">
              <a
                href="https://www.linkedin.com/in/edwin-lin-81552a312/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={linkden}
                  alt="linkedin"
                  width={55}
                  height={55}
                  className="object-cover rounded-lg"
                />
              </a>
              <a
                href="https://github.com/edwin-lin777"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={github}
                  alt="linkedin"
                  width={55}
                  height={55}
                  className="object-cover rounded-lg"
                />
              </a>{" "}
            </div>
          </div>
        </div>
      </div>
      <BackgroundBeams />
    </div>
  )
}