import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

import ActionButton from './ActionButton.js';

export default function Profile ({navigation}) {

    const [username, setUsername] = useState("");

    useEffect(() => {
      fetchData();
    });

    async function fetchData() {
      var _username = await AsyncStorage.getItem("username");
      setUsername(_username);
    }
    
    const logout = async() => {
      await AsyncStorage.removeItem("isLoggedIn");
      navigation.navigate("Auth");
    }

    return (
      <View style={{height: "100%", alignItems: "center"}}>
        <Text style={{fontSize: 20, alignSelf: "flex-start", padding: 10, borderWidth: 1}}>{username}</Text>

        <View style={{width: "100%", alignItems: "center", justifyContent: "center", borderWidth: 1}}>
          <Text style={{fontSize: 20, alignSelf: "flex-start", padding: 10}}>My Vents:</Text>
        </View>

        <ActionButton 
            text={"Logout"} 
            onPress={() => logout()}
        />
      </View>
    );
}