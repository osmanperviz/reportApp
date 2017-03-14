import React from 'react'
import { View, Text, TouchableHighlight, StyleSheet } from 'react-native'

const Subject = ({ text, dismissModal }) => {
  return(
    <View>
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

export default Subject
