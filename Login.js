import React, {useState} from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

import ActionButton from './ActionButton.js';
import LoginInput from './LoginInput.js';

const userInfo = {username: "admin", password: ""}

export default function Login ({navigation}) {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [invalidCredentials, setInvalidCredentials] = useState(false)

    const login = async() => {
        if(userInfo.username == username && userInfo.password == password) {
            setInvalidCredentials(false)
            await AsyncStorage.setItem("isLoggedIn", "1")
            await AsyncStorage.setItem("username", username)
            navigation.navigate("Vents")
        } else {
            setInvalidCredentials(true)
            alert("Invalid Credentials")
        }
    }

    const register = () => {
        navigation.navigate("Register")
    }

    return (
        <View style={{flex: 1, alignItems: 'center', backgroundColor: "#3498db"}}>
            <View style={{height: "20%", width: "100%", alignItems: 'center', justifyContent: "center"}}>
                <Text style={{ textAlign: "center", fontSize: 100}}>V</Text>
            </View>
            <View style={styles.formContainer}>
                <View>
                    <LoginInput 
                        icon={"ios-person"}
                        value={username}
                        placeholder={"Username"}
                        onChangeText={setUsername}
                        isSecure={false}
                        invalid={invalidCredentials}
                    />
                    <LoginInput 
                        icon={"ios-key"}
                        value={password}
                        placeholder={"Password"}
                        onChangeText={setPassword}
                        isSecure={true}
                        invalid={invalidCredentials}
                    />
                </View>
                <View style={styles.buttonContainer}>
                    <ActionButton 
                        text={"Login"} 
                        onPress={() => login()}
                        width={"100%"}
                    />
                </View>
            </View>

            <View style={{width: "100%", flex: 1, padding: 10}}> 
                <Button
                    onPress={() => register()}
                    title="Register an account here"
                    color="white"
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({ 
    formContainer: {
        width: "90%",
        marginTop: 25,
        alignItems: "center", 
        justifyContent: "center",
        backgroundColor: "lightblue",
        padding: 20,
        borderWidth: 1,
    },
    buttonContainer: { 
        width: "100%", 
        flexDirection: "row", 
        justifyContent: "center",
    }
})