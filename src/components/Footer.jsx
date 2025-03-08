import Socials from "./Socials";

function Footer() {
  return (
    <footer className="">
      <div className="container">
        <div id="contact" className="pt-10 mb-5 mt-10">
          <Socials
            iconHeight={32}
            iconWidth={32}
            classes="flex items-center gap-2 justify-center"
          />
        </div>
        <div className="flex items-center justify-between pt-5 mb-8">
          <a href="" className="">
            <img src="./images/logo.svg" width={40} height={40} alt="Logo" />
          </a>
          <div>
            <a target="_blank" href="https://icons8.com">
              <span className="text-zinc-500">icons by ~Icons8</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
