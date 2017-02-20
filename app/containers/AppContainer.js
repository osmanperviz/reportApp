import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { View, Text, StyleSheet } from 'react-native'
import { Router, Route, Container, Animations, Schema } from 'react-native-redux-router'

import requiresAuth from './requiresAuth'
import Login from '../components/Login'
import Home from '../components/Home'

class AppContainer extends Component {


  render() {
    return <View style={{flex:1}}>
      <View style={{position:'absolute',left:0,right:0,top:0,bottom:0,backgroundColor:'#F5FCFF'}}>
        <Router>
          <Route name="home" component={requiresAuth(Home)}  initial={true} hideNavBar={true} title="Home"/>
          <Route name="login" component={Login}  hideNavBar={true} title="Login"/>
        </Router>
      </View>
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

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center'
  }
})
