import React, {Component} from 'react'
import Expo from 'exponent'
import { View, Text, StyleSheet, Button } from 'react-native';
import { connect } from 'react-redux'

import Modal from './Messages'

class Home extends Component {

  static navigationOptions = {
    title: 'Welcome',
  };

  constructor(props) {
    super(props)
    this.state = {
      animationType: 'slide',
      transparent: false,
      modalVisible: false
    }
  }

  _handleReportPress = () => {
    const deviceId = Expo.Constants.deviceId
    navigator.geolocation.getCurrentPosition((position) => {
        this.setState({
          lat: position.coords.latitude,
          lot: position.coords.longitude,
          modalVisible: true,
          deviceId: deviceId
        })
    }, (error) => {
        console.log(error)
    })
  }

  _dismissModal = () => {
    this.setState({
      modalVisible: !this.state.modalVisible
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.buttonContainer}>
          <Button onPress={this._handleReportPress} title="REPORT!!!" color="#FFFFFF" accessibilityLabel="Tap on Me"/>
        </View>
        <View>
          <Modal
            animationType={this.state.animationType}
            transparent={this.state.transparent}
            visible={this.state.modalVisible}
            dismissModal={this._dismissModal}/>
        </View>
      </View>
    )
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent'
  },
  buttonContainer: {
    backgroundColor: '#2E9298',
    borderRadius: 10,
    padding: 10,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowRadius: 10,
    shadowOpacity: 0.25
  }
});

export default Home
