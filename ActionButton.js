import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';

const styles = StyleSheet.create({ 
    actionButton: {
        padding: 10, 
        marginTop: 20,
        backgroundColor: "#3498db",
        shadowOpacity: 0.7,
        shadowOffset: {width: 1, height: 2},
    },
    actionButtonText: {
        fontSize: 20, 
        textAlign: "center", 
        color: "whitesmoke",
        fontWeight: "bold"
    }
})

export default function ActionButton({ text, onPress, width }) {
    return (
        <TouchableOpacity 
            style={[styles.actionButton, {width: width}]}
            onPress={() => onPress()}
        >
            <Text style={styles.actionButtonText}>{text}</Text>
        </TouchableOpacity>
    )
}