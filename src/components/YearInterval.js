import { useMainContext } from "../context/context";
const YearInterval = () => {
  const { dispatch } = useMainContext();

  const years = [];
  const currentYear = new Date().getFullYear();

  for (let i = 0; i <= 90; i++) {
    years[i] = currentYear - i;
  }
  const onYearChange = (event) => {
    dispatch({ type: "YEAR", playload: event.target.value });
  };
  return (
    <div className="year-inerval">
      <select onChange={(event) => onYearChange(event)} style={{ maxHieght: "500px", overflow: "hidden" }}>
        <option value="" defaultValue>
          -- --
        </option>
        {years.map((e) => {
          return (
            <option key={e} value={e}>
              {e}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default YearInterval;
