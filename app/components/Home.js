import React, {Component} from 'react'
import Expo from 'exponent'
import { View, Text, StyleSheet, Button, Image, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux'

import Modal from './Messages'
import Submit from './Submit'
import ActionButton from './ActionButton'

class Home extends Component {

  static navigationOptions = { title: 'Report' }

  _handleSubmit = () => {
    const { report } = this.props
    let formdata = new FormData();
    formdata.append("message", report.message)
    formdata.append("latitude", report.latitude)
    formdata.append("longitude", report.longitude)
    formdata.append("address", report.address)
    formdata.append("administrativeCentar", report.administrativeCentar)

    this.props.submitReport(formdata)
  }


  _handleCameraPress = async () => {
    let result = await Expo.ImagePicker.launchCameraAsync();
    this.props.setImageUrl(result.uri);
  }

  _handleReportPress = () =>  this._getUsersCordinates()

  _getUsersCordinates = () => {
    navigator.geolocation.getCurrentPosition(this._onGeoSuccess,this._onGeoError);
  }
  _onGeoSuccess = (position) => {
    const deviceId = Expo.Constants.deviceId;
    const info ={ latitude: position.coords.latitude,
                  longitude: position.coords.longitude, deviceId };
    this.props.setUserLocation(info);
  }

  _onGeoError = error =>  console.log(error)

  _selectMessage = message => this.props.selectMessage(message)

  _isValid = data => data === undefined ?  false :  true

  _checkMandatoryData = () => {
    const { report } = this.props
    return this._isValid(report.message) && this._isValid(report.latitude) && this._isValid(report.longitude)
            && this._isValid(report.administrativeCentar) && this._isValid(report.address)
  }

  render() {
    return (
      <View style={styles.container}>
        <ActionButton handlePress={this._handleReportPress} title='Report' />
        <ActionButton handlePress={this._handleCameraPress} title="Camera" />
        <Modal
          animationType={'slide'}
          transparent={false}
          visible={this.props.report.modalVisible}
          selectMessage={this._selectMessage}/>

        <Submit handleSubmit={this._handleSubmit} disabled={!this._checkMandatoryData()}  />
        { this.props.report.loading && <Spiner /> }
      </View>
    )
  }

}

Home.PropTypes = {
  modalVisible: React.PropTypes.bool.isRequired,
  selectMessage: React.PropTypes.func.isRequired,
  setUserLocation: React.PropTypes.func.isRequired,
  submitReport: React.PropTypes.func.isRequired
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
