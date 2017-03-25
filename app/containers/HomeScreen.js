import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Home from '../components/Home'
import { setUserLocation, selectMessage, setImageUrl, submitReport } from '../actions/reports'

const mapStateToProps = state => ({
  report: state.report
})

const mapDispatchToProps = dispatch => ({
  setUserLocation(info){ dispatch(setUserLocation(info)) },
  selectMessage(message){ dispatch(selectMessage(message)) },
  setImageUrl(url){ dispatch(setImageUrl(url)) },
  submitReport(data){ dispatch(submitReport(data)) }
})


export default connect(mapStateToProps, mapDispatchToProps)(Home)
