import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Home from '../components/Home'
import { setUserLocation, selectMessage, setImageUrl, submitReport, permit_custom_subject } from '../actions/reports'

const mapStateToProps = state => ({
  report: state.report
})

const mapDispatchToProps = dispatch => ({
  setUserLocation(info){ dispatch(setUserLocation(info)) },
  selectMessage(message){ dispatch(selectMessage(message)) },
  setImageUrl(url){ dispatch(setImageUrl(url)) },
  submitReport(data){ dispatch(submitReport(data)) },
  permit_custom_subject() { dispatch(permit_custom_subject()) }
})


export default connect(mapStateToProps, mapDispatchToProps)(Home)
