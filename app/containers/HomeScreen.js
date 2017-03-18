import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Home from '../components/Home'
import { setUserLocation, dismissModal } from '../actions/reports'

const mapStateToProps = state => ({
  report: state.report
})

const mapDispatchToProps = dispatch => ({
  setUserLocation(info){
    dispatch(setUserLocation(info));
  },
  dismissModal(){
    dispatch(dismissModal());
  }

})


export default connect(mapStateToProps, mapDispatchToProps)(Home)
