import { connect } from 'react-redux';
import UI from './UI';
import api from '@/api/home'

const mapStateToProps = (state) => {
  console.log(state)
  return {
    homebannerlist: state.home.homebannerlist,
    homedatalist: state.home.homedatalist
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    requesthomebanner () {
      api.requesthomebanner().then(data => {
        console.log(data)
        dispatch({
          type: 'CHANGE_HOME_BANNER_LIST',
          data
        })
      });
    },
    requsethomedata () {
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

const Com = connect(mapStateToProps, mapDispatchToProps)(UI);

export default Com;