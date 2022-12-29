import Box from "./Box";
import { useMainContext } from "../context/context";

const ContentList = () => {
  const {
    state: { list },
    dispatch,
  } = useMainContext();
  const noResult = <div className="no-result">No Result :( </div>;
  return (
    <div className="content-list">
      <div className="container">
        {list.length
          ? list.map((e) => {
              return <Box key={e.id} item={e} dispatch={dispatch} />;
            })
          : noResult}
      </div>
    </div>
  );
};

export default ContentList;
