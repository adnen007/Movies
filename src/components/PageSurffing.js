import { BsFillArrowLeftSquareFill, BsFillArrowRightSquareFill } from "react-icons/bs";
import { useMainContext } from "../context/context";

const PageSurffing = () => {
  const { state, dispatch } = useMainContext();

  const onChangingPage = async (n) => {
    if (n >= 1 && n <= state.data.total_pages) {
      dispatch({ type: "N", playload: n });
    }
  };

  let pagesNumber = [
    state.data.total_pages - state.data.page >= 4 ? state.firstPNumber : 1,
    state.data.total_pages - state.data.page >= 3 ? state.firstPNumber + 1 : "...",
    state.firstPNumber + 2,
    state.data.total_pages - state.data.page >= 4 ? "..." : state.firstPNumber + 3,
    state.data.total_pages,
  ];

  if (state.data.total_pages <= 5) {
    pagesNumber = [];
    for (let i = 1; i <= state.data.total_pages; i++) {
      pagesNumber[i] = i;
    }
  }

  return (
    <div className="page-surffing">
      <BsFillArrowLeftSquareFill onClick={() => onChangingPage(state.data.page - 1)} />
      {pagesNumber.map((e, i) => {
        if (e === state.data.page) {
          return (
            <div key={i} className="current-page" onClick={() => onChangingPage(e)}>
              {e}
            </div>
          );
        }
        return (
          <div key={i} onClick={() => onChangingPage(e)}>
            {e}
          </div>
        );
      })}
      <BsFillArrowRightSquareFill onClick={() => onChangingPage(state.data.page + 1)} />
    </div>
  );
};

export default PageSurffing;
