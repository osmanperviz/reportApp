import { connect } from 'react-redux'
import AppNavigator from '../components/AppNavigator'


const mapStateToProps = (state) => ({
  state: state.navigation,
})

export default connect(mapStateToProps, null)(AppNavigator)
