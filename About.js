import React from 'react';
import { View, Text } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

import ActionButton from './ActionButton.js';

export default function About({navigation}) {

    const logout = async() => {
      await AsyncStorage.setItem("isLoggedIn", "0");
      navigation.navigate("Auth");
    }

    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>About</Text>
        <ActionButton 
            text={"Logout"} 
            onPress={() => logout()}
        />
      </View>
    );

}