const reducer = (state = {
  homebannerlist: [1, 2, 3],
  homedatalist: [4, 5, 6]
}, action) => {
  const { type, data } = action;
  switch (type) {
    case 'CHANGE_HOME_BANNER_LIST':
      let homebannerlist = {homebannerlist: data};
      return { ...state, ...homebannerlist};
    case 'CHANGE_HOME_DATA_LIST':
      let homedatalist = {homedatalist: data};
      return { ...state, ...homedatalist};
    default:
      return state;
  }
}


export default reducer;
/**
 * const reducer = () => {}
 * const reducer = () => {}
 * const reducer = (state={
 *  data1: {},
 *  data2: []
 * }, action) => {}
 * const reducer = (state={
 *  data1: [],
 *  data2: []
 * }, action) => {
 * const { type, data } = action
 *  switch (type) {
    case 'CHANGE_DATA1':
      let data1 = {data1: data};
      return { ...state, ...data1};
    case 'CHANGE_DATA2':
      let data2 = {data2: data};
      return { ...state, ...data2};
    default:
      return state;
  }
 * }
 */