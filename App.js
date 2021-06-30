import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, Pressable, ScrollView} from 'react-native';
import { Audio } from 'expo-av';

export default function App() {
  const [soundLoad, setSound] = useState();
  const [soundPlay, setSoundPlay] = useState(false); 
  // const [value, setValue] = useState("Select")
  // const [menuV, setMenuV] = useState(true)

  // function dropdownMenu() {

  // }


  async function playCadence() {
    const { sound } = await Audio.Sound.createAsync(
      require("./assets/Cadence.aiff")
    );
    setSound(sound);
    console.log("playing Cadence")
    setSoundPlay(true);
    await sound.playAsync();
  }

  async function stopPlaying() {
    console.log("Stopping sound")
    setSoundPlay(false)
    soundLoad.unloadAsync();
  }


  return (
    <View style={styles.container}>
      <Text>Click on play Cadence</Text>
      <StatusBar style="auto" />
      {/* <View>

        <Pressable onPress={() => setMenuV(!menuV)}>
          <Text>{value}</Text>
        </Pressable>

        <ScrollView style={ {display:menuV} }>
          {Cadence}
        </ScrollView>
      </View> */}
      <Button title="Play Cadence" onPress={playCadence} />
      <Button title="Stop Cadence" onPress={stopPlaying} />


    {

        soundPlay ? <Text style={styles.playText}>Sound is playing</Text> : null  

    }
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
  playText: {
    textAlign: "center",
  },
});
