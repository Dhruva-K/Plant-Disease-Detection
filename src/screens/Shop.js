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
        <Text style={{fontSize:25, color:"#009688", marginTop:hp("5%"),paddingLeft:15, fontFamily:"Pangolin-Regular"}}>VineDoc Shop</Text>
        <View style={{width:"50%",marginTop:hp("5%"),marginLeft:hp("3%")}}>
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
                            height:230,
                            elevation:2,
                            backgroundColor:"#FFF",
                            marginLeft:20,
                            marginTop:20,
                            borderRadius:15,
                            marginBottom:10,
                            width:160,
                            padding:10,
                        }}
                    >
                         <Image
                            source={require('../images_shop/saw.jpg')}
                            style={{height:hp("20%"),width:wp("40%"),alignSelf:"center",zIndex:0 }}
                            
                        />
                        <View style={{
                            flexDirection:"row",
                            paddingTop:10,
                            paddingHorizontal:10,
                            alignItems: "center"
                        }}>
                            <Text style={{
                                fontWeight:"bold"
                            }}>SAW</Text>
                            <Text style={{
                                fontSize: 10,
                                fontWeight:"normal",
                                color:"#00a46c",
                                paddingLeft:40
                            }}>Rs.200</Text>
                        </View>
                        <Text style={{
                            paddingHorizontal:10,
                           
                            color:"#b1e5d3",
                            paddingTop:3
                        }}>
                            Available
                        </Text>
                    </View>

                    <View 
                        // onPress={()=>navigation.navigate("Detail")}
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
                            source={require('../images_shop/bins.jpg')}
                            style={{height:hp("19%"),width:wp("40%"),alignSelf:"center"}}
                            
                        />
                        <View style={{
                            flexDirection:"row",
                            paddingTop:10,
                            paddingHorizontal:0,
                            alignItems: "center"
                        }}>
                            <Text style={{
                                fontWeight:"bold",
                                fontSize:13
                            }}>GRAPE BINS</Text>
                            <Text style={{
                                 fontSize: 10,
                                fontWeight:"normal",
                                color:"#00a46c",
                                paddingLeft:7
                            }}>Rs.800</Text>
                        </View>
                        <Text style={{
                            paddingHorizontal:10,
                            
                            color:"#ff8a80",
                            paddingTop:3
                        }}>
                            Out of stock
                        </Text>
                    </View>

                    <View 
                        // onPress={()=>navigation.navigate("Detail")}
                        style={{
                            height:230,
                            elevation:2,
                            backgroundColor:"#FFF",
                            marginLeft:20,
                            marginTop:20,
                            borderRadius:15,
                            marginBottom:10,
                            width:170,
                            padding:10,
                           
                        }}
                    >
                         <Image
                            source={require('../images_shop/rock.jpg')}
                            style={{height:hp("20%"),width:wp("40%"),alignSelf:"center"}}
                            
                        />
                        <View style={{
                            flexDirection:"row",
                            paddingTop:5,
                            paddingHorizontal:0,
                            alignItems: "center"
                        }}>
                            <Text style={{
                                fontWeight:"bold",
                                fontSize: 12
                            }}>ROCK PICKER</Text>
                            <Text style={{
                                fontSize:9,
                                color:"#00a46c",
                                paddingLeft:10
                            }}>Rs.1000</Text>
                        </View>
                        <Text style={{
                            paddingHorizontal:5,
                            
                            color:"#ffee58",
                            paddingTop:3
                        }}>
                            Rent
                        </Text>
                    </View>

                    <View 
                        // onPress={()=>navigation.navigate("Detail")}
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
                            source={require('../images_shop/spreader.jpg')}
                            style={{height:hp("19%"),width:wp("40%"),alignSelf:"center"}}
                            
                        />
                        <View style={{
                            flexDirection:"row",
                            paddingTop:10,
                            
                            alignItems: "center"
                        }}>
                            <Text style={{
                                fontWeight:"bold",
                                fontSize: 13
                            }}>SPREADER</Text>
                            <Text style={{
                                fontSize:10,
                                color:"#00a46c",
                                paddingLeft:7
                            }}>Rs.2000</Text>
                        </View>
                        <Text style={{
                            paddingHorizontal:10,
                            
                            color:"#ffee58",
                            paddingTop:3
                        }}>
                            Rent
                        </Text>
                    </View>

                </ScrollView>  

 {/* FERTILIZERS */}

                <View style={{width:"50%",marginLeft:hp("3%"),marginTop:4}}>
                        <Text style={{
                            fontWeight:"bold",
                            fontSize:17,
                            color:"#585a61"
                        }}>Fertilizers</Text>
                        <View style={{
                            height:3,
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
                            height:200,
                            elevation:2,
                            backgroundColor:"#FFF",
                            marginLeft:20,
                            marginTop:20,
                            borderRadius:15,
                            marginBottom:10,
                            width:150,
                            padding:5
                        }}
                    >
                        <Image
                            source={require('../images_shop/x2.jpg')}
                            style={{height:hp("17%"),width:wp("25%"),alignSelf:"center",}}
                            
                        />
                        <View style={{
                            flexDirection:"column",
                            paddingTop:10,
                            paddingHorizontal:10,
                            alignItems:"flex-start"
                        }}>
                            <Text style={{
                                fontWeight:"bold",
                                fontSize: 12
                            }}>Sansar fertilizer</Text>
                            <Text style={{
                                fontSize: 10,
                                fontWeight:"normal",
                                color:"#00a46c",
                                paddingLeft:0
                            }}>Rs.190</Text>
                        </View>
                      
                    </TouchableOpacity>

                    <View 
                        // onPress={()=>navigation.navigate("Detail")}
                        style={{
                            height:200,
                            elevation:2,
                            backgroundColor:"#FFF",
                            marginLeft:20,
                            marginTop:20,
                            borderRadius:15,
                            marginBottom:10,
                            width:150,
                            padding:5,
                        }}
                    >
                         <Image
                            source={require('../images_shop/1.jpg')}
                            style={{height:hp("17%"),width:wp("20%"),alignSelf:"center",zIndex:0 }}
                            
                        />
                        <View style={{
                            flexDirection:"column",
                            paddingTop:10,
                            paddingHorizontal:10,
                            alignItems: "flex-start"
                        }}>
                            <Text style={{
                                fontWeight:"bold",
                                fontSize: 12
                            }}>Dr.Soil fertilizer</Text>
                            <Text style={{
                                fontSize: 10,
                                fontWeight:"normal",
                                color:"#00a46c",
                                
                            }}>Rs.400</Text>
                        </View>
                    
                    </View>

                    <View 
                        // onPress={()=>navigation.navigate("Detail")}
                        style={{
                            height:200,
                            elevation:2,
                            backgroundColor:"#FFF",
                            marginLeft:20,
                            marginTop:20,
                            borderRadius:15,
                            marginBottom:10,
                            width:150,
                            padding:5,
                        }}
                    >
                         <Image
                            source={require('../images_shop/x3.jpg')}
                            style={{height:hp("17%"),width:wp("20%"),alignSelf:"center",zIndex:0 }}
                            
                        />
                        <View style={{
                            flexDirection:"column",
                            paddingTop:10,
                            paddingHorizontal:10,
                            alignItems: "flex-start"
                        }}>
                            <Text style={{
                                fontWeight:"bold",
                                fontSize: 12
                            }}>13-0-45 KNO3</Text>
                            <Text style={{
                                fontSize: 10,
                                fontWeight:"normal",
                                color:"#00a46c",
                                
                            }}>Rs.500</Text>
                        </View>
                    
                    </View>


                  <View 
                        // onPress={()=>navigation.navigate("Detail")}
                        style={{
                            height:200,
                            elevation:2,
                            backgroundColor:"#FFF",
                            marginLeft:20,
                            marginTop:20,
                            borderRadius:15,
                            marginBottom:10,
                            width:150,
                            padding:5,
                        }}
                    >
                         <Image
                            source={require('../images_shop/x4.jpg')}
                            style={{height:hp("17%"),width:wp("20%"),alignSelf:"center",zIndex:0 }}
                            
                        />
                        <View style={{
                            flexDirection:"column",
                            paddingTop:10,
                            paddingHorizontal:10,
                            alignItems: "flex-start"
                        }}>
                            <Text style={{
                                fontWeight:"bold",
                                fontSize: 12
                            }}>Green Dews </Text>
                            <Text style={{
                                fontSize: 10,
                                fontWeight:"normal",
                                color:"#00a46c",
                                
                            }}>Rs.181</Text>
                        </View>
                    
                    </View>

                    <View 
                        // onPress={()=>navigation.navigate("Detail")}
                        style={{
                            height:200,
                            elevation:2,
                            backgroundColor:"#FFF",
                            marginLeft:20,
                            marginTop:20,
                            borderRadius:15,
                            marginBottom:10,
                            width:150,
                            padding:5,
                        }}
                    >
                         <Image
                            source={require('../images_shop/x5.jpg')}
                            style={{height:hp("17%"),width:wp("20%"),alignSelf:"center",zIndex:0 }}
                            
                        />
                        <View style={{
                            flexDirection:"column",
                            paddingTop:10,
                            paddingHorizontal:10,
                            alignItems: "flex-start"
                        }}>
                            <Text style={{
                                fontWeight:"bold",
                                fontSize: 12
                            }}>Root Care</Text>
                            <Text style={{
                                fontSize: 10,
                                fontWeight:"normal",
                                color:"#00a46c",
                                
                            }}>Rs.250</Text>
                        </View>
                    
                    </View>

                </ScrollView>         
    </View>
    )
}

export default Shop
