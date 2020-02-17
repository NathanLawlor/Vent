import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import Vents from './Vents.js';
import AddVent from './AddVent.js';
import About from './About.js';
import Profile from './Profile.js'
import Login from './Login.js';
import AuthLoadingScreen from './AuthLoadingScreen.js';

import { Text } from 'react-native';

const VentViews = {
    Vents: { screen: Vents },
    AddVent: { screen: AddVent},
}

const stackNavigationConfig = {
    defaultNavigationOptions: () => ({
        headerStyle: {
            backgroundColor: "#3498db",
            borderBottomWidth: 1,
            borderBottomColor: "black",
        },
        headerTintColor: "whitesmoke",
        headerTitleStyle: {
            fontSize: 20,
            fontWeight: 'bold',
        },
        /*headerRight: () => (<Text>Drawer </Text>)*/
    }) 
}

const VentsStack = createStackNavigator(VentViews, stackNavigationConfig); 
const AboutStack = createStackNavigator({About}, stackNavigationConfig); 
const AuthStack = createStackNavigator({Login}, stackNavigationConfig);

const AppStack = createBottomTabNavigator(
    {
        Vents: { screen: VentsStack },
        About: { screen: AboutStack }
    },
    {
        defaultNavigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ tintColor }) => {
                var { routeName } = navigation.state;
                var iconName;
                if(routeName == "Vents") {
                    iconName="ios-chatboxes";
                } else if (routeName == "About") {
                    iconName="ios-book";
                }
                return <Ionicons name={iconName} size={30} color={tintColor} />;
            }
        }),
        tabBarOptions: {
            activeTintColor: 'whitesmoke',
            activeBackgroundColor: "#3498db",
            inactiveTintColor: 'grey',
            inactiveBackgroundColor: "#dfe4ea",
            safeAreaInset: "always",
            labelStyle: {
                fontSize: 24,
            },
            style: {
                height: 60,
                borderTopWidth: 1,
                borderTopColor: "black"
            }
        }
    }
);

export default createAppContainer(createSwitchNavigator(
    {
        AuthLoading: AuthLoadingScreen,
        App: AppStack,
        Auth: AuthStack
    }, 
    {
        initialRouteName: "AuthLoading"
    }
));