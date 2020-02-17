import React from 'react';
import { View, SafeAreaView, StatusBar } from 'react-native';

import AppNavigator from './AppNavigator.js';

const App = () => {
  return (
    <View>
      <StatusBar 
        barStyle="light-content"
      />
      <SafeAreaView style={{height: '100%', backgroundColor: "#3498db"}}>
        <AppNavigator/>
      </SafeAreaView>
    </View>
  );
}

export default App;
  