import React, {Component} from 'react'
import Expo from 'exponent'
import { View, Text, StyleSheet, Button, Image } from 'react-native';
import { connect } from 'react-redux'

import Modal from './Messages'

class Home extends Component {

  static navigationOptions = {
    title: 'Report'
  };

 _handleReportPress = () => {
    this._getUsersCordinates()
  }

  _getUsersCordinates = () => {
    navigator.geolocation.getCurrentPosition(this._onGeoSuccess,this._onGeoError)
  }
  _onGeoSuccess = (position) => {
    const deviceId = Expo.Constants.deviceId
    const info ={ lat: position.coords.latitude, lot: position.coords.longitude, deviceId }
    this.props.setUserLocation(info)
  }

  _onGeoError = (error) => {
    console.log(error)
  }

  _selectMessage = (message) => {
    this.props.selectMessage(message)
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.buttonContainer}>
          <Button onPress={this._handleReportPress} title="Report" color="#FFFFFF" accessibilityLabel="Tap on Me"/>
        </View>
        <View style={styles.buttonContainer}>
          <Button onPress={this._handleReportPress} title="Take Picture" color="#FFFFFF" accessibilityLabel="Tap on Me"/>
        </View>
        <View>
          <Modal
            animationType={'slide'}
            transparent={false}
            visible={this.props.report.modalVisible}
            selectMessage={this._selectMessage}/>
        </View>
      </View>
    )
  }

}

Home.PropTypes = {
  modalVisible: React.PropTypes.bool.isRequired,
  selectMessage: React.PropTypes.func.isRequired,
  setUserLocation: React.PropTypes.func.isRequired
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent'
  },
  buttonContainer: {
    marginTop: 20,
    backgroundColor: '#2E9298',
    borderRadius: 10,
    width: 200,
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
