import React, { useState, useEffect } from 'react';
import { StyleSheet, View, TouchableOpacity, Text, ScrollView } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import CircularProgressBar from './CircularProgressBar.js';
import moment from 'moment';
import { vents } from './vents.json';

export default function Vents({navigation}) {

  const [ventData, setVentData] = useState([]);

  function mapVentData() {
    var now = moment()
    var mappedVents = vents.map((vent) => {
        var createdAt = moment(vent.createdAt, "DD/MM/YYYY HH:mm");
        var difference = now.diff(createdAt, "hours");
        vent.timePosted = difference;
        return vent;
    });
    var filteredVents = mappedVents.filter((vent) => vent.timePosted < 24 && vent.timePosted > 0);
    var sortedVents = filteredVents.sort((a, b) => a.timePosted > b.timePosted);
    setVentData(sortedVents);
  }

  useEffect(() => {
    mapVentData();
  }, [])

  const ViewContent = () => {
    if(ventData.length > 0) {
        return (
          <ScrollView style={{width: "100%"}} indicatorStyle="white">
            <View style={styles.ventContainer}>
              {ventData.map(vent => {
                return (
                  <View key={vent.id} style={styles.ventTile}>
                    <View style={styles.timer}> 
                      <CircularProgressBar 
                        text={vent.timePosted} 
                        percent={(vent.timePosted/24)*100}
                        radius={28} 
                        ringWidth={7} 
                        textFontSize={14}/>
                    </View>
                    <Text style={{fontSize: 20, marginBottom: 5}}>{vent.title}</Text>
                    <Text>{vent.content}</Text>
                  </View>
                )
              })}
            </View>
          </ScrollView>
        )
    } else {
      return (
        <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
          <Text style={{fontSize: 20}}>Oh.. There are currently no vents.</Text>
          <Text style={{fontSize: 18}}>Why don't you create your own vent?</Text>
        </View>
      )
    }
  }

  return (
    <View style={{ flex: 1 }}>
      <View style={{display: "flex", flexDirection: "row", width: "100%", borderBottomWidth: 1}}>
        <View style={{width: "60%", padding: 15}}>
          <Text style={{fontSize: 16}}>Here, you can see how other people are feeling.</Text>
        </View>
        <View style={{ width: "40%", alignItems: "center", justifyContent: "center" }}>
          <TouchableOpacity style={styles.createVent} onPress={() => navigation.navigate("AddVent")}>
            <View style={{display: "flex", flexDirection: "row"}}>
              <Text style={{fontSize: 20, color: "whitesmoke"}}> Create Vent </Text>
              <Ionicons name={"ios-add"} size={25} color={"whitesmoke"}/>
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <ViewContent />
    </View>
  )
}

const styles = StyleSheet.create({
  createVent: {
    padding: 5,
    backgroundColor: "#3498db",
    shadowOpacity: 0.5,
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
    top: -18,
    borderRadius: 50,
    backgroundColor: "whitesmoke", 
    shadowOpacity: 0.7,
    shadowOffset: {width: 3, height: 4}
  }
})
