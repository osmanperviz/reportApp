import React, {Component} from 'react'
import Expo from 'exponent'
import { View, Text, StyleSheet, Button, Image, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux'

import Modal from './Messages'
import Submit from './Submit'
import ActionButton from './ActionButton'

class Home extends Component {

  static navigationOptions = {
    title: 'Report'
  };

  _handleCameraPress = async () => {
    let result = await Expo.ImagePicker.launchCameraAsync();
    this.props.setImageUrl(result.uri)
  }

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
    console.info(this.props)
    return (
      <View style={styles.container}>
        <ActionButton handlePress={this._handleReportPress} title='Report' />
        <ActionButton handlePress={this._handleCameraPress} title="Camera" />
        <Modal
          animationType={'slide'}
          transparent={false}
          visible={this.props.report.modalVisible}
          selectMessage={this._selectMessage}/>

        <Submit dissable={this.props.report.address ? true : false}  />
        { this.props.report.loading && <Spiner />}
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
    position: 'relative',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent'
  }
});

export default Home
