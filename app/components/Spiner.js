import React from 'react'
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';

const Spiner = () => {
  <View style={styles.container}>
    <ActivityIndicator size="large"  />
  </View>
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(0,0,0,.5)",
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    left: 0,
    top: 0,
    bottom: 0,
    right: 0,
  }
})

export default Spiner
