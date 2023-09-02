import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, FlatList } from 'react-native';

export default function App() {
  const [num1, setNum1] = useState();
  const [num2, setNum2] = useState();
  const [result, setResult] = useState();
  const [text, setText] = useState();
  const [data, setData] = useState([]);
  
  const plusPressed = () => {
    setResult(Number(num1) + Number(num2));
    setText(num1 + "+" + num2 + "=" + (Number(num1) + Number(num2)));
    setData([...data, { key: (num1 + "+" + num2 + "=" + (Number(num1) + Number(num2))) }]);
    // seems the set functions execute all at the same time
    // so passing "result" or "text" variables will result in undefined/previous values
  }
  
  const minusPressed = () => {
    setResult(Number(num1) - Number(num2));
    setText(num1 + "-" + num2 + "=" + (Number(num1) - Number(num2)));
    setData([...data, { key: (num1 + "-" + num2 + "=" + (Number(num1) - Number(num2))) }]);
  }

  return (
    <View style={styles.container}>
      <Text>Result: {result}</Text>
      <TextInput style={styles.input} onChangeText={num1 => setNum1(num1)} value={num1} keyboardType="numeric" />
      <TextInput style={styles.input} onChangeText={num2 => setNum2(num2)} value={num2} keyboardType="numeric" />
      
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
      
      <Text>History</Text>

      <FlatList style={styles.list}
        data={data}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) =>
          <Text>{item.key}</Text>
        }
      />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginTop: 50,
  },
  input: {
    marginBottom: 5,
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


// Tehtävän 1 ratkaisu ilman tehtävän 3 lisäyksiä alla:

/* import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button, FlatList } from 'react-native';
import React, { useState } from 'react';

export default function App() {

  const [number1, setNumber1] = useState("");
  const [number2, setNumber2] = useState("");
  const [result, setResult] = useState("");

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
    marginTop: 50,
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
}); */
