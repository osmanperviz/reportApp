import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { View, Text } from 'react-native'

class AppContainer extends Component {


  render() {
    return <View>
      <Text>Test!!!!</Text>
    </View>
  }
}

export default AppContainer

// function mapDispatchToProps(dispatch){
//   return {
//     actions: bindActionCreators(ActionCreators, dispatch)
//   };
// }
// export default connect((state) => { return {} }, mapDispatchToProps)(AppContainer)
