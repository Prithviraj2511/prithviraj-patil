import PropTypes from "prop-types";

function Tags({ tags }) {
  return (
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
  );
}

Tags.propTypes = {
  tags: PropTypes.array.isRequired,
};
export default Tags;
