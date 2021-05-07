import React from 'react'
import { SafeAreaView, StyleSheet, StatusBar } from 'react-native'
import WebView from 'react-native-webview'

function Youtube() {
    return (
        <>
      <StatusBar barStyle='dark-content' />
      <SafeAreaView style={styles.flexContainer}>
        <WebView source={{ uri: 'https://www.youtube.com/results?search_query=grape+leaf+blight+treatment' }} />
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
