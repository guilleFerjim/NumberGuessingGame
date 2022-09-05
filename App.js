import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

const randomNumber = Math.floor(Math.random() * 101) ;

export default function App() {

  const [value1, setValue1] = useState(0);
  const [text, setText] = useState('Guess a number between 1-100');
  const [counter, setCounter] = useState(1);

  const handler = () => {
    if (value1 < randomNumber){
      setText('Your guess ' + value1 + ' is too low');
      setCounter(counter + 1)
    }
    else if (value1 > randomNumber){
      setText('Your guess ' + value1 + ' is too high');
      setCounter(counter + 1)
    }
    else if (value1 == randomNumber){
      alert('You guessed the number in ' + counter +  ' times');
    }
  } 

  return (
    <View style={styles.container}>
      <Text>{text}</Text>
      <Text>{randomNumber}</Text>
      <TextInput keyboardType='numeric' style={styles.input} onChangeText={value1 => setValue1(parseInt(value1))} value={value1}/>
      <Button title='MAKE GUESS' onPress={handler}/>
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
    height: 40,
    width: 100,
    margin: 7,
    borderWidth: 1,
    padding: 5,
  },
});
