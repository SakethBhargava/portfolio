import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Wanderlust",
    description:
      "Developed a full-stack vacation rental platform simulation with robust backend architecture. Implemented SSR to create a dynamic and user-friendly interface.",
    image: "/wanderlust.jpg",
    tags: ["EJS", "Node.js", "Express.js", "MongoDB", "BootstrapCSS", "Mapbox"],
    demoUrl: "https://wanderlust-vq6t.onrender.com/",
    githubUrl: "https://github.com/SakethBhargava/Wanderlust",
  },
  {
    id: 2,
    title: "College Management System",
    description:
      "Engineered a fully responsive College ERP web application for attendance and result publishing with a user-friendly interface.",
    image: "/CMS.jpg",
    tags: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "MaterialUI",
      "TailwindCSS",
    ],
    demoUrl: "https://scsvmverp.netlify.app/",
    githubUrl: "https://github.com/SakethBhargava/CMS_ERP",
  },
  {
    id: 3,
    title: "Payment Portal",
    description:
      "Developed a responsive payment portal simulation. Implemented with user authentication, QR code payments, and receipt generation.",
    image: "/payment_portal.jpg",
    tags: ["EJS", "Node.js", "Express.js", "MongoDB", "BootstrapCSS"],
    demoUrl: "https://sjsasp.onrender.com/",
    githubUrl: "https://github.com/SakethBhargava/PAYMENT",
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
