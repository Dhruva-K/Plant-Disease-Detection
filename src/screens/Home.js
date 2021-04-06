import React from 'react'
import {View,Text, Image, Button} from 'react-native'
import {TextInput, ScrollView,TouchableOpacity } from 'react-native-gesture-handler'
import { LinearGradient } from 'expo-linear-gradient'

const Home = () =>{
    return(
        <View style = {{
            backgroundColor: "#eeeeee",
            flex:1
        }}>
            <View style={{
                backgroundColor: "#00a46c",
                height: "28%",
                borderBottomRightRadius:30,
                paddingHorizontal:20
            }}>
               <Image 
                source={require('../images/1.png')}
                    style={{
                        height:10,
                        width: 20,
                        marginTop:50
                    }}
                    />
                <View style={{
                    flexDirection:"row",
                    alignItems:"center",
                    marginTop:25,
                    width:"100%"
                }}>
                    <View style={{width:"50%"}}>
                        <Text style={{
                            marginTop:30,
                            fontSize:28,
                            color:"#FFF",
                            fontWeight:"bold"
                        }}>VineDoc</Text>
                    </View>
                </View>
            </View>

           <LinearGradient
            colors={["rgba(0,164,109,0.4)", "transparent"]}
            style={{
                left:0,
                right:0,
                height:90,
                marginTop:-45
            }}
           >
               <View style={{
                   backgroundColor:"#FFF",
                    paddingVertical:8,
                   paddingHorizontal:20,
                   marginHorizontal:20,
                   borderRadius:15,
                   marginTop:25,
                   flexDirection:"row",
                   alignItems:"center"
               }}>
                   <TextInput
                        placeholder="Search"
                        placeholderTextColor="#b1e5d3"
                        style={{
                            fontWeight:"bold",
                            fontSize:18,
                            width:260
                        }}
                   />
                   <Image
                    source={require('../images/3.png')}
                    style={{height:20,width:20}}
                   />
               </View>
            </LinearGradient>
            <View style={{
                backgroundColor:"#FFF",
                height: "25%",
                paddingHorizontal:25,
                marginHorizontal: 10,
                borderRadius:10,
                marginTop: 40,
                flexDirection:"row",
              
                
            }}>
                <Text style={{
                    fontSize: 15,
                    color: "#242424"
                }}>Process</Text>
                 <Text style={{
                     marginLeft: 50,
                    fontSize: 15,
                    color: "#242424"
                }}>step 2</Text>
                {/* <Button style={{
                     backgroundColor:"#FFF",
                paddingVertical:75,
                paddingHorizontal:25,
                marginHorizontal: 10,
                borderRadius:10,
                marginTop: 40,
                flexDirection:"row",
                alignItems:"center"
                }}>

                </Button> */}
                
            </View>
            <LinearGradient
            colors={["rgba(180,180,180,0.2)", "transparent"]}
            style={{
                left:15,
                right:0,
                
                marginRight:33,
                height:7,
                marginTop:0,
                borderRadius:10
            }}
           ></LinearGradient>
        </View>
    )
}

export default Home;