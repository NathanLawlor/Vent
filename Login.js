import React, {useState} from 'react';
import { StyleSheet, View, Text, TouchableOpacity, TextInput } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

import ActionButton from './ActionButton.js';

const userInfo = {username: "", password: ""}

const styles = StyleSheet.create({ 
    loginContainer: {
        height: "100%", 
        display: "flex",
        alignItems: "center", 
        justifyContent: "center",
        backgroundColor: "lightblue", 
    },
    loginInput: {
        width: "80%",
        height: 40,
        padding: 5,
        margin: 10,
        backgroundColor: "whitesmoke",
        borderWidth: 1
    }
})

export default function Login ({navigation}) {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    function setUsernameHandler(value) {
        setUsername(value);
    }

    function setPasswordHandler(value) {
        setPassword(value);
    }

    const login = async() => {
        if(userInfo.username == username && userInfo.password == password) {
            await AsyncStorage.setItem("isLoggedIn", "1")
            navigation.navigate("Vents");
        } else {
            alert("Invalid Credentials");
        }
    }

    return (
      <View style={styles.loginContainer}>
        <TextInput 
            value={username}
            placeholder="username"
            autoCapitalize="none"
            style={styles.loginInput}
            onChangeText={value => setUsernameHandler(value)}
        />
        <TextInput
            value={password}
            placeholder="password"
            style={styles.loginInput}
            onChangeText={value => setPasswordHandler(value)}
            secureTextEntry
        />
        <View style={{display: "flex", flexDirection: "row", width: "80%", justifyContent: "space-between"}}>
            <ActionButton 
                text={"Login"} 
                onPress={() => login()}
            />
            <ActionButton 
                text={"Register"} 
                onPress={() => login()}
            />
        </View>
      </View>
    );
}