let reducer = (state, action) => {
    switch (action.type) {
      case "ADD_TO_WATCHLIST":
        return { ...state, watchList: [...state.watchList,action.payload] };
             
      default:
        return;
    }
};

export default reducer;