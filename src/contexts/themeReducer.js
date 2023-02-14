const themeReducer = (state, action) => {
  //for primary colors
  if (action.type === "color-1") {
    return { ...state, primary: "color-1" };
  }
  if (action.type === "color-2") {
    return { ...state, primary: "color-2" };
  }
  // if (action.type === "bg-1") {
  //   return { ...state, background: "bg-1" };
  // }
  // if (action.type === "bg-2") {
  //   return { ...state, background: "bg-2" };
  // }
};


export default themeReducer;
