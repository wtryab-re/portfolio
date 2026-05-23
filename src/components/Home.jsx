import { useState, useEffect } from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
export default function Home() {
  const location_icon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      class="size-5"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
      />
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
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
      <div id="home" class="flex min-h-screen flex-row-reverse  ">
        <div class=" w-1/2 flex flex-col justify-center gap-4 p-8">
          <p class="montserrat-fat text-5xl ">Hello, I'm Warda!</p>
          <p>
            <span class="inline-block align-middle text-sm mr-2">
              {location_icon}
            </span>
            <span class="inline-block align-middle text-sm">
              {currentAddress}
            </span>
          </p>

          <p class="montserrat-normal text-lg max-w-lg">
            {/* I am in pursuit of learning everything and anything. I want to make
            an everlasting mark on the world through the use of my abilities. */}{" "}
            <span class="montserrat-normal text-lg max-w-lg block mb-2">
              I'm a Data Scientist who loves the mathematical nature of the
              universe and occasional full-stack dev.
            </span>
            I also made this portfolio from scratch. Check out my projects below
            to see how I've helped companies ship better products faster.{" "}
            <span class="block mt-2">
              {" "}
              Currently I am looking for opportunities, so feel free to say
              hello if you want to collaborate on a project!
            </span>
          </p>
          <div class="flex gap-4 mt-4 max-w-lg">
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
        <div class="">Icon</div>
      </div>
    </>
  );
}
