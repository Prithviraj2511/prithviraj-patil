import { ButtonPrimary } from "./Button";
import Socials from "./Socials";

const resumeUrl =
  "https://drive.google.com/uc?export=download&id=1VralpVtoNDtEQl4zKi0etzLqMJbBA5cR";

function Hero() {
  return (
    <section id="home" className="pt-28 lg:pt-36">
      <div className="container items-center lg:grid lg:grid-cols-2 lg:gap-10">
        <div>
          <div className="flex items-center gap-3">
            <figure className="img-box w-9 h-9 rounded-lg">
              <img
                src="./images/picture2.jpeg"
                width={40}
                height={40}
                alt="potrait"
                className="img-cover"
              />
            </figure>
            <div className="flex items-center gap-1.5 text-zinc-400 text-sm tracking-wide">
              <span className="relative w-2 h-2 rounded-full bg-emerald-400">
                <span className="absolute inset-0 rounded-full bg-emerald-400 animate-ping"></span>
              </span>
              Available for work - prithviraj.patil.sde@gmail.com
            </div>
          </div>
          <h2 className="headline-1 headline-hero">
            Building Scalable Modern Apps for the Future
          </h2>
          <div className="mb-5 mt-5">
            <Socials
              iconHeight={32}
              iconWidth={32}
              classes="flex items-center gap-2 justify-start"
            />
          </div>
          <div className="flex items-center gap-3">
            <ButtonPrimary
              href={resumeUrl}
              label="Download CV"
              icon="download"
            />
          </div>
        </div>

        <div className="hidden lg:block">
          <figure className="w-full max-w-[480px] ml-auto bg-gradient-to-t from-sky-400 via-25% via-sky-400/40 to-65% rounded-[60px] overflow-hidden">
            <img
              src="./images/picture1.jpg"
              width={656}
              height={800}
              alt="Prithviraj Patil"
              className="w-full"
            />
          </figure>
        </div>
      </div>
    </section>
  );
}

export default Hero;
