const reducer = (oldState, action) => {
  if (action.type === "SEARCH") {
    return { ...oldState, params: { ...oldState.params, query: action.playload, page: 1 } };
  } else if (action.type === "FETCH") {
    return { ...oldState, err: false, data: action.playload, list: action.playload.results, loading: false };
  } else if (action.type === "GET_VIDEOS") {
    return { ...oldState, videos: action.playload };
  } else if (action.type === "LOADING") {
    return { ...oldState, loading: action.playload };
  } else if (action.type === "DETAIL_LOADING") {
    return { ...oldState, detailLoading: action.playload };
  } else if (action.type === "FIRST_PAGE_NUMBER") {
    if (oldState.data.total_pages - oldState.data.page >= 4) {
      return { ...oldState, firstPNumber: oldState.data.page };
    }
    if (oldState.data.total_pages <= 5) {
      return { ...oldState, firstPNumber: 1 };
    }
    return { ...oldState, firstPNumber: oldState.data.total_pages - 4 };
  } else if (action.type === "ERROR") {
    return { ...oldState, loading: false, err: true };
  } else if (action.type === "GET_MOVIE") {
    return { ...oldState, item: action.playload, detailLoading: false };
  } else if (action.type === "YEAR") {
    return { ...oldState, params: { ...oldState.params, primary_release_year: action.playload } };
  } else if (action.type === "ADULT") {
    return { ...oldState, params: { ...oldState.params, include_adult: action.playload } };
  } else if (action.type === "N") {
    return { ...oldState, params: { ...oldState.params, page: action.playload } };
  } else if (action.type === "PLAYING_NOW") {
    return { ...oldState, lists: { ...oldState.lists, playingNow: action.playload } };
  } else if (action.type === "POPULAR") {
    return { ...oldState, lists: { ...oldState.lists, popular: action.playload } };
  } else if (action.type === "TOP") {
    return { ...oldState, lists: { ...oldState.lists, top: action.playload } };
  } else if (action.type === "COMMING_SOON") {
    return { ...oldState, lists: { ...oldState.lists, commingSoon: action.playload } };
  }

  return oldState;
};

export default reducer;
