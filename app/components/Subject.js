import React from 'react'
import { View, Text, TouchableHighlight, StyleSheet } from 'react-native'

const Subject = ({ text, dismissModal }) => {
  return(
    <View style={styles.buttonContainer}>
      <TouchableHighlight onPress={()=> {
        dismissModal()
      }}>
       <Text>{ text }</Text>
      </TouchableHighlight>
    </View>
  )
}

Subject.propTypes = {
  text: React.PropTypes.string.isRequired,
  dismissModal: React.PropTypes.func.isRequired
}

const styles = StyleSheet.create({
  buttonContainer: {
    alignItems: 'center',
    marginTop: 20,
    backgroundColor: '#2E9298',
    borderRadius: 10,
    width: 200,
    padding: 10,
    shadowColor: '#000000',
    justifyContent: 'center',
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowRadius: 10,
    shadowOpacity: 0.25
  }
})

export default Subject
