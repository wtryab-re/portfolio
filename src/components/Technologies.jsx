import { FaPython, FaAws, FaReact, FaNode } from "react-icons/fa";
import { SiScikitlearn, SiPytorch, SiTensorflow } from "react-icons/si";
import { TbSql } from "react-icons/tb";
import { BiLogoTypescript } from "react-icons/bi";

export default function Technologies() {
  const techs = [
    { name: "Python", icon: <FaPython className="w-8 h-8 " /> },
    {
      name: "Scikit-Learn",
      icon: <SiScikitlearn className="w-8 h-8 " />,
    },
    { name: "SQL", icon: <TbSql className="w-8 h-8 text-gray-700" /> },
    { name: "AWS", icon: <FaAws className="w-8 h-8" /> },
    {
      name: "PyTorch",
      icon: <SiPytorch className="w-8 h-8 " />,
    },
    {
      name: "TensorFlow",
      icon: <SiTensorflow className="w-8 h-8 " />,
    },
    {
      name: "TypeScript",
      icon: <BiLogoTypescript className="w-8 h-8 " />,
    },
    { name: "React", icon: <FaReact className="w-8 h-8 " /> },
    { name: "Node.js", icon: <FaNode className="w-8 h-8 " /> },
  ];

  return (
    <section id="technologies" className="py-12 px-20 mb-10">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold  mb-8 text-slate-800">
          technologies
        </h2>

        {/* Responsive Grid Layout */}
        <div className="grid grid-cols-3 xl:grid-cols-9 gap-4">
          {techs.map((tech, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center py-4 px-2 rounded-xl shadow-sm hover:shadow-md transition-shadow h-28"
            >
              {tech.icon}
              <p className="mt-2 font-medium text-slate-700 text-center text-xs sm:text-sm truncate w-full px-1">
                {tech.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
