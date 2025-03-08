function About() {
  const aboutItems = [
    {
      label: "Years of Experience",
      number: 3,
    },
  ];
  return (
    <section className="section" id="about">
      <div className="container">
        <div className="bg-zinc-800 p-7 rounded-2xl md:p-12">
          <p className="text-zinc-300 mb-4 md:mb-8 md:text-xl md:max-w-[60ch]">
            Hi, I&apos;m Prithviraj Patil, a passionate Software Developer with
            experience in building scalable, high-performance applications. My
            expertise spans backend development, frontend technologies, and
            cloud services, allowing me to create end-to-end systems that are
            efficient, reliable, and user-friendly. I am good in developing web
            apps, architecting microservices. I enjoy mentoring others and
            strive to accumulate as much experience as possible. I&apos;ve often
            provided assistance to others in troubleshooting bugs🐛, even in
            projects I wasn&apos;t directly involved with. Let’s connect and
            collaborate on exciting projects! 😊
          </p>
          <div className="flex flex-wrap items-center gap-4 md:gap-7">
            {aboutItems.map(({ label, number }, key) => (
              <div key={key}>
                <div className="flex items-center md:mb-2">
                  <span className="text-2xl font-semibold md:text-4xl">
                    {number}
                  </span>
                  <span className="text-sky-400 font-semibold md:text-3xl">
                    +
                  </span>
                </div>
                <p className="text-sm text-zinc-400">{label}</p>
              </div>
            ))}
            <img
              src="./images/logo.svg"
              alt="Logo"
              width={30}
              height={30}
              className="ml-auto md:w-[40px] md:h-[40px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
