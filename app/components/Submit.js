import React from 'react'
import { View, Text, TouchableHighlight, StyleSheet, Button} from 'react-native'

const Submit = ({ handleSubmit, dissable }) => {
  return (
    <View style={styles.buttonContainer}>
      <Button
         title="Submit"
         color="#FFFFFF"
         accessibilityLabel="Tap on Me"
         disabled={dissable}
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
  }
})
export default Submit
