import React from 'react'
import {Modal, View, Text, TouchableHighlight, StyleSheet} from 'react-native'
import Subject from './Subject'

const Messages = ({animationType, transparent, visible, dismissModal}) => {
  return (
    <View>
      <Modal
        animationType={animationType}
        transparent={transparent}
        visible={visible}>
        <View style={styles.container}>
          <Subject text={'Subject 1'} dismissModal={dismissModal}/>
        </View>
      </Modal>
    </View>
  )
}

Messages.propTypes = {
  animationType: React.PropTypes.string.isRequired,
  transparent: React.PropTypes.bool.isRequired,
  visible: React.PropTypes.bool.isRequired,
  dismissModal: React.PropTypes.func.isRequired
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
