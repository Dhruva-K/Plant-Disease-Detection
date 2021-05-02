import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import HomeStackNavigator from './src/navigations/Navigator'


function App() {


  return (
    <NavigationContainer>
    <HomeStackNavigator/>
  </NavigationContainer>
  )
}

export default App


