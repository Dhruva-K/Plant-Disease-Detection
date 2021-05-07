import React,{useState,useEffect} from 'react'
import { View, StyleSheet, Image, Text, ImageBackground } from 'react-native'
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
   } from 'react-native-responsive-screen'
import image from "../images/esca.jpg"
import {rot,esca,blight, healthy} from "../constants/background"


function Disease({ route }) {
    const {dis} = route.params;

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
                            <Text style={{color: "white",zIndex: 1,top: hp("17"), left: 50,fontSize: 20 }}>
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
                            <Text style={{color: "white",zIndex: 1,top: hp("17"), left: 50 }}>
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
                            <Text style={{color: "white",zIndex: 1,top: hp("17"), left: 50 }}>
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
                            <Text style={{color: "white",zIndex: 1,top: 80, left: 30,fontSize: 40}}>
                        {dis}
                    </Text>
                        </ImageBackground>
                    )
                    } 
                
            }
                  
   
    return (
        
        <View style = {styles.container}>
            {/*Banner photo*/}
            <View style = {{ height: hp("40%")}}>
                   {setBackground()} 
            </View>

            {/*Requirements*/}
            <View style = {styles.requirement}>
                <Text style={{color:"black",fontSize:30}}>Information</Text>
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
    }
})
export default Disease
