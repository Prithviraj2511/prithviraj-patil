import Skillcard from "./Skillcard";

function Skill() {
  const skillItem = [
    {
      imgSrc: "/images/spring.svg",
      label: "Spring",
      desc: "Framework",
    },
    {
      imgSrc: "/images/spring-boot.svg",
      label: "Spring",
      desc: "Framework",
    },
    {
      imgSrc: "/images/mysql.svg",
      label: "MySQL",
      desc: "Database",
    },
    {
      imgSrc: "/images/redis.svg",
      label: "Redis",
      desc: "Database",
    },
    {
      imgSrc: "/images/mongodb.svg",
      label: "MongoDB",
      desc: "Database",
    },
    {
      imgSrc: "/images/css3.svg",
      label: "CSS",
      desc: "User Interface",
    },
    {
      imgSrc: "/images/javascript.svg",
      label: "JavaScript",
      desc: "Interaction",
    },
    {
      imgSrc: "/images/nodejs.svg",
      label: "NodeJS",
      desc: "Web Server",
    },
    {
      imgSrc: "/images/expressjs.svg",
      label: "ExpressJS",
      desc: "Node Framework",
    },

    {
      imgSrc: "/images/react.svg",
      label: "React",
      desc: "Framework",
    },
    {
      imgSrc: "/images/tailwindcss.svg",
      label: "TailwindCSS",
      desc: "User Interface",
    },
  ];
  return (
    <section className="section">
      <div className="container">
        <h2 className="headline-2">My Tech Skills</h2>
        <p className="text-zinc-400 mt-3 mb8 max-w-[50ch]">
          Discover the tools and technologies I use to create websites &
          applications.
        </p>
        <div className="grid gap-3 grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))]">
          {skillItem.map(({ imgSrc, label, desc }, key) => (
            <Skillcard key={key} imgSrc={imgSrc} label={label} desc={desc} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skill;
