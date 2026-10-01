import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "LearnSpace-AI",
    description:
    "A personalized study platform that dynamically generates structured learning path roadmaps, interactive practice quizzes, and real-time AI study assistance based on active user topics.",
    image: "/learnspaceai.jpg",
    tags: ["Next.js", "Supabase", "GeminiAPI"],
    demoUrl: "https://learnspaceai.netlify.app/",
    githubUrl: "https://github.com/SakethBhargava/LearnSpaceAI",
  },
  {
    id: 2,
    title: "DocMind",
    description:
    "A Multi-tenant AI document platform for uploading and analyzing documents. Users can upload files and ask continuous follow-up questions about their documents in real time.",
    image: "/DocMind-AI.jpg",
    tags: [
      "Next.js",
      "Prisma",
      "Clerk",
      "GeminiAPI"
    ],
    demoUrl: "https://aidocsanalyzer.netlify.app//",
    githubUrl: "https://github.com/SakethBhargava/DocMind-AI",
  },
  {
    id: 3,
    title: "Wanderlust",
    description:
      "A full-stack vacation rental platform simulation with robust backend architecture. Implemented SSR to create a dynamic and user-friendly interface.",
    image: "/wanderlust.jpg",
    tags: ["EJS", "Node.js", "MongoDB", "Mapbox"],
    demoUrl: "https://wanderlust-vq6t.onrender.com/",
    githubUrl: "https://github.com/SakethBhargava/Wanderlust",
  },
  // {
  //   id: 1,
  //   title: "Weather App",
  //   description:
  //     "A dynamic vacation rental marketplace that invites users to explore global destinations and seamlessly book unique properties through an intuitive interface.",
  //   image: "/weather.jpg",
  //   tags: ["React.js", "Node.js", "Express.js", "MongoDB", "BootstrapCSS"],
  //   demoUrl: "#",
  //   githubUrl: "https://github.com/SakethBhargava/",
  // },
  // {
  //   id: 1,
  //   title: "Simon Says game",
  //   description:
  //     "A dynamic vacation rental marketplace that invites users to explore global destinations and seamlessly book unique properties through an intuitive interface.",
  //   image: "/simons_says.jpg",
  //   tags: ["HTML", "CSS", "JavaScript"],
  //   demoUrl: "https://sakethbhargava.github.io/Simonsays/",
  //   githubUrl: "https://github.com/SakethBhargava/Simonsays",
  // },
  // {
  //   id: 1,
  //   title: "Connect Four",
  //   description:
  //     "A dynamic vacation rental marketplace that invites users to explore global destinations and seamlessly book unique properties through an intuitive interface.",
  //   image: "/connect-four.jpg",
  //   tags: ["HTML", "CSS", "JavaScript"],
  //   demoUrl: "#",
  //   githubUrl: "https://github.com/SakethBhargava/",
  // },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary">Projects</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent works. Each project was carefully crafted
          with attention to detail, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-crd rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </a>
              </div>
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs border font-medium rounded-full bg-primary/10 text-secondry-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://github.com/SakethBhargava"
            target="_blank"
            className="cosmic-button flex items-center w-fit gap-2 mx-auto"
          >
            Check My GitHub <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
};
