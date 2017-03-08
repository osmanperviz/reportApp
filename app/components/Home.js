import React, { Component } from 'react'
import { View, Text, StyleSheet, Button } from 'react-native';
import { connect } from 'react-redux'

class Home extends Component {

  constructor(props) {
    super();
    console.info(props.state);
  }

  render() {
    console.info(this.props);
    return (
  <View style={styles.container} >
    <View style={styles.buttonContainer}>
      <Button title="REPORT" color="#FFFFFF" accessibilityLabel="Tap on Me"/>
    </View>
  </View>
)}

}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'transparent',
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
