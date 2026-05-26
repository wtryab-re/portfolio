import FlippableCard from "./FlippableCard";

export default function About() {
  const work_exp = [
    {
      role: "Software Engineer Intern",
      org: "AITECH CLOUD NETWORK",
      time: "Jul 2025 - Dec 2025",
    },
    {
      role: "Data Annotation Engineer",
      org: "NeuraGeek",
      time: "Mar 2025 - Apr 2025",
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

  const about = [
    `  I'm Warda, a third culture child, Pakistani with a hint of Emirati. I started studying computer science in university.
            `,
    `I've always wanted to visit the the Netherlands because they have fields of my favourite flower - tulips and a Miffy museum`,
    `I love media -- TV
            shows, movies, anime, cartoons, comics, manga, books, art. I'm a writer too! Check me out on Medium as @warites18. Anything that only humans are capable of creating is something I want to be a part of.
            `,
    `I'm into speaking, archery, farming, poetry, art, tennis, volleyball and baking banana bread. I've been told I embody a frog's chaotic energy.
            `,
    `I love learning about new things, in my heart
            of hearts I am an academic. I'd probably be one forever if I could. I'll be going to Oxford University soon! 
       `,
  ];

  return (
    <section id="about" className=" py-12 px-20">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-8 text-slate-800">about me</h2>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
        <p className="  md:text-base text-sm">
          {about.map((t) => {
            return <span className="pb-4 block">{t}</span>;
          })}
        </p>

        <div className=" md:w-full">
          <FlippableCard work_exp={work_exp} />
        </div>
      </div>
    </section>
  );
}
