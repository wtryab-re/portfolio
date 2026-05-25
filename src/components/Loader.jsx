export default function Loader() {
  const totalPetals = 7;
  const fadeSpeed = 1.4;
  const spinSpeed = 4;

  // --- ADJUST SPACING HERE ---
  // Try 40px for very close, 44px for medium-close, or 48px for original layout.
  const spacingOffset = 42;

  return (
    <div className="flex items-center justify-center bg-white h-screen">
      {/* Master 96px by 96px Container (w-24 h-24) */}
      <div className="relative w-24 h-24 flex items-center justify-center animate-spin-slow">
        {/* Central yellow disk */}
        <div className="w-4 h-4 bg-amber-500 rounded-full z-10 shadow-sm" />

        {/* 7 Teardrop Petals */}
        {[...Array(totalPetals)].map((_, index) => {
          const rotation = (360 / totalPetals) * index;
          const delay = (fadeSpeed / totalPetals) * index;

          return (
            <div
              key={index}
              className="absolute w-[14px] h-[28px] bg-white opacity-10 animate-pulse-fade"
              style={{
                borderColor: "black",
                borderWidth: "2px",
                border: "solid",
                borderRadius: "50% 50% 50% 50% / 40% 40% 60% 60%",

                // 1. Dynamic origin anchor (48px is dead center of the 96px parent box)
                transformOrigin: `center ${spacingOffset}px`,

                // 2. Offsets the vertical placement to align perfectly with the new origin anchor
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
