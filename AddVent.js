import React from 'react';
import { useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, ScrollView} from 'react-native';
import { db } from './FirebaseConfig';
import moment from 'moment'

const FormInput = ({ heading, placeholder, value, maxLength, onChangeText }) => {
  return (
    <View style={styles.inputBox}>
      <View style={{padding: 8, backgroundColor: "#3498db"}}>
        <Text style={{fontSize: 20, fontWeight: "bold", color: "whitesmoke"}}>{heading}</Text>
      </View>
      <TextInput 
        value={value}
        placeholder={placeholder}
        style={styles.textInput}
        onChangeText={(text) => onChangeText(text)}
        maxLength={maxLength}
        selectionColor={"#3498db"}
        autoCapitalize={"sentences"}
        multiline
        editable
      />
    </View>
  )
}

export default function AddVent({navigation}) {

  const [title, setTitle] = useState("");
  const [feeling, setFeeling] = useState(""); 
  const [content, setContent] = useState("");  
  
  const submitVent = () => {
    const createdAt = moment().format("DD/MM/YYYY HH:mm")
    db.ref('/vents').push({
      title: title,
      content: content,
      createdAt: createdAt
    });
    alert("Vent Submitted :)")
    navigation.navigate("Vents")
  }

  return (
    <View style={{ paddingLeft: 10, paddingRight: 10}}>
      <ScrollView style={{height: "100%"}} indicatorStyle="white">
        <View style={{padding: 10}}>
          <FormInput 
            heading={"Title"}
            placeholder={"....."}
            value={title}
            onChangeText={setTitle}
            maxLength={60}
          />

          <FormInput 
            heading={"Content"}
            placeholder={"Talk about how you feel?"}
            value={content}
            onChangeText={setContent}
            maxLength={400}
          /> 

          <FormInput 
            heading={"Emotion"}
            placeholder={"Summarise your emotion. E.g. Upset"}
            value={feeling}
            onChangeText={setFeeling}
            maxLength={25}
          />

          <TouchableOpacity style={styles.submitVent} onPress={() => submitVent()}>
            <View>
              <Text style={{fontSize: 25, color: "whitesmoke"}}> Vent </Text>
            </View>
          </TouchableOpacity>     
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  inputBox: {
    marginTop: 20,
    borderWidth: 2,
    borderColor: "grey",
  },
  textInput: {
    fontSize: 20,
    padding: 8,
    backgroundColor: "white",
    borderTopWidth: 1,
    borderTopColor: "grey",
  },
  submitVent: {
    width: "30%",
    marginTop: 25,
    padding: 5,
    borderWidth: 1,
    borderColor: "grey",
    backgroundColor: "#3498db",
    alignSelf: "flex-start",
    alignItems: "center",
    shadowOpacity: 0.5,
    shadowOffset: {width: 1, height: 2}
  }
})