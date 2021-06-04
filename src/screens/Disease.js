import React,{useState,useEffect} from 'react'
import { View, StyleSheet, Image, Text, ImageBackground } from 'react-native'
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
   } from 'react-native-responsive-screen'
import image from "../images/esca.jpg"
import {rot,esca,blight, healthy} from "../constants/background"
import { Reduction } from '@tensorflow/tfjs-core'
import data from "../Data/Data"
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Swiper from 'react-native-swiper'
import { color } from 'react-native-reanimated'
import {TouchableOpacity } from 'react-native-gesture-handler'

function Disease({ route,navigation }) {
    const {dis,info} = route.params;
    
        function setBackground(){
            
                if(dis=="Black Rot"){
                    return(
                        <ImageBackground
                        source = {rot}
                        resizeMode = "cover"
                        style = {{
                            width: "100%",
                            height:"100%",
                            
                        }}>
                            <Text style={{color: "white",zIndex: 1,top: hp("17"), alignSelf:"center",fontFamily:"Pangolin-Regular", fontSize:30 }}>
                        {dis}
                    </Text>
                        </ImageBackground>
                    )
                }
                   
                    
                 else if(dis =="Black Measles"){
                    return(
                        <ImageBackground
                        source = {esca}
                        resizeMode = "cover"
                        style = {{
                            width: "100%",
                            height:"100%",
                            
                        }}>
                            <Text style={{color: "white",zIndex: 1,top: hp("17"), alignSelf:"center",fontFamily:"Pangolin-Regular", fontSize:30 }}>
                        {dis}
                    </Text>
                        </ImageBackground>
                    )
                 }
                  
                    
                else if(dis == "Leaf Blight"){
                    return(
                        <ImageBackground
                        source = {blight}
                        resizeMode = "cover"
                        style = {{
                            width: "100%",
                            height:"100%",
                            
                        }}>
                            <Text style={{color: "white",zIndex: 1,top: hp("17"), alignSelf:"center",fontFamily:"Pangolin-Regular", fontSize:30 }}>
                        {dis}
                    </Text>
                        </ImageBackground>
                    )
                }
                   
                else if(dis=="Healthy"){
                    return(
                        <ImageBackground
                        source = {healthy}
                        resizeMode = "cover"
                        style = {{
                            width: "100%",
                            height:"100%"
                            
                        }}>
                            <Text style={{color: "white",zIndex: 1,top: hp("17"), alignSelf:"center",fontFamily:"Pangolin-Regular", fontSize:30}}>
                        {dis}
                    </Text>
                        </ImageBackground>
                    )
                    } 
                
            }
    TouchableOpacity.defaultProps = { activeOpacity: 0.7};


const AppButton = ({ onPress }) => (
    <TouchableOpacity onPress={onPress} style={styles.appButtonContainer} >
        <Text style={{
                        color: "white",
                        alignSelf: "center",
                        fontSize: 15,
                    }}
                    >
                        Watch Tutorials
                    </Text>
    </TouchableOpacity>
  );

                  
    const Tab = createBottomTabNavigator();
   
    return (
        
        <View style = {styles.container}>
            {/*Banner photo*/}
            <View style = {{ height: hp("37%")}}>
                   {setBackground()} 
            </View>

            {/*Requirements*/}
            <View style = {styles.requirement}>
           
            <Swiper style={{marginTop:25}}>
            <View style={{
                        height :hp("37%"),
                        backgroundColor: "white"
                    }}>
                    <Text 
                    style={{
                    fontSize:24, 
                    paddingLeft:20,
                    paddingTop:1,
                    fontFamily:"Pangolin-Regular",
                    color:"#009688"
                    }}>Symptoms</Text>
                
                        <Text style={{color: "#120D4F",fontSize:13, paddingLeft:20,paddingTop:1,marginTop:hp("2.6%")}}>{info.symptoms}</Text>
                    </View>

                    <View style={{
                        height :hp("37%"),
                        backgroundColor: "white"
                    }}>
                    <Text 
                    style={{
                    fontSize:24, 
                    paddingLeft:20,
                    paddingTop:1,
                    fontFamily:"Pangolin-Regular",
                    color:"#009688"
                    }}>Observations</Text>
                
                        <Text style={{color: "#120D4F",fontSize:13, paddingLeft:20,paddingTop:1,marginTop:hp("4%")}}>{info.observations}</Text>
                    </View>

                    <View style={{
                        height :hp("37%"),
                        backgroundColor: "white"
                    }}>
                    <Text 
                    style={{
                    fontSize:24, 
                    paddingLeft:20,
                    paddingTop:1,
                    fontFamily:"Pangolin-Regular",
                    color:"#009688"
                    }}>Measures</Text>
                
                        <Text style={{color: "#120D4F",fontSize:13, paddingLeft:20,paddingTop:1,marginTop:hp("4%")}}>{info.measures}</Text>
                    </View>
                
            </Swiper>
               
                <AppButton onPress={() => {navigation.navigate("Youtube",{ dis: dis})}}/>
                
               
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1
        
    },
    requirement:{
       
        flex: 1,
        marginTop: -30,
        borderTopLeftRadius: 35,
        borderTopRightRadius: 35,
        backgroundColor: "#FFF"
    },
    appButtonContainer:{
        height :hp("14%"),
        width: "55%",
        backgroundColor: "#009688",
        borderTopRightRadius: 20,
        borderBottomRightRadius: 20,
        justifyContent: "center",
        marginBottom:30
    }
})
export default Disease
