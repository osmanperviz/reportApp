import LoginScreen from '../containers/LoginScreen'
import HomeScreen from '../containers/HomeScreen'

import { StackNavigator } from 'react-navigation';


const AppNavigator = StackNavigator({
  Main: { screen: HomeScreen },
  Login: { screen: LoginScreen }
})

export default AppNavigator
