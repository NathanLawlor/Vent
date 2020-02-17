import React from "react";
import { View, ActivityIndicator } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

class AuthLoadingScreen extends React.Component {
    constructor(props) {
        super(props);
        this.loadData();
    }

    loadData = async() => {
        const isLoggedIn = AsyncStorage.getItem("isLoggedIn");
        this.props.navigation.navigate(isLoggedIn != "1" ? "Auth" : "App");
    }

    render() {
        return (
            <View>
                <ActivityIndicator/>
            </View>
        )
    }
}

export default AuthLoadingScreen;