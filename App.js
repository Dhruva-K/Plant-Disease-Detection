import { NavigationContainer, StackActions } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import HomeStackNavigator from './src/navigations/Navigator'

import Home from "./src/screens/Home"
import Disease from './src/screens/Disease'
import Youtube from "./src/screens/Youtube"

const Stack = createStackNavigator();
function App() {


  return (
    <NavigationContainer>
      {/* <Stack.Navigator 
        screenOptions={{
          headerShown: false
        }}
        initialRouteName = {"Home"}
        >
          <Stack.Screen name = "Home" component = {Home} options = {{ headerShown:false}}/>

          <Stack.Screen name = "Disease" component = {Disease} options={{headerShown:false}}/> 
          <Stack.Screen name = "Youtube" component = {Youtube} options={{headerShown:true}}/> 
        </Stack.Navigator> */}
        <HomeStackNavigator/>
  </NavigationContainer>
  )
}

export default App


