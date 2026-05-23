import { useState } from "react";
import { FaBriefcase, FaGraduationCap } from "react-icons/fa";

export default function FlippableCard() {
  // Use local state to track if the card is flipped
  const [isFlipped, setIsFlipped] = useState(false);

  const work_exp = [
    {
      role: "Software Engineer Intern",
      org: "AITECH CLOUD NETWORK",
      time: "Jul 2025 - Dec 2025",
    },
    {
      role: "Data Engineer Intern",
      org: "Solidus AiTech",
      time: "Jul 2024 - Dec 2024",
    },
    {
      role: "Tutor",
      org: "Private",
      time: "Ongoing",
    },
  ];

  return (
    /* 1. Perspective Base Container - Standard size */
    <div
      className="max-w-90 h-[420px] [perspective:1000px] cursor-pointer font-sans mx-auto my-10"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      {/* 2. Card Wrapper */}
      {/* We dynamically append the rotation class based on the hover state */}
      <div
        className={`relative w-full h-full duration-700 [transform-style:preserve-3d] ${isFlipped ? "[transform:rotateY(180deg)]" : ""}`}
      >
        {/* ================= FRONT SIDE ================= */}
        {/* If the card is flipped, we set opacity-0 to stop it from mirroring through */}
        <div
          className={`absolute inset-0 w-full h-full p-6 bg-neutral-primary-soft border border-default rounded-xl shadow-xs flex flex-col justify-between overflow-hidden [backface-visibility:hidden] transition-opacity duration-300 ${isFlipped ? "opacity-0 pointer-events-none" : "opacity-100"}`}
        >
          {/* Lanyard Slot Design Accent */}
          <div className="w-12 h-2.5 bg-default/40 rounded-full mx-auto shadow-inner" />

          {/* Profile Section */}
          <div className="flex flex-col items-center mt-4">
            <div className="w-28 h-28 bg-default/20 border-2 border-default rounded-2xl flex items-center justify-center overflow-hidden shadow-inner mb-4">
              <img src="pixel.png" alt="" />
            </div>
            <h3 className="text-2xl font-bold tracking-wide text-heading text-center">
              Warda Tayyeb
            </h3>
            <div className="w-16 h-[2px] bg-default/60" />
            <p className="text-sm">Gold Medalist</p>
          </div>

          {/* Education Section */}
          <div className="my-auto">
            <div className="flex items-center text-heading font-medium text-sm mb-2">
              <FaGraduationCap className="mr-2 text-base" />
              <span>Education</span>
            </div>
            <div className="bg-default/10 rounded-lg p-3 border border-default/30">
              <p className="text-xs font-semibold text-heading">
                B.S. Computer Science
              </p>
              <p className="text-[11px] text-sm mt-0.5">
                Capital University of Science & Technology
              </p>
              <p className="text-[10px] text-body/70 font-mono mt-1">
                2022 - 2026
              </p>
            </div>
          </div>

          {/* Navigation Hint */}
          <div className="text-[10px] text-body/50 text-center uppercase tracking-wider pt-2 border-t border-default/30">
            Hover to view experience →
          </div>
        </div>

        {/* ================= BACK SIDE ================= */}
        {/* If the card is NOT flipped, we hide this side completely (opacity-0) */}
        <div
          className={`absolute inset-0 w-full h-full p-6 bg-neutral-primary-soft border border-default rounded-xl shadow-xs flex flex-col justify-between overflow-hidden [backface-visibility:hidden] [transform:rotateY(180deg)] transition-opacity duration-300 ${isFlipped ? "opacity-100" : "opacity-0 pointer-events-none"}`}
        >
          <div>
            {/* Header */}
            <div className="flex items-center mb-4">
              <h5 className="text-xl font-semibold leading-none text-heading">
                Work Experience
              </h5>
              <FaBriefcase className="ml-2" />
            </div>

            {/* Mapped Work Experience List */}
            <div className="flow-root max-h-[280px] overflow-y-auto pr-1">
              <ul role="list" className="divide-y divide-default mt-5">
                {work_exp.map(({ role, org, time }, index) => (
                  <li key={index} className="py-3 first:pt-0 last:pb-0">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1 min-w-0">
                        <p className="text-xs font-semibold text-heading truncate">
                          {role}
                        </p>
                        <p className="text-[11px] text-body truncate mt-0.5">
                          {org}
                        </p>
                      </div>
                      <div className="text-[10px] text-body/80 font-mono shrink-0 whitespace-nowrap pt-0.5">
                        {time}
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Navigation Hint */}
          <div className="text-[10px] text-body/50 text-center uppercase tracking-wider pt-2 border-t border-default/30 mt-4">
            ← Move cursor away to return
          </div>
        </div>
      </div>
    </div>
  );
}
