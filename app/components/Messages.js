import React from 'react'
import {Modal, View, Text, TouchableHighlight, KeyboardAvoidingView, StyleSheet} from 'react-native'
import { Answers } from '../config'
import Subject from './Subject'
import CustumMessageForm from './CustumMessageForm'

const Messages = ({animationType, transparent, visible, selectMessage, permit_custom_subject, allow_custom_subject}) => {
  return (
    <View>
        <Modal
          animationType={animationType}
          transparent={transparent}
          visible={visible}>
            <KeyboardAvoidingView behavior='position' style={styles.container}>
              <Subject text={Answers.first} selectMessage={selectMessage}/>
              <Subject text={Answers.second} selectMessage={selectMessage}/>
              <Subject text={Answers.third} selectMessage={selectMessage}/>
                <CustumMessageForm allow_custom_subject={allow_custom_subject}
                                   permit_custom_subject={permit_custom_subject}
                                   selectMessage={selectMessage} />
            </KeyboardAvoidingView>
        </Modal>
    </View>
  )
}

Messages.propTypes = {
  animationType: React.PropTypes.string.isRequired,
  transparent: React.PropTypes.bool.isRequired,
  visible: React.PropTypes.bool.isRequired,
  selectMessage: React.PropTypes.func.isRequired
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent'
  }
})

export default Messages
