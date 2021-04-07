import React from 'react'
import {View,Text, Image, Button,StyleSheet} from 'react-native'
import {TextInput, ScrollView,TouchableOpacity } from 'react-native-gesture-handler'
import { LinearGradient } from 'expo-linear-gradient'
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';

TouchableOpacity.defaultProps = { activeOpacity: 0.7};

const styles = StyleSheet.create({
    screenContainer: {
      
        marginTop: 120,
       marginLeft: -30,
        width: "80%",
       justifyContent: "center",
       alignItems:'center',
       position:"absolute",
        padding:17,

    },
    screenContainer2: {
        marginTop: 120,
        marginLeft: 150,
        width: "80%",
       justifyContent: "center",
       alignItems:'center',
       position:"absolute",
        padding:17,
        
    },
    appButtonContainer: {
       
        width:"80%",
      elevation: 8,
      backgroundColor: "#009688",
      borderRadius: 25,
      paddingVertical: 10,
      paddingHorizontal: 30
    },

    appButtonText: {
      fontSize: 15,
      color: "#fff",
      fontWeight: "bold",
      alignSelf: "center",
      textTransform: "uppercase"
    }
  });

const AppButton = ({ onPress, title }) => (
    <TouchableOpacity onPress={onPress} style={styles.appButtonContainer}>
        <Text style={styles.appButtonText}>{title}</Text>
    </TouchableOpacity>
  );

const pickFromGallery = async ()=>{
    const {granted} =  await Permissions.askAsync(Permissions.CAMERA_ROLL)
    if(granted){
         let data =  await ImagePicker.launchImageLibraryAsync({
              mediaTypes:ImagePicker.MediaTypeOptions.Images,
              allowsEditing:true,
              aspect:[1,1],
              quality:0.5
          })
       
    }else{
       Alert.alert("you need to give up permission to work")
    }
 }
 const pickFromCamera = async ()=>{
    const {granted} =  await Permissions.askAsync(Permissions.CAMERA)
    if(granted){
         let data =  await ImagePicker.launchCameraAsync({
              mediaTypes:ImagePicker.MediaTypeOptions.Images,
              allowsEditing:true,
              aspect:[1,1],
              quality:0.5
          })
      
    }else{
       Alert.alert("you need to give up permission to work")
    }
 }

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
                            width:261
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
                height: "27%",
                paddingHorizontal:30,
                marginHorizontal: 10,
                borderRadius:10,
                marginTop: 40,
               
            }}>
               

                <View style={styles.screenContainer}>
                    <AppButton title="Camera" size="sm" backgroundColor="#007bff" onPress={() => pickFromCamera()}  />
                
                    </View>

                    <View style={styles.screenContainer2}>
                    <AppButton title="Gallery" size="sm" backgroundColor="#007bff" onPress={() => pickFromGallery()}  />
                    </View>
                
               
                
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