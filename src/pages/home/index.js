import { connect } from 'react-redux';
import UI from './UI';
import action from './action';

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
      dispatch(action.requesthomebanner());
    },
    requsethomedata () {
      dispatch(action.requsethomedata());
    }
  }
}

const Com = connect(mapStateToProps, mapDispatchToProps)(UI);

export default Com;