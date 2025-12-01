import Image from "next/image";

import { Timeline } from "@/components/ui/timeline";
import Link from "next/link";
export function TimelineDemo() {
  const data = [
    {
      key: "2024",
      title: "November 2025",
      subtitle: "FTMO Funded",
      content: (
        <div key="1232">
          <p className="text-neutral-800 dark:text-neutral-200 text-lg font-sans font-normal mb-8">
            FTMO is a proprietary trading firm that funds traders who prove
            their skill through a two-stage evaluation. The first stage, the
            Challenge, requires a 10% profit target while avoiding a 10% overall
            or 5% daily drawdown. The second, Verification, has a 5% profit
            target with the same strict drawdown rules. This structure is
            designed to rigorously test consistency and risk management. After
            nearly three years of consistent trading, I'm thrilled to have
            passed the FTMO evaluation on my first attempt and am now an
            FTMO-funded trader.
            <br></br>
            <br></br>
            The purpose of these trading parameters are to test traders skills,
            consistency, and ability to manage risk.
            <br></br>
            <br></br>
            Even though passing the challenge only took 1 month, it took me
            almost 3 years (from Feburary of 2023) to learn the skills and
            techniques to be able to pass. I've dedicated years of my life to
            case studying, tape reading, backtesting, and failing over and over
            again to get to where I am. I am so proud of myself that I stayed
            disciplined, dedicated, and ignored what others were telling me.{" "}
            <br></br>
            All of those 6 AM trading days, since I lived on the west coast, for
            the past three years were worth it.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/passed-ftmo-challenge.jpeg"
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-75 w-20 md:w-44 lg:w-75 shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="/passed-verification.jpeg"
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-75 w-20 md:w-44 lg:w-75  shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },

    {
      key: "early-2023231",
      title: "November 2025",
      subtitle: "MIT Climate and Energy Hacks",

      content: (
        <div key="22131">
          <p className="text-neutral-800 tex-lg dark:text-neutral-200 md:text-lg font-normal mb-8">
            Developed a full-stack solution for Array Technologies at MIT Energy
            and Climate Hacks, enabling optimization of CO2 emissions versus
            shipping costs for importing HRC steel. We used Next.js as our
            frontend with interactive dashboards and a Python backend. We send
            data from the backend to the frontend with FastAPI and learned a lot
            about fullstack throughout this project.
            <br></br> <br></br>{" "}
            <a
              className="text-blue-500"
              target="_blank"
              href="https://github.com/rli8145/MITEC-Array-Technologies"
              rel="noopener noreferrer"
            >
              Git Hub Repository
            </a>
          </p>

          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/mit.jpg"
              alt="hero template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="/app3.jpg"
              alt="feature template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="/SemiFinal.jpg"
              alt="bento template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="/photoofus.jpg"
              alt="cards template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "October 2025",
      key: "Octoberewr",
      subtitle: "Position Size Calculuator",
      content: (
        <div key="3423432">
          <p className="text-neutral-800 tex-lg dark:text-neutral-200 md:text-lg font-normal mb-8">
            Before I switched to trading on MT5, I used to trade on TradingView
            and they always had a position calculator so I never had to worry
            about it. However once I moved to MT5, I realized that I needed
            something to calculate my positions. I tried searching for tools
            online but they all either conerted the position sizes to lots,
            contracts, or just wouldn't work when I wanted to go short. Thus, I
            learned the basics of React by building a simple but effective and
            visual appealing position calculuator.
            <br></br> <br></br>
            <a
              className="text-blue-500"
              target="_blank"
              href="https://bs-liquidity.com"
              rel="noopener noreferrer"
            >
              Try it for yourself
            </a>
          </p>

          <div className="grid gap-4">
            <Image
              key="/Screenshot 2025-11-30 204402.png"
              src="/Screenshot 2025-11-30 204402.png"
              alt="hero template"
              width={750}
              height={750}
              className="rounded-lg object-cover h-20 w-88 md:h-44 md:w-195 lg:h-90 lg:w-400  shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "June-August 2025",
      key: "early-cjamme;log",
      subtitle: "UU Farm  Junior Manager",
      content: (
        <div key="3423432">
          <p className="text-neutral-800 tex-lg dark:text-neutral-200 md:text-lg font-normal mb-8">
            In the summer between highschool and university, a newly farm opened
            in my city and they needed help hiring and managing staff. The
            manager put me in charge of interviewing and recruiting team members
            on indeed. I also moved their scheledueling and payroll system from
            Google sheets to Sling. I got comfortable with using sling and
            managed staff schedules, tracked availability, coordinated time-off
            requests, and handled shift changes. Furthermore, on a daily basis,
            I ensured that all areas of the farm had staffing, especially the
            area at back with mini-horse.
          </p>

          <div className="grid grid-cols-2 gap-4">
            <Image
              key="https://assets.aceternity.com/pro/hero-sections.png"
              src="/emu.jpg"
              alt="Picture of emu"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              key="https://assets.aceternity.com/pro/hero-fdeafe"
              src="/duck.jpg"
              alt="duck"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              key="https://assets.aceternity.com/pro/hero-faef23432"
              src="/megoat1.jpg"
              alt="goat"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              key="https://assets.4234324234.com/pro/234324-faef23432"
              src="/fueld.jpg"
              alt="cards template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "April-August 2025",
      key: "early-cjamme;log",
      subtitle: "Manual Labourer",
      content: (
        <div key="3423432">
          <p className="text-neutral-800 tex-lg dark:text-neutral-200 md:text-lg font-normal mb-8">
            Throughout my last few years of highschool, I did manual labour to
            try to make some side income so I could buy food for whenever I went
            out. <br></br> <br></br>
            After working in the industry of manual labour and trades, I've
            gained a much higher level of respect for those who work in this
            industry daily. I remember I would get so tired after a full days
            work and would genuineuly not be able to come to work the next day.
            I have no idea how people are able to do this consistently every
            day. Overall, after my experience in manual labour, learning how to
            drive a forklift, learning the different mechanics of swing and
            garage gates, I now have profound respect for anyone who works with
            in the trades industry.
          </p>

          <div className="grid grid-cols-2 gap-4">
            <Image
              key="https://assets.aceternity.com/pro/hero-sections.png"
              src="/forklift.jpg"
              alt="forklift"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              key="https://assets.aceternity.com/pro/hero-fdeafe"
              src="/concerte.jpg"
              alt="concrete"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              key="https://assets.aceternity.com/pro/hero-faef23432"
              src="/raining.jpg"
              alt="raining"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              key="https://assets.4234324234.com/pro/234324-faef23432"
              src="/glass.jpg"
              alt="glass"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "August 2024 - June 2025 ",
      key: "early-cjamme;log",
      subtitle: "Traction Inititave Director of Research",
      content: (
        <div key="3423432">
          <p className="text-neutral-800 tex-lg dark:text-neutral-200 md:text-lg font-normal mb-8">
            As the Director of Research for this registered non-profit, I manage
            a team of two associates and spearhead our efforts to address the
            environmental impact of tire pollution. Our primary focus is
            developing strategic proposals to minimize the release of
            6PPD-Quinone, a toxic compound derived from tire wear. To foster
            community awareness from the ground up, we also organize and lead
            educational workshops in local schools, informing elementary
            students about the pernicious effects of tire wear particles.
          </p>

          <div className="grid grid-cols-2 gap-4">
            <Image
              key="https://assets.aceternity.com/pro/hero-sections.png"
              src="/IMG_1215.jpg"
              alt="hero template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              key="https://assets.aceternity.com/pro/hero-fdeafe"
              src="/IMG_1953.jpg"
              alt="traction"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              key="https://assets.aceternity.com/pro/hero-faef23432"
              src="/IMG_3770.jpg"
              alt="traction"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              key="https://assets.4234324234.com/pro/234324-faef23432"
              src="/IMG_1786.jpg"
              alt="more traction"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Feburary 2023",
      key: "early-cjamme;log",
      subtitle: "The Jounrey with Indices",
      content: (
        <div key="3423432">
          <p className="text-neutral-800 tex-lg dark:text-neutral-200 md:text-lg font-normal mb-8">
            After being introduced to the financial markets through stocks and
            foreign exchange, I decided to dedicate my self for the foreseeable
            next 5-7 years and commit to trading Index CFDs on the New-York
            Morning session.
            <br></br>
            <br></br>I was just 15 at the time, and in my head I gave myself 7
            years to be profitable. <br></br>That was my goal. <br></br>To be
            profitable by 22. <br></br> Little did I know how much time, effort,
            engagement, and perseverance it requied. Just waking up and being
            there for the session was a challenge in of itself, and thats before
            you even count the emotional development trading forces upon us, and
            the actual learning of being profitable.
          </p>

          <div className="grid grid-cols-2 gap-4">
            <Image
              key="https://assets.aceternity.com/pro/hero-sections.png"
              src="/IMG_20230115_152405.jpg"
              alt="trading"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              key="https://assets.aceternity.com/pro/hero-fdeafe"
              src="/IMG_20230228_060037.jpg"
              alt="trading"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              key="https://assets.aceternity.com/pro/hero-faef23432"
              src="/IMG_20230918_061107.jpg"
              alt="trading"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              key="https://assets.4234324234.com/pro/234324-faef23432"
              src="/IMG_20231128_065811.jpg"
              alt="trading"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },

    {
      title: "Calisthenics",
      key: "early-cjamme;log",
      subtitle: "20 Minute Calisthenics short film",
      content: (
        <div key="3423432">
          <p className="text-neutral-800 tex-lg dark:text-neutral-200 md:text-lg font-normal mb-8">
            At the age of 14, I stumbled upon the world of calisthenics and film
            making. Although these fields were from completely different worlds,
            I was passionate about both of them and wanted to combine them into
            something of greater purpose: to inspire self improvement to our
            community. My friend and I spent over 10 months methodically and
            meticulously creating a 20 minute short film based on calisthenics,
            highlighting the importance of hard work, discipline and
            consistency. Link can be sent upon request.
          </p>
          
          <div className="grid grid-cols-2 gap-4">
            <Image
              key="https://assets.aceternity.com/pro/hero-sections.png"
              src="https://assets.aceternity.com/pro/hero-sections.png"
              alt="hero template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              key="https://assets.aceternity.com/pro/hero-fdeafe"
              src="https://assets.aceternity.com/features-section.png"
              alt="feature template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              key="https://assets.aceternity.com/pro/hero-faef23432"
              src="https://assets.aceternity.com/pro/bento-grids.png"
              alt="bento template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              key="https://assets.4234324234.com/pro/234324-faef23432"
              src="https://assets.aceternity.com/cards.png"
              alt="cards template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
  ];
  return (
    <div className="min-h-screen w-full">
      <div className="absolute top-0 left-0 w-full">
        <Timeline data={data} />
      </div>
    </div>
  );
}
