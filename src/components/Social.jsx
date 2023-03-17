import Icons from "../assets/social-icons.svg";

const Socials = () => {
  let iconNames = ["facebook", "pinterest", "instagram"];

  return (
    <div className="socials">
      {iconNames.map((name) => (
        <a href="#" key={name}>
          <svg className="socials__icon">
            <use href={`${Icons}#icon-${name}`} />
          </svg>
        </a>
      ))}
    </div>
  );
};

export default Socials;
