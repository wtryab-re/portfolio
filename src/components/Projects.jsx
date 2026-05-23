export default function Projects() {
  const card_data = [
    {
      title: "PulmoVision",
      desc: "Undergraduate thesis: AI-powered telehealth platform to diagnose pneumonia and tuberculosis",
      what_i_did:
        "Trained & evaluated the model. Designed & created all the web and mobile app interfaces",
      tech_used: "python, react, react native, expo",
      image_url: "",
    },
    {
      title: "Agent Forge 2.0",
      desc: "AI agent orchestration platform, that allows users to build, deploy, and monetize autonomous AI agents without coding. ",
      what_i_did:
        "manual testing, documentation, created an insightful frontend of the admin panel",
      tech_used: "python, react, typescript",
      image_url: "",
    },
    {
      title: "Spite Study",
      desc: "This platform gamifies working, forces you to work with spite and holds you accountable for your procrastination",
      what_i_did: "Ongoing project",
      tech_used: "react native, firebase, computer vision", // Fixed typo here
      image_url: "",
    },
  ];

  return (
    <section id="projects" className="bg-red-200">
      <div className="py-12 px-6">
        <p className="text-4xl font-bold mb-8">things I've made</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {card_data.map(({ title, desc, tech_used }, index) => (
            // Always provide a unique 'key' when rendering lists in React
            <div
              key={index}
              className="bg-neutral-primary-soft block max-w-full p-6 border border-default rounded-xl shadow-xs"
            >
              <a>
                <img
                  className="rounded-base"
                  src="src/assets/favicon.png"
                  alt=""
                />
              </a>
              <a>
                <h5 className="mt-6 mb-2 text-2xl font-semibold tracking-tight text-heading">
                  {title}
                </h5>
              </a>
              <p className="mb-6 text-body h-20">{desc}</p>

              <p className="mb-6 text-body">{tech_used}</p>
            </div>
          ))}
        </div>

        <p className="mt-8 text-center">
          Check out more on{" "}
          <a
            href="https://www.github.com"
            target="_blank"
            className="hover:font-bold transition duration-100"
          >
            Github
          </a>
        </p>
      </div>
    </section>
  );
}
