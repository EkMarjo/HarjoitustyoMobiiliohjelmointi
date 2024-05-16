import React, { useState,useEffect } from "react";
import { StatusBar } from 'expo-status-bar';
import { View, Text, StyleSheet, TextInput, FlatList } from "react-native";
import { AirbnbRating } from '@rneui/themed';
import {  Button } from '@rneui/themed';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Arvostele(){
    const [tallennettu, setTallennettu] = useState(false)
    const [arvostelu, setArvostelu] = useState('');
    const [arvostelut, setArvostelut] = useState([]);
    

    useEffect(() => {
        haeArvostelut();
    }, []);

    const tallenna = async () => {
        try {
            const arvosteluData = {
                id: Date.now(),
                arvostelu: arvostelu
            };
            await AsyncStorage.setItem(`arvostelu_${arvosteluData.id}`, JSON.stringify(arvosteluData));
            setTallennettu(true);
            setArvostelu('');
            haeArvostelut();
        } catch (error) {
            console.error('Virhe tallennettaessa arvostelua:', error);
        }
    };

    const haeArvostelut = async () => {
        try {
            const keys = await AsyncStorage.getAllKeys();
            const arvosteluData = await AsyncStorage.multiGet(keys);
            setArvostelut(arvosteluData.map(([key, value]) => JSON.parse(value)));
        } catch (error) {
            console.error('Virhe haettaessa arvosteluja:', error);
        }
    };

    return(
        <View style= {styles.container}>
        <Text style={styles.tittleText}> Arvostele sovellus! </Text>
            <AirbnbRating
                      defaultRating={3}
                      size={25}
                    />
                    <TextInput style={styles.input}
                    placeholder="Vapaamuotoinen palaute"
                    onChangeText={arvostelu => setArvostelu(arvostelu)}
                    value={arvostelu}/>
            <Button style={styles.nappula} icon={{name: 'save'}}  title="Tallenna" 
            onPress={tallenna}/>  
            {tallennettu && (
        <Text style={styles.tallennettuText}>Kiitos arvostelusta!</Text>
      )}<Text style={styles.headerText}>Annetut arvostelut</Text>
      <FlatList 
      style={{marginLeft : "5%"}}
      keyExtractor={item => item.id.toString()}
      renderItem={({item}) =>
        <View style={styles.listcontainer}>
            <Text style={styles.arvostelu}>{item.arvostelu}</Text>
        </View>
        }
        data={arvostelut}
        />
        <StatusBar style="auto" />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginLeft:10,
      marginRight:10,
      backgroundColor:'white'
    },
    tittleText:{
        fontSize:25,
        fontWeight:'bold',
        marginTop:20,
        textAlign:'center',
        marginBottom:10,
        color:'pink'
    },
    nappula:{
        marginLeft:55,
        marginRight:55,
        marginBottom:5,
        marginTop:30,

    },
    tallennettuText:{
        textAlign: 'center',
        marginTop: 10,
        color: 'black',
        fontSize:15,
    },
    input: {
        width: '100%',
        padding: 15,
        marginBottom: 10,
        borderWidth: 2,
        borderColor: '#ccc',
        borderRadius: 5,
        textAlign:'center',
       
      },
      listcontainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        textAlign:'center',
      },
      headerText:{
        textAlign:'center',
        fontSize:15,
        fontWeight:'bold',
        color:'pink',
        marginBottom:20
      },
      arvostelu: {
        marginLeft:80,
        
      }

})