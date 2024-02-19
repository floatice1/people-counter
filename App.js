import { Button, StyleSheet, Text, View, ImageBackground } from 'react-native';
import { useState } from 'react';

export default function App() {

  const [counter, setCounter] = useState(0)
  const [counterLine, setCounterLine] = useState('')

  function counting() {
    setCounter(counter + 1)
  }

  function save() {
    setCounterLine(counterLine + counter + " - ")
    setCounter(0)
  }

  return (
    <View style={styles.container}>
      <ImageBackground source={require("./bg.jpg")} style={styles.background}>
        <Text style={styles.h1}>People counted:</Text>
        <Text style={styles.h2}>{counter}</Text>
        <View style={styles.button1}>
          <Button color="white" title="INCREASE" onPress={counting} />
        </View>
        <View style={styles.button2}>
          <Button color="white" title="SAVE" onPress={save} />
        </View>
        <Text style={styles.counterLine}>People saved: {counterLine}</Text>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
    alignItems: 'center'
  },
  h1: {
    marginTop: 150,
    fontSize: 80,
    flexWrap: 'wrap',
    textAlign: 'center'
  },
  h2: {
    fontSize: 80,
    flexWrap: 'wrap',
    textAlign: 'center'
  },
  button1: {
    width: 200,
    height: 60,
    borderRadius: 20,
    backgroundColor: 'darkred',
    borderColor: 'black',
    borderWidth: 2,
    justifyContent: 'center'
  },
  button2: {
    width: 200,
    height: 60,
    borderRadius: 20,
    backgroundColor: 'darkgreen',
    borderColor: 'black',
    borderWidth: 2,
    justifyContent: 'center',
    marginTop: 10
  },
  counterLine: {
    fontSize: 24,
    marginTop: 10
  }
});
