import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Home from '../components/Home'
import { setUserLocation, selectMessage } from '../actions/reports'

const mapStateToProps = state => ({
  report: state.report
})

const mapDispatchToProps = dispatch => ({
  setUserLocation(info){ dispatch(setUserLocation(info)) },
  selectMessage(message){ dispatch(selectMessage(message)) },
  setImageUrl(url){ dispatch(setImageUrl(url)) }
})


export default connect(mapStateToProps, mapDispatchToProps)(Home)
