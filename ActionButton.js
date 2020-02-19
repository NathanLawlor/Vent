import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';

const styles = StyleSheet.create({ 
    actionButton: {
        width: "30%", 
        padding: 10, 
        marginTop: 20,
        backgroundColor: "#3498db",
        shadowOpacity: 0.7,
        shadowOffset: {width: 1, height: 2}
    },
    actionButtonText: {
        fontSize: 20, 
        textAlign: "center", 
        color: "whitesmoke"
    }
})

export default function ActionButton({ text, onPress }) {
    return (
        <TouchableOpacity 
            style={styles.actionButton}
            onPress={() => onPress()}
        >
            <Text style={styles.actionButtonText}>{text}</Text>
        </TouchableOpacity>
    )
}