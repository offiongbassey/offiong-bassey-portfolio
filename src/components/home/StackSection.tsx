"use client";

import Button from "@/components/Button";
import StrokeBackground from "@/components/StrokeBackground";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Grip } from "lucide-react";
import { useEffect } from "react";

const STACK_INFO = [
  "I love programming,",
  "I love solving complex problems 👌,",
  "and I'm in love with music 🥰.",
];

const StackSection = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const scrollTriggerSettings = {
      trigger: ".main",
      start: "top 25%",
      toggleActions: "play reverse play reverse",
    };

    const leftXValues = [-800, -900, -400];
    const rightXValues = [800, 900, 400];
    const leftRotationValues = [-30, -20, -35];
    const rightRotationValues = [30, 20, 35];
    const yValues = [100, -150, -400];

    gsap.utils.toArray(".row").forEach((row, index) => {
      const cardLeft = (row as HTMLElement).querySelector(".card-left") as HTMLElement;
      const cardRight = (row as HTMLElement).querySelector(".card-right") as HTMLElement;

      gsap.to(cardLeft, {
        x: leftXValues[index],
        scrollTrigger: {
          trigger: ".main",
          start: "top center",
          end: "150% bottom",
          scrub: true,
          onUpdate: (self) => {
            const progress = self.progress;
            cardLeft.style.transform = `translateX(${
              progress * leftXValues[index]
            }px) translateY(${progress * yValues[index]}px) rotate(${
              progress * leftRotationValues[index]
            }deg)`;

            cardRight.style.transform = `translateX(${
              progress * rightXValues[index]
            }px) translateY(${progress * yValues[index]}px) rotate(${
              progress * rightRotationValues[index]
            }deg)`;
          },
        },
      });
    });

    gsap.to(".stack-info p", {
      y: 0,
      stagger: 0.1,
      duration: 0.5,
      ease: "power1.out",
      scrollTrigger: scrollTriggerSettings,
    });

    gsap.to(".main button", {
      y: 0,
      opacity: 1,
      delay: 0.25,
      duration: 0.5,
      ease: "power1.out",
      scrollTrigger: scrollTriggerSettings,
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const generateRows = () => {
    const rows = [];
    for (let i = 1; i <= 3; i++) {
      rows.push(
        <div className="row relative flex justify-center gap-4 w-full" key={i}>
          <div className="relative rounded-3xl overflow-hidden w-[50%] md:w-[30%] h-[70px] md:h-[360px] card-left">
            <div
              className="bg-cover bg-center bg-no-repeat w-full h-full"
              style={{
                backgroundImage: `url(/images/stack/stack-${2 * i - 1}.jpg)`,
              }}
            />
          </div>
          <div className="relative rounded-3xl overflow-hidden  w-[50%] md:w-[30%] h-[70px] md:h-[360px] card-right">
            <div
              className="bg-cover bg-center bg-no-repeat w-full h-full"
              style={{
                backgroundImage: `url(/images/stack/stack-${2 * i}.jpg)`,
              }}
            />
          </div>
        </div>
      );
    }

    return rows;
  };
  return (
    <section className="main max-container relative flex flex-col justify-center overflow-x-hidden items-center">
      <StrokeBackground />
      <h2 className="py-4 md:py-10 text-4xl md:text-7xl font-semibold text-center">
        Languages,{" "}
        <span className="bg-gradient-to-tr dark:from-purple-900 dark:via-gray-800 dark:to-indigo-900 from-purple-300 via-green-300 to-indigo-300">
          Frameworks <br /> & other
        </span>{" "}
        Tools
      </h2>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 items-center justify-center flex flex-col w-full">
        <div className="flex flex-col items-center justify-center px-4 md:px-0 my-4">
          {STACK_INFO.map((info, index) => (
            <div
              key={index}
              className="stack-info hidden md:block h-10"
              style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)" }}
            >
              <p className="relative translate-y-10 text-xl">{info}</p>
            </div>
          ))}
        </div>

        <div className="btn">
          <Button type="button" variant="primary">
            <Grip />
          </Button>
        </div>
      </div>
      {generateRows()}
    </section>
  );
};

export default StackSection;
