import PropTypes from "prop-types";

function Skillcard({ imgSrc, label, classes }) {
  return (
    <div
      className={
        "flex items-center gap-3 ring-2 ring-inset ring-zinc-50/10 rounded-2xl p-3 hover:bg-zinc-800 transition-colors " +
        classes
      }
    >
      <figure className="bg-zinc-700/50 rounded-lg overflow-hidden w-9 h-9 p-1.5 group-hover:bg-zinc-900 transition-colors">
        <img src={imgSrc} width={32} height={32} alt={label} />
      </figure>
      <div>
        <h3>{label}</h3>
      </div>
    </div>
  );
}

Skillcard.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  classes: PropTypes.string,
};
export default Skillcard;
