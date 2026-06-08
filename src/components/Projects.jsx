export default function Projects() {
  const card_data = [
    {
      title: "PulmoVision",
      desc: "Undergraduate thesis: AI-powered telehealth platform to diagnose pneumonia and tuberculosis",
      what_i_did:
        "Trained & evaluated the model. Designed & created all the web and mobile app interfaces",
      tech_used: "python, react, react native, expo",
      image_url: "stock.jpg",
    },
    {
      title: "Gen6.ai",
      desc: "AI agent orchestration platform, that allows users to build, deploy, and monetize autonomous AI agents without coding. ",
      what_i_did:
        "manual testing, documentation, created an insightful frontend of the admin panel",
      tech_used: "python, react, typescript",
      image_url: "stock.jpg",

      url: "https://gen6.ai/",
    },
    {
      title: "Spite Study",
      desc: "This ongoing project, forces you to work out of spite and holds you accountable for your procrastination",
      what_i_did: "Ongoing project",
      tech_used: "react native, firebase, computer vision", // Fixed typo here
      image_url: "stock.jpg",
    },
  ];

  return (
    <section id="projects" className="px-20">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold  mb-8 text-slate-800">
          things I've made
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {card_data.map(
            ({ title, desc, tech_used, image_url, url }, index) => (
              // Always provide a unique 'key' when rendering lists in React
              <div
                key={index}
                onClick={() => url && window.open(url, "_blank")}
                onMouseOver={(e) => {
                  url && (e.currentTarget.style.cursor = "pointer");
                }}
                className="bg-neutral-primary-soft block max-w-full p-6 border border-default rounded-xl shadow-xs"
              >
                <a>
                  <img
                    className="rounded-xl w-full max-h-50 mask-cover hidden md:block"
                    src={image_url}
                    alt=""
                  />
                </a>
                <a>
                  <h5 className="mt-6 mb-2 text-2xl font-semibold tracking-tight text-heading">
                    {title}
                  </h5>
                </a>
                <p className="text-body h-20 mb-12">{desc}</p>

                <p className="mb-6 text-body">{tech_used}</p>
                {url && (
                  <a
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline"
                  >
                    view project
                  </a>
                )}
              </div>
            ),
          )}
        </div>

        <p className="mt-8 text-center">
          Check out more on{" "}
          <a href="https://www.github.com" target="_blank" className="">
            <span className="underline">Github</span>
          </a>
        </p>
      </div>
    </section>
  );
}
