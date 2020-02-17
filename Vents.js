import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text, ScrollView } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { vents } from './vents.json'

import CircularProgressBar from './CircularProgressBar.js';

const styles = StyleSheet.create({
  createVent: {
    padding: 5,
    backgroundColor: "#3498db",
    alignSelf: "flex-end",
    margin: 15,
    shadowOpacity: 0.7,
    shadowOffset: {width: 1, height: 2}
  },
  ventContainer: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    paddingTop: 15
  },
  ventTile: {
    position: "relative",
    margin: 15,
    width: "85%",
    padding: 15,
    backgroundColor: "whitesmoke", 
    borderWidth: 2, 
    borderRadius: 10,
    borderColor: "black",
    shadowOpacity: 0.4,
    shadowOffset: {width: 2, height: 2}
  },
  timer: {
    position: "absolute", 
    right: -10, 
    top: -20,
    borderRadius: 50,
    backgroundColor: "whitesmoke", 
    shadowOpacity: 0.7,
    shadowOffset: {width: 3, height: 4}}
})

export default function Vents({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center'}}>
      <View style={{display: "flex", flexDirection: "row", width: "100%", borderBottomWidth: 1}}>
        <View style={{width: "60%", padding: 15}}>
          <Text style={{fontSize: 16}}>Here, you can see how other people are feeling.</Text>
        </View>
        <View>
          <TouchableOpacity style={styles.createVent} onPress={() => navigation.navigate("AddVent")}>
            <View style={{display: "flex", flexDirection: "row"}}>
              <Text style={{fontSize: 20, color: "whitesmoke"}}> Create Vent </Text>
              <Ionicons name={"ios-add"} size={25} color={"whitesmoke"}/>
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView style={{width: "100%"}} indicatorStyle="white">
        <View style={styles.ventContainer}>
          {vents.map(vent => {
            return (
              <View key={vent.id} style={styles.ventTile}>
                <View style={styles.timer}> 
                  <CircularProgressBar 
                    timeLeft={vent.timeLeft} 
                    percent={(vent.timeLeft/24)*100} 
                    baseDegrees={0} 
                    radius={28} 
                    ringWidth={7} 
                    textFontSize={16}/>
                </View>
                <Text style={{fontSize: 20, marginBottom: 5}}>{vent.title}</Text>
                <Text>{vent.content}</Text>
              </View>
            )
          })}
        </View>
      </ScrollView>
    </View>
  )
}
