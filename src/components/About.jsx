import FlippableCard from "./FlippableCard";

export default function About() {
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
    <section id="about" className="bg-slate-50 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-8 text-slate-800">about me</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-1 bg-amber-300">
        <p className="bg-red-50">
          I'm Warda, a third culture child, Pakistani with a hint of Emirati. I
          started computer science in university because my dad wanted me to do
          it. eventually I became engulfed in it to be good. My dream company to
          work for is Netflix, not because its a big tech company that probably
          pays super well but because I love media -- TV shows, movies, anime,
          cartoons, comics, manga, books, art. my interests I'm into archery,
          poetry, art, tennis, volleyball. I like acting too, so maybe one day
          you'll see me on a Netflix show? But most importantly I love learning
          about new things, in my heart of hearts I am an academic. I'd probably
          be one forever if I could.
        </p>

        <div className="m-auto w-1/2">
          <FlippableCard work_exp={work_exp} />
        </div>
      </div>
    </section>
  );
}
