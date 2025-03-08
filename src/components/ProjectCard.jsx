import PropTypes from "prop-types";

function ProjectCard({
  imgSrc,
  title,
  tags,
  description,
  projectLink,
  classes,
}) {
  return (
    <div
      className={
        "relative p-4 rounded-2xl bg-zinc-800 hover:bg-zinc-700/50 active:bg-zinc-700/60 ring-1 ring-inset ring-zinc-50/5 transition-colors " +
        classes
      }
    >
      <figure className="img-box aspect-[21/9] rounded-lg mb-4 ">
        <img src={imgSrc} alt={title} loading="lazy" className="img-cover" />
      </figure>

      <div>
        <div className="flex items-center justify-between gap-4">
          <div>
            <h3 className="title-1 mb-3">{title}</h3>
            <div className="flex flex-wrap items-center gap-2">
              {tags.map((label, key) => (
                <span
                  key={key}
                  className="h-8 text-xs text-sky-400 bg-zinc-50/5  border-2 border-sky-600 grid items-center px-2 rounded-lg"
                >
                  {label}
                </span>
              ))}
            </div>
          </div>

          {/* <div className="w-11 h-11 rounded-lg grid place-items-center bg-sky-400 text-zinc-950 shrink-0">
            <span className="material-symbols-rounded" aria-hidden="true">
              arrow_outward
            </span>
          </div> */}
        </div>
      </div>
      <div className="mt-5 px-2 py-1">
        <p className="font-normal text-sm text-zinc-50/70 tracking-wide text-[15px]">
          {description}
        </p>
      </div>
      <a href={projectLink} target="_blank" className="absolute inset-0"></a>
    </div>
  );
}

ProjectCard.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  description: PropTypes.string,
  projectLink: PropTypes,
  classes: PropTypes.string,
};
export default ProjectCard;
