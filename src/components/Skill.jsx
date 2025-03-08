import Skillcard from "./Skillcard";

function Skill() {
  const nonFrameworks = [
    {
      imgSrc: "./images/kafka.svg",
      label: "Kafka",
    },
    {
      imgSrc: "./images/jenkins.svg",
      label: "Jenkins",
    },
    {
      imgSrc: "./images/docker.svg",
      label: "Docker",
    },
    {
      imgSrc: "./images/java.svg",
      label: "Java",
    },
    {
      imgSrc: "./images/python.svg",
      label: "Python",
    },
    {
      imgSrc: "./images/css3.svg",
      label: "CSS",
    },
    {
      imgSrc: "./images/javascript.svg",
      label: "JavaScript",
    },
  ];

  const frameworks = [
    {
      imgSrc: "./images/spring.svg",
      label: "Spring",
    },
    {
      imgSrc: "./images/spring-boot.svg",
      label: "Spring-Boot",
    },
    {
      imgSrc: "./images/tailwindcss.svg",
      label: "TailwindCSS",
    },
    {
      imgSrc: "./images/react.svg",
      label: "React",
    },
    {
      imgSrc: "./images/camel.svg",
      label: "Camel",
    },
    {
      imgSrc: "./images/nodejs.svg",
      label: "NodeJS",
    },
  ];

  const databases = [
    {
      imgSrc: "./images/mysql.svg",
      label: "MySQL",
    },
    {
      imgSrc: "./images/redis.svg",
      label: "Redis",
    },
    {
      imgSrc: "./images/mongodb.svg",
      label: "MongoDB",
    },
  ];

  return (
    <section id="skills" className="section">
      <div className="container">
        <h2 className="headline-2">My Tech Skills</h2>
        <p className="text-zinc-400 mt-3 mb-8 max-w-[65ch]">
          Discover the tools and technologies I use to create websites &
          applications.
        </p>
        <div className="my-6 flex items-center justify-center">
          <hr className="w-[10%] h-1 border-gray-500" />
          <p className="text-zinc-400 mx-3">Frameworks</p>
          <hr className="w-[10%] h-1 border-gray-500" />
        </div>
        <div className="grid gap-3 grid-cols-[repeat(auto-fill,_minmax(150px,_1fr))]">
          {frameworks.map(({ imgSrc, label }, key) => (
            <Skillcard key={key} imgSrc={imgSrc} label={label} />
          ))}
        </div>
        <div className="my-6 flex items-center justify-center">
          <hr className="w-[10%] h-1 border-gray-500" />
          <p className="text-zinc-400 mx-3">Databases</p>
          <hr className="w-[10%] h-1 border-gray-500" />
        </div>
        <div className="grid gap-3 grid-cols-[repeat(auto-fill,_minmax(150px,_1fr))]">
          {databases.map(({ imgSrc, label }, key) => (
            <Skillcard key={key} imgSrc={imgSrc} label={label} />
          ))}
        </div>
        <div className="my-6 flex items-center justify-center">
          <hr className="w-[10%] h-1 border-gray-500" />
          <p className="text-zinc-400 mx-3">Core Technologies</p>
          <hr className="w-[10%] h-1 border-gray-500" />
        </div>
        <div className="grid gap-3 grid-cols-[repeat(auto-fill,_minmax(150px,_1fr))]">
          {nonFrameworks.map(({ imgSrc, label }, key) => (
            <Skillcard key={key} imgSrc={imgSrc} label={label} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skill;
