import React from 'react'
import {View, Text, Button, StyleSheet} from 'react-native'

const ActionButton = ({handlePress, title}) => {
  return(
    <View style={styles.buttonContainer}>
      <Button onPress={handlePress} title={title} color="#FFFFFF" accessibilityLabel="Tap on Me"/>
    </View>
  )
}

ActionButton.propTypes = {
  title: React.PropTypes.string.isRequired,
  handlePress: React.PropTypes.func.isRequired
}

const styles = StyleSheet.create({
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
})

export default ActionButton
