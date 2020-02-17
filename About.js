import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

const styles = StyleSheet.create({ 
  logoutButton: {
      width: "40%", 
      padding: 8, 
      marginTop: 20,
      backgroundColor: "#3498db",
      shadowOpacity: 0.7,
      shadowOffset: {width: 1, height: 2}
  }
})

export default function About({navigation}) {

    const logout = async() => {
      await AsyncStorage.setItem("isLoggedIn", "0")
      navigation.navigate("Auth");
    }

    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>About</Text>
        <TouchableOpacity 
            style={styles.logoutButton} 
            onPress={() => logout()}
        >
            <Text style={{fontSize: 25, textAlign: "center", color: "whitesmoke"}}> Logout </Text>
        </TouchableOpacity>
      </View>
    );

}