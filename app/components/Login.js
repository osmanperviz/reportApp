import React from 'react'
import {View, Text, StyleSheet} from 'react-native';

const Login = () => (
    <View style={styles.container}>
        <Text>Login!!!!</Text>
    </View>
)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'transparent'
    }
});

export default Login
