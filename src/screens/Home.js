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
import { image } from '@tensorflow/tfjs';
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
   } from 'react-native-responsive-screen'
   import { SafeAreaView, StatusBar } from 'react-native'
   import WebView from 'react-native-webview'

import { SliderBox } from "react-native-image-slider-box";
import data from "../Data/Data"
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading'
   


function Home({ navigation }){

    //const [disease ,setDisease]  = useState();
    const [image,setImage] = useState("")
    const [leafDetector, setleafDetector] = useState("")
  useEffect(()=>{
    async function loadModel(){
      const tfReady = await tf.ready();
      console.log(" Loading disease detection model")

      const jsonmodel = await require("../../assets/model/model.json");
      const modelweights = await require("../../assets/model/group1-shard.bin");
      const leafDetector = await tf.loadLayersModel(bundleResourceIO(jsonmodel,modelweights));
      
      setleafDetector(leafDetector)
      console.log("Model loaded");
    }
    loadModel()
}, []);


TouchableOpacity.defaultProps = { activeOpacity: 0.7};


const AppButton = ({ onPress, title }) => (
    <TouchableOpacity onPress={onPress} style={styles.appButtonContainer}>
        <Text style={styles.appButtonText}>{title}</Text>
    </TouchableOpacity>
  );

//choosing image from gallery
const pickFromGallery = async ()=>{
    const {granted} =  await Permissions.askAsync(Permissions.CAMERA_ROLL)
    if(granted){
        try{
        let data =  await ImagePicker.launchImageLibraryAsync({
              mediaTypes:ImagePicker.MediaTypeOptions.Images,
              allowsEditing:true,
              aspect:[1,1],
              quality:0.5
          })

          if(!data.cancelled){
            const source = {uri : data.uri}
            setImage(source)
            classifyImage()
        }

    else{
       Alert.alert("you need to give up permission to work")
    }
}
    catch(error){
        console.log(error)
    }
 }
}

 // clicking image from camera
 const pickFromCamera = async ()=>{
    const {granted} =  await Permissions.askAsync(Permissions.CAMERA)
    if(granted){
         let data =  await ImagePicker.launchCameraAsync({
              mediaTypes:ImagePicker.MediaTypeOptions.Images,
              allowsEditing:true,
              aspect:[1,1],
              quality:0.5
          })

          if(!data.cancelled){
              const source = {uri : data.uri}
              setImage(source)
              classifyImage()
          }
      
    }else{
       Alert.alert("you need to give up permission to work")
    }
 }
 
 //convert image to tensor
imageToTensor = (rawImage) =>{
    try {
      const TO_UINT8ARRAY = true;
      const { width, height, data } = jpeg.decode(rawImage, TO_UINT8ARRAY);
      console.log("decoded")
      //Drop the alpha channel info for mobilenet
      const buffer = new Uint8Array(width * height * 3);
      let offset = 0; // offset into original data
      for (let i = 0; i < buffer.length; i += 3) {
        buffer[i] = data[offset];
        buffer[i + 1] = data[offset + 1];
        buffer[i + 2] = data[offset + 2];
        offset += 4;
      }
      console.log("buffer ready")
      return tf.tensor3d(buffer, [height, width, 3]);
          
        
      } catch (error) {
        console.log(error)
        alert('Image Upload failed')
      }
}

//classify image
classifyImage = async()=>{
    try{
        const imageAssetPath = Image.resolveAssetSource(image)
        const response = await await FileSystem.readAsStringAsync(imageAssetPath.uri,  {
            encoding: FileSystem.EncodingType.Base64,
          })
        const rawImage = tf.util.encodeString(response, 'base64').buffer;
        const raw = new Uint8Array(rawImage)
        const imageTensor = decodeJpeg(raw).resizeBilinear([224,224]).reshape([1,224,224,3]).div(tf.scalar(255))
        const result = await leafDetector.predict(imageTensor).data()
        let i = result.indexOf(Math.max(...result))
        if(i == 0 ){
            navigation.navigate("Disease",{ dis: "Black Rot",info: data[2]})
        }
        else if(i== 1){
            navigation.navigate("Disease",{ dis: "Black Measles", info: data[0]})
        }
        else if(i== 2){
            navigation.navigate("Disease",{ dis: "Leaf Blight", info: data[1]})
        }
        else{
            navigation.navigate("Disease",{ dis: "Healthy",info: data[3]})
        }
       
       
    }
    catch(error){
        console.log(error)
    }
}


const fetchFonts = () => {
    return Font.loadAsync({
    'Pangolin-Regular': require('../../assets/fonts/Pangolin-Regular.ttf'),
    });
    };
const [fontloaded,setfontloaded]=useState(false);

if(!fontloaded){
    return(
      <AppLoading
      startAsync={fetchFonts}
      onFinish={()=>{setfontloaded(true)}}
      onError={console.warn}/>
    )
  }

const imageslide = [
    require('../images/Untitledfm13.jpg'),
    require('../images/Untitledfm15.jpg'),
   
]

// UI
    return(
        <ScrollView style = {{
            backgroundColor: "#eeeeee",
            flex:1
           
        }}>
            <View style={{
                backgroundColor: "#00a46c",
                height: hp("28%"),
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
                            marginTop:hp("2.5%"),
                            fontSize:hp("4%"),
                            color:"#FFF",
                            fontFamily:"Pangolin-Regular"
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
                    paddingVertical:hp("0.5%"),
                   paddingHorizontal:20,
                   marginHorizontal:20,
                   borderRadius:15,
                   marginTop:hp("3.5%"),
                   flexDirection:"row",
                   alignItems:"center"
               }}>
                   <TextInput
                        placeholder="Search"
                        placeholderTextColor="#b1e5d3"
                        keyboardType="numeric"
                        style={{
                            fontWeight:"bold",
                            fontSize:16,
                            width:261
                        }}
                   />
                   <Image
                    source={require('../images/3.png')}
                    style={{height:20,width:20}}
                   />
               </View>
            </LinearGradient>
            
        
        <View style={{ height: hp("34%"), backgroundColor:"#eeeeee", marginTop: hp("2%")}}>
        <View>
                <Text style= {{ marginLeft:12,fontSize:15, fontFamily:"Pangolin-Regular", color:"#009688"}}>Heal your crop!</Text>
            </View>
            <View style={{
                backgroundColor:"#FFF",
                flex:1,
                borderRadius: 10,
                marginBottom:0,
                margin:7
                
               
            }}>

            <View style={{flexDirection:"column",height:"100%"}}>

                <View style={{flex:1.8, flexDirection:"row",justifyContent:"space-evenly",marginTop:10}}>
                    <View style = {{flex:1, alignItems:'center', flexDirection: 'column'}}>
                        <Image
                        source={require('../images/Untitleddis3.png')}
                        style={{height:"45%",width:"54%", marginTop:10
                        
                        }}></Image>
                        <Text style={{color: "#0A0637",textAlign:'center', fontSize:11,margin:9}}>Click or select a photo</Text>
                    </View>
                    <View style = {{flex:1,  alignItems:'center', flexDirection: 'column'}}>
                        <Image
                        source={require('../images/neural1.jpg')}
                        style={{height:"40%",width:"48%", marginTop:10
                        
                        }}></Image>
                        <Text style={{color: "#0A0637",textAlign:'center',fontSize:11,margin:9,marginTop:19}}>Disease would be detected</Text>
                    </View>
                    <View style = {{flex:1,alignItems:'center', flexDirection: 'column'}}>
                        <Image
                            source={require('../images/Untitleddiag.jpg')}
                            style={{height:"50%",width:"50%", marginTop:10
                            
                            }}></Image>
                            <Text style={{color: "#0A0637",textAlign:'center',fontSize:11,margin:9,marginTop:10}}>See diagnosis</Text>
                    </View>

                </View>

                <View style={{flex : 0.5, flexDirection: "row", justifyContent:"space-evenly",marginBottom:10}}>
                    <AppButton title="Camera" size="sm" backgroundColor="#007bff" onPress={() => pickFromCamera()}  />
                    <AppButton title="Gallery" size="sm" backgroundColor="#007bff" onPress={() => pickFromGallery()}  />
                </View>

            </View>

            
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

           <View style={{
               height: hp("26%") ,marginTop: 17
           }}
           
           >
           <View style={{display:"flex",flexDirection:'row', alignItems:"center"}}>
               <Text style={{marginLeft:12,fontSize:15, fontFamily:"Pangolin-Regular", color:"#009688",marginBottom:5}}>
                   Tip of the Day!
               </Text>
               <Image
                    source={require('../images/lightbulb.png')}
                    style={{height:25,width:25,marginBottom:5}}
                   />
           </View>
                <SliderBox
                images={imageslide}
                dotColor="#356B51"
                inactiveDotColor="#FFF"
                paginationBoxVerticalPadding={10}
                
                autoplay
                circleLoop
                ImageComponentStyle={{borderRadius: 10, width: '95%', marginTop: 10, height: 150,marginBottom:70}}
/>
<LinearGradient
            colors={["rgba(170,180,180,0.2)", "transparent"]}
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
        
        {/* <View style={{marginTop:50}}>
                    <AppButton title="Youtube" size="sm" backgroundColor="#007bff" onPress={() => {navigation.navigate("Disease",{dis: "Hello"})}}  />
                
                    </View>*/}
        </ScrollView> 

    )
    // return (
    //     <>
    //       <StatusBar barStyle='dark-content' />
    //       <SafeAreaView style={styles.flexContainer}>
    //         <WebView source={{ uri: 'https://www.youtube.com/results?search_query=grape+leaf+blight+treatment' }} />
    //       </SafeAreaView>
    //     </>
    //   )
}



const styles = StyleSheet.create({
    screenContainer: {
      
        marginTop: hp("12%"),
       marginLeft: -30,
        width: "80%",
       justifyContent: "center",
       alignItems:'center',
       position:"absolute",
        padding:15,

    },
    screenContainer2: {
        marginTop: hp("12%"),
        marginLeft: wp("37%"),
        width: "80%",
       justifyContent: "center",
       alignItems:'center',
       position:"absolute",
        padding:15,
        
    },

    view1: {
        marginLeft : 150
        
    },
    appButtonContainer: {
       
        width:"100%",
      elevation: 8,
      backgroundColor: "#009688",
      borderRadius: 25,
      padding:7,
      paddingLeft:30,
      paddingRight:30
      
    },

    appButtonText: {
      fontSize: 13,
      color: "#fff",
      fontWeight: "bold",
      alignSelf: "center",
      textTransform: "uppercase"
    },
    flexContainer: {
        flex: 1
      }
  });

export default Home;