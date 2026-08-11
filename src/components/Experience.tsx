"use client";

import { m } from "motion/react";
import { useGlobalContext } from "@/context/globalContext";
import ProximityText from "./ui/ProximityText";
import { themeTokens } from "@/lib/theme";

interface ExperienceItem {
  id: number;
  role: string;
  company: string;
  period: string;
  description: string[];
  skills: string[];
}


const experiences: ExperienceItem[] = [
  {
    id: 2,
    role: "Software Development intern",
    company: "Ideacraft eVentures Pvt.Ltd",
    period: "Jan 2026 - July 2026",
    description: [
      "Developed scalable backend services using Node.js and Express, handling API requests, business logic, and database interactions",
      "Optimized  queries and database schemas, improving data retrieval performance and reducing API response times",
      "Integrated third-party services and internal APIs to support core application features and improve system interoperability",
      "Participated in code reviews, debugging, and production issue resolution, ensuring code quality and system reliability",
    ],
    skills: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "Websockets",
      "REST APIs",
      "Backend Development",
      "System Design",
    ],
  },
  
  
];

const Row = ({
  item,
  index,
  darkTheme,
}: {
  item: ExperienceItem;
  index: number;
  darkTheme: boolean;
}) => {
  const { subtle, border } = themeTokens(darkTheme);

  return (
    <m.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`group grid grid-cols-1 gap-4 border-t ${border} py-8 md:grid-cols-[1fr_2fr] md:gap-16 md:py-12`}
    >
      {/* Left — company + period */}
      <div className="flex flex-col gap-1.5 md:gap-3">
        <span className="text-xl font-thin leading-[110%] tracking-[-0.02em] md:text-3xl">
          {item.company}
        </span>
        <span className={`text-xs md:text-sm ${subtle}`}>[ {item.period} ]</span>
      </div>

      {/* Right — role + details */}
      <div className="flex flex-col gap-3 md:gap-6">
        <h3 className="text-base transition-colors group-hover:text-(--color-design) md:text-xl">
          {item.role}
        </h3>

        <ul className="flex flex-col gap-2">
          {item.description.map((point, idx) => (
            <li
              key={point}
              className={`gap-3 text-sm leading-[140%] md:text-base ${subtle} ${
                idx < 2 ? "flex" : "hidden md:flex"
              }`}
            >
              <span className="opacity-60">//</span>
              <span>{point}</span>
            </li>
          ))}
        </ul>

        <div className="hidden flex-wrap gap-x-5 gap-y-2 md:flex">
          {item.skills.map((skill) => (
            <span
              key={skill}
              className={`text-xs transition-colors hover:text-(--color-design) md:text-sm ${subtle}`}
            >
              [ {skill} ]
            </span>
          ))}
        </div>
      </div>
    </m.div>
  );
};

export default function ExperienceSection() {
  const { darkTheme } = useGlobalContext();
  const { text, subtle, border } = themeTokens(darkTheme);

  return (
    <section
      id="experience"
      className={`${
        darkTheme ? "dark-theme-bg" : "light-theme-bg"
      } ${text} w-full`}
    >
      <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-16 md:py-32">
        {/* Header */}
        <div className="mb-10 md:mb-24">
          <m.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className={`mb-3 text-sm md:mb-6 md:text-lg ${subtle}`}
          >
            // Where I&apos;ve worked
          </m.p>
          <m.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl font-thin italic leading-[100%] tracking-[-0.04em] md:text-[8vw]"
          >
            <ProximityText
              text="Experience"
              maxDistance={200}
              minWeight={100}
              maxWeight={700}
            />
          </m.h2>
        </div>

        {/* List */}
        <div className={`border-b ${border}`}>
          {experiences.map((item, index) => (
            <Row
              key={item.id}
              item={item}
              index={index}
              darkTheme={darkTheme}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
