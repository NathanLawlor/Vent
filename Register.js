import React, {useState, useEffect} from 'react';
import { StyleSheet, View, Text, TextInput, Button } from 'react-native';

import ActionButton from './ActionButton.js';
import LoginInput from './LoginInput.js';

export default function Login ({navigation}) {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmedPassword, setConfirmedPassword] = useState("");
    const [confirmIsValid, setConfirmIsValid] = useState(true)

    const login = () => {
        navigation.navigate("Login")
    }

    const register = () => {
        if(username.length < 4) {
            alert("Your Username must have at least 4 characters")
        } else if(!passwordsMatch()) {
            alert("You must confirm your password to register")
        } else {
            alert("You have now registered an account :)")
            login()
        }  
    }

    const passwordOnFocus = () => {
        if(confirmedPassword == "") {
            setConfirmIsValid(true)
        }
    }

    const confirmedPasswordOnBlur = () => {
        if(!confirmIsValid) {
            resetConfirmedPassword()
        }
    }

    useEffect(() => {
        setConfirmIsValid(passwordsMatch())
    }, [confirmedPassword])

    useEffect(() => {
        if(confirmedPassword != "") { 
            resetConfirmedPassword()
        }
    }, [password])

    function passwordsMatch() {
        return confirmedPassword == password
    }

    function resetConfirmedPassword() {
        setConfirmedPassword("")
        setConfirmIsValid(true)
    }

    return (
        <View style={{flex: 1, alignItems: 'center', backgroundColor: "#3498db"}}>
            <View style={{height: "16%", width: "100%", alignItems: 'center', justifyContent: "center" }}>
                <Text style={{ textAlign: "center", fontSize: 100 }}>V</Text>
            </View>
            <View style={styles.formContainer}>
                <View>
                    <LoginInput 
                        icon={"ios-person"}
                        value={username}
                        placeholder={"Username"}
                        onChangeText={setUsername}
                        isSecure={false}
                        invalid={false}
                    />
                    <LoginInput 
                        icon={"ios-key"}
                        value={password}
                        placeholder={"Password"}
                        onChangeText={setPassword}
                        onFocus={passwordOnFocus}
                        isSecure={true}
                        invalid={!confirmIsValid}
                    />
                    <LoginInput 
                        icon={""}
                        value={confirmedPassword}
                        placeholder={"Confirm Password"}
                        onChangeText={setConfirmedPassword}
                        onBlur={confirmedPasswordOnBlur}
                        isSecure={true}
                        invalid={!confirmIsValid}
                    />
                </View>
                <View style={styles.buttonContainer}>
                    <ActionButton 
                        text={"Register"} 
                        onPress={() => register()}
                        width={"100%"}
                    />
                </View>
            </View>

            <View style={{width: "100%", flex: 1, padding: 10}}> 
                <Button
                    onPress={() => login()}
                    title="I already have an account"
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