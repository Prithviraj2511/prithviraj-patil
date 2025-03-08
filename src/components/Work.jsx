import ProjectCard from "./ProjectCard";

const works = [
  {
    imgSrc: "/images/tnb.png",
    title: "Talk & Build",
    tags: ["react js", "spring-boot", "web containers", "spring-ai"],
    description: `Talk and Build is a collaborative platform where users can chat with team members and an AI assistant. 
      The AI can generate code files based on user inputs, and users can instantly run and test the generated code directly in the browser`,
    projectLink: "https://musify-5al0.onrender.com/",
  },
  {
    imgSrc: "/images/jwt_session_blog.png",
    title:
      "Balancing Security and Scalability: Understanding Sessions and JWTs",
    tags: ["security", "blog"],
    description: `While building an app, I debated between Sessions vs. JWTs for authentication. 
    Sessions offer security and simplicity, while JWTs provide scalability but have trade-offs. In my blog, I break down their pros, cons, and how Refresh Tokens help balance them.`,
    projectLink:
      "https://prithvirajpatil.hashnode.dev/balancing-security-and-scalability-understanding-sessions-jwts-and-refresh-tokens",
  },
  {
    imgSrc: "/images/game-of-tanks.jpg",
    title: "Game of tanks",
    tags: ["python", "pygame", "websokets"],
    description: `The multiplayer game 🎮 with other players in our local network 📡. 
    Players will have their own tanks and some particular number of bullets`,
    projectLink: "https://github.com/Prithviraj2511/GameOfTanks",
  },
];

function Work() {
  return (
    <section id="work" className="section">
      <div className="container">
        <h2 className="headline-2 mb-8">My work highlights</h2>
        <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]">
          {works.map(
            ({ imgSrc, title, tags, description, projectLink }, key) => (
              <ProjectCard
                key={key}
                imgSrc={imgSrc}
                title={title}
                description={description}
                tags={tags}
                projectLink={projectLink}
              />
            )
          )}
        </div>
      </div>
    </section>
  );
}

export default Work;
