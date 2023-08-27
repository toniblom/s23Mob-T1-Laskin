import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import React, { useState } from 'react';

export default function App() {

  const [number1, setNumber1] = useState();
  const [number2, setNumber2] = useState();
  const [result, setResult] = useState();

  const plusPressed = () => {
      setResult(Number(number1) + Number(number2))
    };

  const minusPressed = () => {
    setResult(Number(number1) - Number(number2))
    };

  return (
    <View style={styles.container}>
      <Text>Result: {result} </Text>

      <TextInput style={styles.input} onChangeText={number1 => setNumber1(number1)}
        value={number1} keyboardType="numeric"/>
      <TextInput style={styles.input} onChangeText={number2 => setNumber2(number2)}
        value={number2} keyboardType="numeric"/>
            
        <View style={styles.buttons}>
          <View style={styles.button}>
          </View>
          <View style={styles.button}>
            <Button onPress={plusPressed} title="+" />
          </View>
          <View style={styles.button}>
            <Button onPress={minusPressed} title="-" />
          </View>
          <View style={styles.button}>
          </View>
        </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    width: 200,
    borderColor: 'gray',
    borderWidth: 1
  },
  buttons: {
    //borderWidth: 1,
    flexDirection: "row",
    alignItems: "center",
    justyifyContent: "space-around",
    //marginTop: 20,
  },
  button: {
    flex: 1,
    //borderWidth: 1,
    margin: 20,
  }
});
