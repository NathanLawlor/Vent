import React, {useState} from 'react';
import { StyleSheet, View, Text, TouchableOpacity, TextInput } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { SafeAreaView } from 'react-navigation';

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
        width: 300,
        height: 40,
        padding: 5,
        margin: 10,
        backgroundColor: "whitesmoke",
        borderWidth: 1
    },
    loginButton: {
        width: "40%", 
        padding: 8, 
        marginTop: 20,
        backgroundColor: "#3498db",
        shadowOpacity: 0.7,
        shadowOffset: {width: 1, height: 2}
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
        <TouchableOpacity 
            style={styles.loginButton} 
            onPress={() => login()}
        >
            <Text style={{fontSize: 25, textAlign: "center", color: "whitesmoke"}}> Login </Text>
        </TouchableOpacity>
      </View>
    );
}