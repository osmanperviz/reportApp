import { connect } from 'react-redux'
import Home from '../components/Home'

const mapStateToProps = state => ({
  report: state.report
})

export default connect(mapStateToProps, null)(Home)
