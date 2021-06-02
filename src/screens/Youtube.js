import React from 'react'
import { SafeAreaView, StyleSheet, StatusBar } from 'react-native'
import WebView from 'react-native-webview'

function Youtube({route}) {
  const {dis} = route.params;


  function video(){
    if(dis == "Black Rot"){
      return(
        <WebView source={{ uri: 'https://www.youtube.com/results?search_query=black+rot+grapes+treatment' }} />
      )
    }
    else if(dis == "Black Measles"){
      return(
      <WebView source={{ uri: 'https://www.youtube.com/results?search_query=esca+treatment' }} />
      )
    }
    else if(dis == "Leaf Blight"){
      return(
      <WebView source={{ uri: 'https://www.youtube.com/results?search_query=leaf+blight+treatment+grapes' }} />
      )
    }
      
  }
  
    return (
        <>
      <StatusBar barStyle='dark-content' />
      <SafeAreaView style={styles.flexContainer}>
        {
           video()
        }
        
      </SafeAreaView>
    </>
    )
    
}
const styles = StyleSheet.create({
    flexContainer: {
      flex: 1
    }
  })

export default Youtube
