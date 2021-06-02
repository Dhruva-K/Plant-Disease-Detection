import React,{useState,useEffect} from 'react'
import {View,Text, Image, Button,StyleSheet} from 'react-native'
import {TextInput, ScrollView,TouchableOpacity } from 'react-native-gesture-handler'
import { LinearGradient } from 'expo-linear-gradient'

import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
   } from 'react-native-responsive-screen'



function Shop() {
    return (
    <View style={{backgroundColor:"white", height:"100%"}}>
        <View style={{width:"50%",marginTop:hp("20%"),marginLeft:hp("3%")}}>
                        <Text style={{
                            fontWeight:"bold",
                            fontSize:17,
                            color:"#585a61"
                        }}>Equipments</Text>
                        <View style={{
                            height:4,
                            backgroundColor:"#b1e5d3",
                            width:120,
                            marginTop:-5
                        }}>

                        </View>
        </View>
         <ScrollView 
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    style={{height:400,}}
                >
                    <LinearGradient
                        colors={["rgba(0,164,109,0.09)", "transparent"]}
                        style={{
                            position:"absolute",
                            left:0,
                            right:0,
                            height:200,
                            marginTop:20,
                            top:0
                        }}
                    />
                    <TouchableOpacity 
                        
                        style={{
                            height:230,
                            elevation:2,
                            backgroundColor:"#FFF",
                            marginLeft:20,
                            marginTop:20,
                            borderRadius:15,
                            marginBottom:10,
                            width:160,
                            padding:10
                        }}
                    >
                        <Image
                            source={require('../images_shop/pruners.jpg')}
                            style={{height:hp("20%"),width:wp("40%"),alignSelf:"center",}}
                            
                        />
                        <View style={{
                            flexDirection:"row",
                            paddingTop:10,
                            paddingHorizontal:10,
                            alignItems:"center"
                        }}>
                            <Text style={{
                                fontWeight:"bold"
                            }}>PRUNER</Text>
                            <Text style={{
                                fontSize: 10,
                                fontWeight:"normal",
                                color:"#00a46c",
                                paddingLeft:20
                            }}>Rs.400</Text>
                        </View>
                        <Text style={{
                            paddingHorizontal:10,
                            fontWeight:"normal",
                            color:"#b1e5d3",
                            paddingTop:3
                        }}>
                            Available
                        </Text>
                    </TouchableOpacity>

                    <View 
                        // onPress={()=>navigation.navigate("Detail")}
                        style={{
                            height:250,
                            elevation:2,
                            backgroundColor:"#FFF",
                            marginLeft:20,
                            marginTop:20,
                            borderRadius:15,
                            marginBottom:10,
                            width:160,
                            padding:10
                        }}
                    >
                         <Image
                            source={require('../images_shop/saw.jpg')}
                            style={{height:hp("20%"),width:wp("40%"),alignSelf:"center",zIndex:0 }}
                            
                        />
                        <View style={{
                            flexDirection:"row",
                            paddingTop:10,
                            paddingHorizontal:10
                        }}>
                            <Text style={{
                                fontWeight:"bold"
                            }}>ANGELICA</Text>
                            <Text style={{
                                fontWeight:"bold",
                                color:"#00a46c",
                                paddingLeft:20
                            }}>$400</Text>
                        </View>
                        <Text style={{
                            paddingHorizontal:10,
                            fontWeight:"bold",
                            color:"#b1e5d3",
                            paddingTop:3
                        }}>
                            RUSSIA
                        </Text>
                    </View>

                    <View 
                        // onPress={()=>navigation.navigate("Detail")}
                        style={{
                            height:250,
                            elevation:2,
                            backgroundColor:"#FFF",
                            marginLeft:20,
                            marginTop:20,
                            borderRadius:15,
                            marginBottom:10,
                            width:160,
                            padding:10
                        }}
                    >
                         <Image
                            source={require('../images_shop/bins.jpg')}
                            style={{height:hp("17%"),width:wp("40%"),alignSelf:"center"}}
                            
                        />
                        <View style={{
                            flexDirection:"row",
                            paddingTop:10,
                            paddingHorizontal:10
                        }}>
                            <Text style={{
                                fontWeight:"bold"
                            }}>SAMANTHA</Text>
                            <Text style={{
                                fontWeight:"bold",
                                color:"#00a46c",
                                paddingLeft:20
                            }}>$400</Text>
                        </View>
                        <Text style={{
                            paddingHorizontal:10,
                            fontWeight:"bold",
                            color:"#b1e5d3",
                            paddingTop:3
                        }}>
                            RUSSIA
                        </Text>
                    </View>

                    <View 
                        // onPress={()=>navigation.navigate("Detail")}
                        style={{
                            height:250,
                            elevation:2,
                            backgroundColor:"#FFF",
                            marginLeft:20,
                            marginTop:20,
                            borderRadius:15,
                            marginBottom:10,
                            width:160,
                            padding:10
                        }}
                    >
                         <Image
                            source={require('../images_shop/rock.jpg')}
                            style={{height:hp("17%"),width:wp("40%"),alignSelf:"center"}}
                            
                        />
                        <View style={{
                            flexDirection:"row",
                            paddingTop:10,
                            paddingHorizontal:10
                        }}>
                            <Text style={{
                                fontWeight:"bold"
                            }}>SAMANTHA</Text>
                            <Text style={{
                                fontWeight:"bold",
                                color:"#00a46c",
                                paddingLeft:20
                            }}>$400</Text>
                        </View>
                        <Text style={{
                            paddingHorizontal:10,
                            fontWeight:"bold",
                            color:"#b1e5d3",
                            paddingTop:3
                        }}>
                            RUSSIA
                        </Text>
                    </View>

                    <View 
                        // onPress={()=>navigation.navigate("Detail")}
                        style={{
                            height:250,
                            elevation:2,
                            backgroundColor:"#FFF",
                            marginLeft:20,
                            marginTop:20,
                            borderRadius:15,
                            marginBottom:10,
                            width:160,
                            padding:10
                        }}
                    >
                         <Image
                            source={require('../images_shop/spreader.jpg')}
                            style={{height:hp("17%"),width:wp("40%"),alignSelf:"center"}}
                            
                        />
                        <View style={{
                            flexDirection:"row",
                            paddingTop:10,
                            paddingHorizontal:10
                        }}>
                            <Text style={{
                                fontWeight:"bold"
                            }}>SAMANTHA</Text>
                            <Text style={{
                                fontWeight:"bold",
                                color:"#00a46c",
                                paddingLeft:20
                            }}>$400</Text>
                        </View>
                        <Text style={{
                            paddingHorizontal:10,
                            fontWeight:"bold",
                            color:"#b1e5d3",
                            paddingTop:3
                        }}>
                            RUSSIA
                        </Text>
                    </View>

                </ScrollView>          
    </View>
    )
}

export default Shop
