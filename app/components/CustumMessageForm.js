import React from 'react'
import { View, Text, TouchableHighlight, StyleSheet, TextInput } from 'react-native'

const CustumMessageForm = ({allow_custom_subject, permit_custom_subject, selectMessage}) => {
  return (
    <View>

      { !allow_custom_subject &&
        <TouchableHighlight style={styles.button} onPress={permit_custom_subject}>
          <Text>Custume Message</Text>
        </TouchableHighlight> }

      { allow_custom_subject &&
        <TextInput
          blurOnSubmit={true}
          autoFocus={true}
          style={styles.input}
          returnKeyType={'done'}
          multiline={true}
          placeholder="Enter your message"
          maxLength={80}
          onSubmitEditing={(event)=> {selectMessage(event.nativeEvent.text)}}
        /> }
    </View>
  )
}

const styles = StyleSheet.create({
  input: {
    width: 200,
    height: 50,
    borderColor: 'black',
    borderRadius: 10,
    borderWidth: 1,
    marginTop: 20
  },
  button: {
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

export default CustumMessageForm
