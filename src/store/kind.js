const reducer = (state = {
  kinddatalist: []
}, action) => {
  const { type, data } = action;
  switch (type) {
    case 'CHANGE_KIND_DATA_LIST':
      let kinddatalist = {kinddatalist: data}
      return { ...state, ...kinddatalist};
    default:
      return state;
  }
}


export default reducer;