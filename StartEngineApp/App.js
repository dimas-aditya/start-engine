import React, { Component } from 'react';
import { View } from 'react-native';
import WebView from 'react-native-webview';

export default class App extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <WebView source={{ uri: 'http://skripsi.bangdims7.com/start-engine.html' }}
          style={{ marginTop: 20 }}
        />
      </View>
    )
  }
}