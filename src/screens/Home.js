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

function Home(){

    // const [disease,setDisease]  = useState("Disease could not be identified");
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
              //classifyImage()
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
        const disease = await leafDetector.predict(imageTensor).data()
        console.log(disease)
    }
    catch(error){
        console.log(error)
    }
}


// UI
    return(
        <View style = {{
            backgroundColor: "#eeeeee",
            flex:1
        }}>
            <View style={{
                backgroundColor: "#00a46c",
                height: hp("25%"),
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
                            marginTop:hp("0.4%"),
                            fontSize:hp("4.8%"),
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
                    paddingVertical:hp("0.5%"),
                   paddingHorizontal:20,
                   marginHorizontal:20,
                   borderRadius:15,
                   marginTop:hp("4.8%"),
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
                height: hp("23%"),
                paddingHorizontal:30,
                marginHorizontal: 10,
                borderRadius:10,
                marginTop: 40,
               
            }}>
             
            <View style={{flexDirection: 'row',height: "18%"
            }}>
            <Image
                    source={require('../images/leaf.jpg')}
                    style={{height:hp("10%"),width:wp("15%"),
                    
                    }}></Image>
                   
           
           <Image
                    source={require('../images/nn.png')}
                    style={{height:hp("10%"),width:wp("17%"),
                   
                    
                    }}
                   />
            </View>

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
       
        width:"80%",
      elevation: 8,
      backgroundColor: "#009688",
      borderRadius: 25,
      paddingVertical: 7,
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

export default Home;