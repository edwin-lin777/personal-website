"use client";
import { useScroll, useTransform, motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

import linkden from "@/public/linkedin (1).png";
import github from "@/public/github (1).png";
import hs from "@/public/hs.png";

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
  subtitle?: string;
  link?: string;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const timelineRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (timelineRef.current) {
      const rect = timelineRef.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, []);

  // Track the timeline container's position in the viewport
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start start", "end end"],
  });

  // Animate based on the timeline's visibility in viewport
  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(
    scrollYProgress,
    [0, 0.1, 0.9, 1],
    [0, 1, 1, 1]
  );

  return (
    <div className="w-full  font-sans md:px-10 ">
      <div className="flex flex-row -mt-15 -mb-10 lg:flex-row gap-45 max-w-7xl mx-auto py-20 px-4 md:px-8 lg:px-10">
        {" "}
        {/* parent flex containre*/}
        <div className="lg:w-1/2 scale-110">
          <div className="max-w-10xl mx-auto py-20 px-4 md:px-8 lg:px-10">
            <h2 className="text-lg  md:text-4xl mb-4 text-black dark:text-white max-w-4xl">
              Edwin Lin
            </h2>
            <p className="text-neutral-700  dark:text-neutral-300 text-5xl md:text-base">
              I'm a first year studying Mathematics at Waterloo. I am passionate
              about finance, trading, as well as developing full stack
              applications. I previously worked as a Junior Manager at UU Farm,
              where I gained experience in staff management, scheduling, and
              recruitment. Furthermore, apart my studies, I am currently trading
              as a proprietary trader with FTMO. <br></br>
              <br></br>I hope to contuine my journey with trading Index CFDs and
              to apply my knowledge with the financial markets to more applied
              projects in the Financial Technology world.
            </p>
          </div>
        </div>
        <div className="lg:w-1/2 flex flex-col mt-5 items-start scale-[0.75] ">
          <div className="">
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

      <hr className="rounded-full bg-gray-950 -mt-20" />
      <div
        ref={timelineRef}
        className="relative max-w-7xl -mt-15 mx-auto pb-20"
      >
        {data.map((item, index) => (
          <div
            key={index}
            className="flex justify-start pt-10 md:pt-40 md:gap-10"
          >
            <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
              <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-white dark:bg-black flex items-center justify-center">
                <div className="h-4 w-4 rounded-full bg-neutral-200 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 p-2" />
              </div>
              <div className="flex flex-col">
                <h3 className="hidden md:block text-xl md:pl-20 md:text-5xl font-bold text-neutral-700 dark:text-neutral-500 ">
                  {item.title}
                  <br></br>
                </h3>
                <h2 className=" whitespace-pre-line hidden md:block text-sm md:pl-20 md:text-2xl font-bold text-neutral-500 dark:text-neutral-500">
                  {item.subtitle}
                </h2>
              </div>
            </div>

            <div className="relative pl-20 pr-4 md:pl-4 w-full">
              <h3 className="md:hidden block text-2xl mb-4 text-left font-bold text-neutral-500 dark:text-neutral-500">
                {item.title}
              </h3>
              {item.content}
            </div>
          </div>
        ))}
        <div
          style={{
            height: height + "px",
          }}
          className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 dark:via-neutral-700 to-transparent to-[99%]  [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] "
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0  w-[2px] bg-gradient-to-t from-black via-blue-500 to-transparent from-[0%] via-[10%] rounded-full"
          />
        </div>
      </div>
      <div
        style={{ fontFamily: "Times New Roman, Times, serif" }}
        className="mt-15 flex justify-center items-center text-center"
      >
        <p>
          "Hello Friends & Neighbors, it is a Good Morning... It is Saturday once
          more. The day that so few can look back from and find satisfaction in
          the previous week's choices, actions or lack of engagement. For the
          majority, this day is a day of regret. One that reminds them that they
          don't yet have it together. Be it patience, skill or mindset to
          consistently trade... and trade profitably. These things take time to
          forge and develop. It cannot be rushed, and it cannot be faked. In the
          real world, the market will be a mirror. This means it will show you a
          reflection of yourself. It will show you how the world would see you,
          but not how you see yourself. An interesting experiment you might try
          for yourself... Hold two hand mirrors in front of you with their edges
          touching and a right angle between them like the two covers of a book
          when you're reading. With some adjustment you can get a complete
          reflection of your face as others see it. Be prepared to see a
          "stranger"... or someone who looks a lot like you, but strangely seems
          like an imposter. However, from one perspective, the real "You", that
          gazes into the mirror on the daily; you see yourself opposite to how
          the world sees you. As you might imagine, the world sees "You",
          completely opposite, though the similarities are remarkable on the
          surface! The world might see the present you and not be terribly
          impressed. Or perhaps, the world sees an incredibly talented person in
          you. Either case, the chances of both perspectives coming to a
          collective agreement about “You”, is unlikely. So, it is important to
          love your perspective of "You", and allow the perspectives others may
          have about you. Even if they stand in opposition to the one you have.
          <br></br><br></br>
          This is a gentle reminder that others do not see the time and effort
          you put into building "You". They only see what you are at the present
          and what you allow them to know and see. However, you see everything.
          You see all the nights studying or seeking encouragement just to
          continue. You know, all too well, the periods of despair and doubt you
          wrestle with. For some, that is all you can see in "You", at this
          present time. For those of you that managed to wrestle yourself into
          submission and trust in the process... your perspective has radically
          transformed. You have a fresh perspective of "You", like a Springtime
          sunrise with the dewy grass glistening in the morning rays of light.
          You can remember the night, but it no longer holds its darkness over
          you. You see new opportunities, new goals and milestones to reach
          for... fearlessly. For those of you that can't see the light of the
          morning of opportunities; and you sit in the darkness of the present
          night... be encouraged. Dawn is coming for "You" too. Don't lose hope
          or become discouraged in "You". When you feel like quitting, remind
          yourself what kept you holding on this long... renew your commitment
          to "You". If you aren't the one doing that, then who is? Who will
          later on? Every success had their time in the "night". They had to
          press on when it felt like they would never get there. Like them, you
          need to press on and stay on task, never veering off course. Daily
          calibration of your bearings and trajectory towards your well
          determined target of "Excellence". However, excellence is not a
          destination... it is a continual act. Some view tasting success as a
          measure of arrival. It is not. It is much like a smile from a handsome
          stranger or the brush of the hand against yours from a beautiful
          woman, you never knew before. It is just a moment or experience of the
          rest of your life. <br></br>
          This journey is a lifestyle... not a fad or impulsive choice to make
          and act on for a season only. Are you satisfied with the effort you
          have put in thus far? If you were honest with "You", have you put the
          time and effort into your craft? If you were someone else, but your
          personal coach and could see everything you did 24 hours a day, what
          you did with your time, attention, money, and thoughts... would you be
          pleased at the effort "You" are putting into this? Or would you be
          redirecting "You" in a more productive direction and recalibrating
          your intentions? Today is just one more Saturday of the short list of
          Saturdays you have left to live.
          <br></br><br></br>
          How many more will you deny as moments where you can honestly reflect
          on and feel confident that "You" are performing optimally and staying
          busy and remaining optimistic? Elevate the positive, eliminate the
          negative... and get busy!"" <br></br><br></br>-Be safe, M.
        </p>
      </div>
    </div>
  );
};
