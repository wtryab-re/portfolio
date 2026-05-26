import { useState, useEffect } from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

export default function Home() {
  const location_icon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className="size-5"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
      />
    </svg>
  );

  const address = ["Dubai, UAE", "Islamabad, Pakistan"];
  const [currentAddress, setCurrentAddress] = useState(address[0]);

  //add in a typewriter effect to the location
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentAddress((prev) => {
        const currentIndex = address.indexOf(prev);
        const nextIndex = (currentIndex + 1) % address.length;
        for (let i = 0; i < address[nextIndex].length; i++) {
          setTimeout(() => {
            setCurrentAddress(address[nextIndex].substring(0, i + 1));
          }, i * 100);
        }
        return address[nextIndex];
      });
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div
        id="home"
        className="min-h-screen flex flex-col md:flex-row-reverse items-center justify-evenly pt-20"
      >
        <div className="flex flex-col justify-center gap-4 p-8">
          <p className="montserrat-fat text-5xl ">Hello, I'm Warda!</p>
          <div className="flex justify-between">
            <p>
              <span className="inline-block align-middle text-sm mr-2">
                {location_icon}
              </span>
              <span className="inline-block align-middle text-sm">
                {currentAddress}
              </span>
            </p>

            <div className="inline-flex items-center mr-5 gap-2 bg-emerald-50/60 rounded-full px-3 py-1 text-xs font-medium text-emerald-800 w-fit mb-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              Available for roles
            </div>
          </div>

          <p className="montserrat-normal text-lg max-w-lg">
            <span className="montserrat-normal text-lg max-w-lg block mb-2">
              I'm a Data Scientist who loves the mathematical nature of the
              universe and occasional full-stack dev.
            </span>
            I also made this portfolio from scratch. Check out my projects below
            to see how I've helped companies ship better products faster.
            <span className="block mt-2">
              Feel free to say hello if you want to collaborate on a project!
            </span>
          </p>
          <div className="flex gap-4 mt-4 max-w-lg justify-center ">
            <FaLinkedin
              size={"2.5em"}
              onClick={() =>
                window.open(
                  "https://www.linkedin.com/in/warda-tayyeb-027602234/s",
                  "_blank",
                )
              }
              style={{ cursor: "pointer", transition: "transform 0.2s" }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "scale(1.2)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "scale(1)";
              }}
            />
            <FaGithub
              size={"2.5em"}
              onClick={() =>
                window.open("https://github.com/wtryab-re", "_blank")
              }
              style={{ cursor: "pointer", transition: "transform 0.2s" }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "scale(1.2)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "scale(1)";
              }}
            />
          </div>
        </div>

        <div className="hidden md:flex flex-col -mt-18 justify-center gap-6 md:pl-8 w-full max-w-xs">
          <div>
            <p className="text-3xl font-extrabold text-blue-900 tracking-tight">
              Machine Learning
            </p>
            <p className="text-[11px] font-mono uppercase tracking-wider text-slate-700 font-bold mt-0.5">
              Computer Vision Architectures
            </p>
          </div>

          <div>
            <p className="text-3xl font-extrabold text-blue-900 tracking-tight">
              Full-Stack
            </p>
            <p className="text-[11px] font-mono uppercase tracking-wider text-slate-700 font-bold mt-0.5">
              Product Ownership
            </p>
          </div>

          <div>
            <p className="text-3xl font-extrabold text-blue-900 tracking-tight">
              Data Governance
            </p>
            <p className="text-[11px] font-mono uppercase tracking-wider text-slate-700 font-bold mt-0.5">
              Privacy Engineering
            </p>
          </div>

          <div>
            <p className="text-3xl font-extrabold text-blue-900 tracking-tight">
              Management & Training
            </p>
            <p className="text-[11px] font-mono uppercase tracking-wider text-slate-700 font-bold mt-0.5">
              Agile Operations
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
