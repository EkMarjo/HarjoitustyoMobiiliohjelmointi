import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text } from 'react-native';

export default function Kirjaudu({navigation}){
    const [kayttaja,setKayttaja] = useState('')
    const [salasana,setSalasana] = useState('')

    const kirjaudu = () => {
        if (kayttaja == 'user' && salasana == 'user') {
            navigation.navigate('Koti');
        } else{
            alert('Virheellinen käyttäjätunnus tai salasana')
        }
    };

    return(
        <View style={styles.container}> 
        <Text style={styles.tekstit}>Syötä käyttäjätunnus ja salasana</Text>
        <TextInput
        style={styles.input}
        placeholder="Käyttäjätunnus"
        onChangeText={setKayttaja}
        value={kayttaja}
      />
      <TextInput
        style={styles.input}
        placeholder="Salasana"
        onChangeText={setSalasana}
        value={salasana}
        secureTextEntry
      />
      <Button title="Kirjaudu" onPress={kirjaudu} />

        </View>
    )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'white',
    },
    input: {
      width: '80%',
      padding: 10,
      marginBottom: 10,
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: 5,
    },
    tekstit:{
        alignItems: 'center',
        fontSize: '20',
        marginBottom:20
    },

  });