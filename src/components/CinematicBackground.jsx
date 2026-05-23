export default function CinematicBackground() {
  return (
    <div
      className="
        relative min-h-screen overflow-hidden
        bg-[linear-gradient(to_bottom,_#5FA8FF_0%,_#A8D8FF_35%,_#EAF7FF_62%,_#7DBB72_100%)]
      "
    >
      {/* Atmospheric light */}
      <div
        className="
          absolute inset-0
          bg-[radial-gradient(circle_at_50%_45%,rgba(255,255,255,0.45),transparent_55%)]
        "
      />

      {/* Sun glow */}
      <div
        className="
          absolute top-[12%] left-1/2
          h-[28rem] w-[28rem]
          -translate-x-1/2
          rounded-full
          bg-white/30
          blur-3xl
        "
      />

      {/* Sky haze */}
      <div
        className="
          absolute inset-0
          bg-[linear-gradient(to_bottom,rgba(255,255,255,0.18),transparent_40%)]
        "
      />

      {/* Distant horizon mist */}
      <div
        className="
          absolute bottom-[24%] left-0
          h-40 w-full
          bg-white/20
          blur-3xl
        "
      />

      {/* Grass depth layer */}
      <div
        className="
          absolute bottom-0 left-0
          h-[38%] w-full
          bg-[linear-gradient(to_top,#84DCC6,transparent)]
        "
      />

      {/* Animated drifting particles */}
      <div className="absolute inset-0">
        {[
          "left-[10%] bottom-[18%] delay-0",
          "left-[25%] bottom-[28%] delay-1000",
          "left-[40%] bottom-[22%] delay-2000",
          "left-[60%] bottom-[30%] delay-3000",
          "left-[75%] bottom-[20%] delay-4000",
          "left-[88%] bottom-[26%] delay-5000",
        ].map((p, i) => (
          <div
            key={i}
            className={`
              absolute ${p}
              h-2 w-2 rounded-full
              bg-white/70
              blur-[1px]
              animate-[float_10s_ease-in-out_infinite]
            `}
          />
        ))}
      </div>

      {/* Flower field */}
      <div className="absolute bottom-0 left-0 h-48 w-full">
        {/* Pink flowers */}
        <div className="absolute bottom-10 left-[8%] h-3 w-3 rounded-full bg-pink-200 blur-[1px]" />
        <div className="absolute bottom-16 left-[12%] h-2 w-2 rounded-full bg-pink-100 blur-[1px]" />
        <div className="absolute bottom-8 left-[18%] h-3 w-3 rounded-full bg-rose-200 blur-[1px]" />

        {/* White flowers */}
        <div className="absolute bottom-20 left-[28%] h-3 w-3 rounded-full bg-white/90 blur-[1px]" />
        <div className="absolute bottom-12 left-[34%] h-2 w-2 rounded-full bg-white blur-[1px]" />

        {/* Lavender flowers */}
        <div className="absolute bottom-14 left-[48%] h-3 w-3 rounded-full bg-violet-200 blur-[1px]" />
        <div className="absolute bottom-24 left-[54%] h-2 w-2 rounded-full bg-purple-100 blur-[1px]" />

        {/* Yellow flowers */}
        <div className="absolute bottom-10 left-[66%] h-3 w-3 rounded-full bg-yellow-100 blur-[1px]" />
        <div className="absolute bottom-18 left-[72%] h-2 w-2 rounded-full bg-amber-100 blur-[1px]" />

        {/* Mixed flowers */}
        <div className="absolute bottom-14 left-[82%] h-3 w-3 rounded-full bg-pink-100 blur-[1px]" />
        <div className="absolute bottom-6 left-[90%] h-2 w-2 rounded-full bg-white/90 blur-[1px]" />
      </div>

      {/* Noise texture */}
      <div
        className="
          absolute inset-0 opacity-[0.06]
          mix-blend-soft-light
          bg-[url('https://grainy-gradients.vercel.app/noise.svg')]
        "
      />

      {/* Foreground vignette */}
      <div
        className="
          absolute inset-0
          bg-[radial-gradient(circle_at_center,transparent_45%,rgba(0,0,0,0.18)_100%)]
        "
      />

      {/* Custom animation */}
      <style jsx>{`
        @keyframes float {
          0% {
            transform: translateY(0px) translateX(0px);
            opacity: 0.3;
          }

          25% {
            transform: translateY(-18px) translateX(8px);
            opacity: 0.9;
          }

          50% {
            transform: translateY(-35px) translateX(-6px);
            opacity: 0.5;
          }

          75% {
            transform: translateY(-18px) translateX(10px);
            opacity: 0.8;
          }

          100% {
            transform: translateY(0px) translateX(0px);
            opacity: 0.3;
          }
        }
      `}</style>
    </div>
  );
}
