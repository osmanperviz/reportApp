import React from 'react'
import { View, Text, StyleSheet, Button} from 'react-native'

const Submit = ({ handleSubmit, disabled=true }) => {
  return (
    <View style={[ styles.buttonContainer, disabled && styles.buttonContainerDisabled]}>
      <Button
         title="Submit"
         color="#FFFFFF"
         accessibilityLabel="Tap on Me"
         disabled={disabled}
         onPress={!disabled && handleSubmit}
       />
    </View>
  )
}

const styles = StyleSheet.create({
  buttonContainer: {
    marginTop: 20,
    backgroundColor: 'green',
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
  },
  buttonContainerDisabled: {
    opacity: 0.2
  }
})
export default Submit
