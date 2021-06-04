import React,{useState,useEffect} from 'react'
import {View,Text, Image, Button,StyleSheet} from 'react-native'
import {TextInput, ScrollView,TouchableOpacity } from 'react-native-gesture-handler'
import { LinearGradient } from 'expo-linear-gradient'
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';
import * as tf from '@tensorflow/tfjs';
import { fetch, bundleResourceIO, decodeJpeg } from '@tensorflow/tfjs-react-native';
import * as jpeg from 'jpeg-js'
import * as FileSystem from 'expo-file-system';
import { add, image } from '@tensorflow/tfjs';
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
   } from 'react-native-responsive-screen'



function Calculator() {
    
    const [num, setValue] = useState(null);
    const [num1, setValue1] = useState(null);
    const [ans1,setAns1] = useState(0);
    const [ans2,setAns2] = useState(0);
    


    const add =async()=>{
        var res = (Number(num1)* Number(num))
        var trees = (Math.round(43560/res))
        setAns1((205/trees).toFixed(2)*454)
        // console.log(ans1)
        setAns2((152/trees).toFixed(2)*454)
        // console.log(ans2)
    }
   
    TouchableOpacity.defaultProps = { activeOpacity: 0.7};


    const AppButton = ({ onPress, title }) => (
        <TouchableOpacity onPress={onPress} style={{ width:"50%",
            elevation: 8,
            backgroundColor: "#009688",
            borderRadius: 25,
            padding:7,
            paddingLeft:25,
            paddingRight:25,
            margin:10,
            alignSelf:"center"
            }}>
                <Text style={{  fontSize: 13,
        color: "#fff",
        fontWeight: "bold",
        alignSelf: "center",}}>{title}</Text>
        </TouchableOpacity>
    );
    
    return (
        <View>
        <View style = {{
            backgroundColor:"#FFF",
            height:(hp("25%")),
            display: "flex",
            justifyContent:"center",
            
            // borderBottomLeftRadius: 25,
            // borderBottomRightRadius: 25,
            flexDirection:'row',
            alignItems: "center",
            elevation:5,
            zIndex: -1
            
        }}>
        <Text style={{color:"#00a46c",fontSize:24, fontFamily:"Pangolin-Regular", paddingLeft:10}}>Fertilizer Calculator</Text>
        <Image source={require('../images/Calculator-rafiki.png')} style={{height:140, width:120,alignSelf:"center"}}></Image>
        </View>

        <View style={{backgroundColor:"white", display:"flex",flexDirection:"column",padding:10,margin:10,marginTop:25,borderRadius:5}}>
            <Text style={{color:"#009688", fontSize:20, fontFamily:"Pangolin-Regular"}}>Spacing in feet</Text>
       
       <View style={{ flexDirection:"row", justifyContent:"space-around",marginTop:10}}>
        <View style={{flexDirection:"column"}}>
        {/* <Text style={{fontSize:15,margin:10}}>Enter Vines</Text> */}
        <View style={{
             backgroundColor:"#eeeeee",
             paddingVertical:hp("0.5%"),
            paddingHorizontal:20,
            marginHorizontal:20,
            borderRadius:5,
            marginTop:hp("3.5%"),
            flexDirection:"column",
            alignItems:"center",
            marginBottom:15
        }}>
            <TextInput
                  placeholder= "Enter Vines"
                placeholderTextColor="#b1e5d3"
                 onChangeText = {setValue}
                 value = {num}
                 style={{
                    
                     fontSize:16,
                     
                     
                 }}
                 keyboardType="numeric"
            />
            </View>
            </View>

            <View style={{ flexDirection:"column"}}>
            {/* <Text style={{fontSize:15,margin:10}}>Enter Rows</Text> */}
            <View style={{
                
            backgroundColor:"#eeeeee",
             paddingVertical:hp("0.5%"),
            paddingHorizontal:20,
            marginHorizontal:20,
            borderRadius:5,
            marginTop:hp("3.5%"),
            flexDirection:"column",
            alignItems:"center",
            
            
        }}>
            <TextInput
                placeholder= "Enter rows"
                placeholderTextColor="#b1e5d3"
                 onChangeText = {setValue1}
                 value = {num1}
                 style={{
                   
                     fontSize:16,
                     
                 }}
                 keyboardType="numeric"
            />
            </View>
            </View>
        </View>
        
                    <AppButton title="Calculate" size="sm" backgroundColor="#007bff" onPress={() => add()}  />
                   
                
            </View>


        <View style={{height:hp("15%"), backgroundColor:"white",marginTop:hp("3.5%"),flexDirection:"column",padding:10, margin:10, borderRadius:5}}>
            <Text style={{fontSize:12, color:"black",fontFamily:"Pangolin-Regular"}}>Amount of Ammonium Nitrate (34-0-0) per plant</Text>
            <View style={{
                backgroundColor:"#FFF",
                paddingVertical:hp("0.5%"),
                paddingHorizontal:20,
                flexDirection:"row",
                alignItems:"center",
                marginTop:10
            }}>
           <Text style={{color:"#009688", fontSize:20}}>{ans1} gms</Text>
            </View>
        </View>

        <View style={{height:hp("15%"), backgroundColor:"white",marginTop:hp("1.5%"),flexDirection:"column",padding:10, margin:10, borderRadius:5}}>
            <Text style={{fontSize:12, color:"black",fontFamily:"Pangolin-Regular"}}>Amount of Urea (46-0-0) per plant</Text>
            <View style={{
                backgroundColor:"#FFF",
                paddingVertical:hp("0.5%"),
                paddingHorizontal:20,
                flexDirection:"row",
                alignItems:"center",
                marginTop:10
            }}>
           <Text style={{color:"#009688", fontSize:20}}>{ans2} gms</Text>
            </View>
        </View>
          
</View>
            
    )
}

export default Calculator
