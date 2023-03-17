export const FlapDisplay = ({ name, value, prev }) => {
  let toggleClass = value % 2 ? "even" : "odd";

  return (
    <>
      <div className="flap-display">
        <div
          className={`flap-display__number flap-display__number--top`}
          key={`${name}-1`}
        >
          {value}
        </div>
        <div
          className={`flap-display__number flap-display__number--bottom`}
          key={`${name}-2`}
        >
          {prev}
        </div>
        <div
          className={`flap-display__number flap-display__number--top ${toggleClass}`}
          key={`${name}-3`}
        >
          {prev}
        </div>
        <div
          className={`flap-display__number flap-display__number--bottom ${toggleClass}`}
          key={`${name}-4`}
        >
          {value}
        </div>
        <div className="flap-display__parting"></div>
      </div>
      <div className="counter__name">{name}</div>
    </>
  );
};
