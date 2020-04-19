import React from 'react';
import { StyleSheet, View, TextInput } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const styles = StyleSheet.create({ 
    loginInput: {
        height: 40,
        padding: 5,
        fontSize: 20,
        borderBottomWidth: 3,
    },
})

export default function LoginInput({icon, value, placeholder, onChangeText, onBlur, onFocus, isSecure, invalid}) {
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
                    selectionColor={invalid ? "red" : "#3498db"}
                    onChangeText={text => onChangeText(text)}
                    onBlur={onBlur}
                    onFocus={onFocus}
                    autoCorrect={false}
                    secureTextEntry={isSecure}
                    borderColor={invalid ? "red" : "#3498db"}
                />
            </View>
        </View>
    )
}