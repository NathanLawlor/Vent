import React from 'react';
import {StyleSheet, View, Text, TouchableHighlight} from 'react-native';

const styles = StyleSheet.create({
    tab: {
        backgroundColor: 'lightgrey',
        flex: 1,
        height: 75,
        justifyContent: 'center',
        borderTopColor: 'black',
        borderTopWidth: 2,
        borderBottomColor: 'black',
        borderBottomWidth: 2,
    },
    tabText: {
        fontWeight: 'bold',
        fontSize: 25,
        textAlign: 'center'
    }
});

function ClickableTab({viewName, text, changeCurrentView}) {
    return (
        <TouchableHighlight style={styles.tab} underlayColor={'grey'} onPress={() => changeCurrentView(viewName)}>
            <View>
                <Text style={styles.tabText}>{text}</Text>
            </View>
        </TouchableHighlight>
    )
}

const TabsBar = (props) => {
    return (
        <View>
            <View style={{flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'stretch'}}>
                <ClickableTab viewName={"profile"} text={"Profile"} changeCurrentView={props.changeCurrentView}/>
                <ClickableTab viewName={"posts"} text={"Posts"} changeCurrentView={props.changeCurrentView}/>
                <ClickableTab viewName={"support"} text={"Support"} changeCurrentView={props.changeCurrentView}/>
            </View>
        </View>
    )
}

export default TabsBar;