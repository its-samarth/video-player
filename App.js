import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import VideoPlayer from 'react-native-media-console';
import { AppLoading } from 'expo';
import { Constants } from 'expo';
const App = () => {
  return (
    <View style={{ flex: 1 }}>
      <View>
        <VideoPlayer source={{ uri: 'https://vjs.zencdn.net/v/oceans.mp4' }} />
      </View>
    </View>
  );
};

export default App;
