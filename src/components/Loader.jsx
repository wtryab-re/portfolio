export default function Loader({ isLoading }) {
  const totalPetals = 7;
  const fadeSpeed = 1.4;
  const spinSpeed = 4;
  const spacingOffset = 42;

  return (
    <div
      className={`flex items-center justify-center bg-white h-screen w-screen fixed inset-0 z-[9999] transition-all duration-700 ease-in-out ${
        isLoading
          ? "opacity-100 pointer-events-auto visibility-visible"
          : "opacity-0 pointer-events-none invisible"
      }`}
    >
      <div className="relative w-24 h-24 flex items-center justify-center animate-spin-slow">
        <div className="w-4 h-4 bg-amber-500 rounded-full z-10 shadow-sm" />

        {[...Array(totalPetals)].map((_, index) => {
          const rotation = (360 / totalPetals) * index;
          const delay = (fadeSpeed / totalPetals) * index;

          return (
            <div
              key={index}
              className="absolute w-[14px] h-[28px] bg-white opacity-10 animate-pulse-fade"
              style={{
                border: "1px solid black",
                borderRadius: "50% 50% 50% 50% / 40% 40% 60% 60%",
                transformOrigin: `center ${spacingOffset}px`,
                top: `${48 - spacingOffset}px`,
                transform: `rotate(${rotation}deg)`,
                animationDelay: `${delay}s`,
                animationDuration: `${fadeSpeed}s`,
              }}
            />
          );
        })}
      </div>

      <style jsx global>{`
        @keyframes daisyFade {
          0% {
            opacity: 1;
          }
          100% {
            opacity: 0.1;
          }
        }
        @keyframes daisySpin {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
        .animate-pulse-fade {
          animation-name: daisyFade;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
        }
        .animate-spin-slow {
          animation: daisySpin ${spinSpeed}s linear infinite;
        }
      `}</style>
    </div>
  );
}
