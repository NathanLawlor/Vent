import React, { useState, useEffect } from 'react';
import { StyleSheet, View, TouchableOpacity, Text, ScrollView } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import CircularProgressBar from './CircularProgressBar.js';
import moment from 'moment';
import { db } from './FirebaseConfig';

let ventsRef = db.ref('/vents');

export default function Vents({navigation}) {

  const [ventsData, setVentsData] = useState([]);

  useEffect(() => {
    fetchVentsData();
  }, [])

  function fetchVentsData() {
    ventsRef.on('value', snapshot => {
      var data = snapshot.val();
      var vents = Object.values(data);
      mapVentData(vents)
    });
  }

  function mapVentData(vents) {
    var now = moment()
    var mappedVents = vents.map((vent) => {
        var createdAt = moment(vent.createdAt, "DD/MM/YYYY HH:mm");
        var timeDiffHours = now.diff(createdAt, "hours");
        vent.timeDiff = timeDiffHours;

        if (timeDiffHours == 0) {
          var timeDiffMins = now.diff(createdAt, "minutes")
          vent.timerText = timeDiffMins + (timeDiffMins == 1 ? " min ago" : " mins ago");
        } else {
          vent.timerText = timeDiffHours + (timeDiffHours == 1 ? " hour ago" : " hours ago")
        }
        return vent;
    });
    var filteredVents = mappedVents.filter((vent) => vent.timeDiff < 24 && vent.timeDiff >= 0);
    var sortedVents = filteredVents.sort((a, b) => a.timeDiff > b.timeDiff);
    setVentsData(sortedVents);
  }

  const ViewContent = () => {
    if(ventsData.length > 0) {
        return (
          <ScrollView style={{width: "100%"}} indicatorStyle="white">
            <View style={styles.ventContainer}>
              {ventsData.map(vent => {
                return (
                  <View key={vent.title+vent.createdAt} style={styles.ventTile}>
                    <View style={styles.timer}> 
                      <CircularProgressBar 
                        text={vent.timerText} 
                        percent={(vent.timeDiff/24)*100}
                        radius={32} 
                        ringWidth={7} 
                        textFontSize={12}/>
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
