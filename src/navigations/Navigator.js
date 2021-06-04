import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack'
import Home from '../screens/Home'
import Disease from '../screens/Disease'
import Youtube from "../screens/Youtube"
import {Image} from 'react-native'
import Calculator from '../screens/Calculator'
import Shop from '../screens/Shop'

const Tab = createBottomTabNavigator();
const BottomTabNavigator = () => {
    return(
        <Tab.Navigator
            tabBarOptions={{
                style:{
                    height:50,
                    justifyContent:"center",
                    paddingVertical:15,
                    backgroundColor:"#eff4f0",
                    elevation:2
                }
            }}
        >
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarLabel:"",
                    tabBarIcon:({color, size}) => (
                        <Image
                            source={require("../images/home.png")}
                            style={{ height:29, width:28 }}
                        />
                    )
                }}
            />

             <Tab.Screen
                name="Calculator"
                component={Calculator}
                options={{
                    tabBarLabel:"",
                    tabBarIcon:({color, size}) => (
                        <Image
                            source={require("../images/icon1.png")}
                            style={{ height:29, width:25 }}
                        />
                    )
                }}
            />
           <Tab.Screen
                name="Shop"
                component={Shop}
                options={{
                    tabBarLabel:"",
                    tabBarIcon:({color, size}) => (
                        <Image
                            source={require("../images/shopping-cart.png")}
                            style={{ height:26, width:27 }}
                        />
                    )
                }}
            />
        </Tab.Navigator>
    );
};


const Stack = createStackNavigator();
const screenOptionStyle = {
    headerShown: false
}

const HomeStackNavigator = () => {
    return(
        <Stack.Navigator screenOptions={screenOptionStyle}>
            <Stack.Screen name="Home" component={BottomTabNavigator}/>
            <Stack.Screen name = "Disease" component = {Disease} options={{headerShown:false}}/> 
          <Stack.Screen name = "Youtube" component = {Youtube} options={{headerShown:true}}/> 
        </Stack.Navigator>
    )
}

export default HomeStackNavigator;