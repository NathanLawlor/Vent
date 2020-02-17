import React from 'react';
import { useState } from 'react';
import { View, Text, TextInput, ScrollView} from 'react-native';

export default function AddVent() {

  const [title, setTitle] = useState("");
  const [vent, setVent] = useState("");

  const textInputStyle = {
    fontSize: 14,
    padding: 5,
    backgroundColor: "white",
    borderWidth: 0.5,
    borderBottomWidth: 1,
    borderRadius: 5,
  }

  function VentHeading({ heading }) {
    return <Text style={{fontSize: 16}}>{heading}:</Text>
  }

  return (
    <View style={{padding: 20}}>
      <ScrollView>
        <View style={{padding: 10}}>
          <VentHeading heading={"Title"}/>
          <TextInput 
            value={title}
            placeholder={"Title"}
            style={textInputStyle}
            onChangeText={text => setTitle(text)}
            maxLength={35} 
            multiline
            editable
          />
        </View>

        <View style={{padding: 10}}>
          <VentHeading heading={"Vent"}/>  
          <TextInput 
            value={vent}
            placeholder={"Vent your feelings..."}
            style={textInputStyle}
            onChangeText={text => setVent(text)}
            maxLength={450} 
            multiline
            editable
          />
        </View>
      </ScrollView>
    </View>
  );
}