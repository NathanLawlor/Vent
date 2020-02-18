import React from 'react';
import { View, SafeAreaView, StatusBar } from 'react-native';

import AppNavigator from './AppNavigator.js';

const App = ({navigation}) => {
  return (
    <View>
      <StatusBar 
        barStyle="light-content"
      />
      <SafeAreaView style={{height: "5%", backgroundColor: "#3498db"}}/>
      <SafeAreaView style={{height: "95%", backgroundColor: "#3498db"}}>
        <AppNavigator/>
      </SafeAreaView>   
    </View>
  );
}

export default App;
  