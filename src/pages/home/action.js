import api from '@/api/home';

export default {
  requesthomebanner () {
    return function (dispatch) {
      api.requesthomebanner().then(data => {
        console.log(data)
        dispatch({
          type: 'CHANGE_HOME_BANNER_LIST',
          data
        })
      });
    }
  },
  requsethomedata () {
    return function (dispatch) {
      api.requsethomedata().then(data => {
        console.log(data)
        dispatch({
          type: 'CHANGE_HOME_DATA_LIST',
          data
        })
      });
    }
  }
}
