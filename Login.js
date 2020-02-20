import React, {useState} from 'react';
import { StyleSheet, View, TextInput } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AsyncStorage from '@react-native-community/async-storage';

import ActionButton from './ActionButton.js';

const userInfo = {username: "a", password: "a"}

const styles = StyleSheet.create({ 
    formContainer: {
        width: "80%",
        alignItems: "center", 
        justifyContent: "center",
    },
    loginInput: {
        height: 40,
        padding: 5,
        fontSize: 20,
        borderBottomWidth: 3,
        borderColor: "#3498db",
    },
    buttonContainer: { 
        width: "100%", 
        flexDirection: "row", 
        justifyContent: "space-between" 
    }
})

const LoginInput = ({icon, value, placeholder, onChangeText, isSecure}) => {
    return (
        <View style={{width: "100%", display: "flex", flexDirection: "row", marginBottom: 25 }}>
            <View style={{ flex: 1, justifyContent: "flex-end"}}>
                <Ionicons 
                    name={icon} 
                    size={35} 
                    color={"#3498db"}
                />
            </View>
            <View style={{ flex: 7, justifyContent: "center" }}>
                <TextInput 
                    value={value}
                    placeholder={placeholder}
                    autoCapitalize="none"
                    style={styles.loginInput}
                    selectionColor={"#3498db"}
                    onChangeText={text => onChangeText(text)}
                    secureTextEntry={isSecure}
                />
            </View>
        </View>
    )
}

export default function Login ({navigation}) {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const login = async() => {
        if(userInfo.username == username && userInfo.password == password) {
            await AsyncStorage.setItem("isLoggedIn", "1");
            await AsyncStorage.setItem("username", username);
            navigation.navigate("Vents");
        } else {
            alert("Invalid Credentials");
        }
    }

    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: "center", backgroundColor: "lightblue" }}>
            <View style={styles.formContainer}>
                <View>
                    <LoginInput 
                        icon={"ios-person"}
                        value={username}
                        placeholder={"Username"}
                        onChangeText={setUsername}
                        isSecure={false}
                    />
                    <LoginInput 
                        icon={"ios-key"}
                        value={password}
                        placeholder={"Password"}
                        onChangeText={setPassword}
                        isSecure={true}
                    />
                </View>
                <View style={styles.buttonContainer}>
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
        </View>
    );
}