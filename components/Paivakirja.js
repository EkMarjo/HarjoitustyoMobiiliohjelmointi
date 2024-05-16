import React, { useState,useEffect } from "react";
import { StatusBar } from 'expo-status-bar';
import { View, Text, StyleSheet, TextInput, FlatList } from "react-native";
import {  Button } from '@rneui/themed';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Paivakirja(){
    const [tallennettu, setTallennettu] = useState(false)
    const [merkinta, setMerkinta] = useState('');
    const [merkinnat, setMerkinnat] = useState([]);
    

    useEffect(() => {
        haeMerkkinat();
    }, []);

    const tallenna = async () => {
        try {
            const paivakirjaData = {
                id: Date.now(),
                merkinta : merkinta
            };
            await AsyncStorage.setItem(`merkinta_${paivakirjaData.id}`, JSON.stringify(paivakirjaData));
            setTallennettu(true);
            setMerkinta('');
            haeMerkkinat();
        } catch (error) {
            console.error('Virhe tallennettaessa arvostelua:', error);
        }
    };

    const haeMerkkinat = async () => {
        try {
            const keys = await AsyncStorage.getAllKeys();
            const paivakirjaData = await AsyncStorage.multiGet(keys);
            setMerkinnat(paivakirjaData.map(([key, value]) => JSON.parse(value)));
        } catch (error) {
            console.error('Virhe haettaessa arvosteluja:', error);
        }
    };

    const poistaMerkinta = async (id) => {
        try {
          await AsyncStorage.removeItem(`merkinta_${id}`);
          haeMerkkinat();
        } catch (error) {
          console.error('Virhe poistettaessa merkintää:', error);
        }
      };

    return(
        <View style= {styles.container}>
            <Text style={styles.tittleText}> Tänne voit kirjoittaa muistiinpanoja jumpista </Text>
            <TextInput style={styles.input}
                    placeholder="Kirjoita tähän...."
                    onChangeText={merkinta => setMerkinta(merkinta)}
                    value={merkinta}
                    />
            <Button 
            style={styles.nappula} 
            icon={{name: 'save'}}  
            title="Tallenna" 
            onPress={tallenna}
            /> 
                
                <FlatList 
                style={{marginLeft : "5%"}}
                keyExtractor={item => item.id.toString()}
                renderItem={({item}) => (
                    item.merkinta ? (
                    <View style={styles.listcontainer}>
                    <Text style={styles.merkinta}>{item.merkinta}</Text>
                    <Button style={styles.poistanappula}
                    title="Poista"
                    onPress={() => poistaMerkinta(item.id)}
                    />
        </View>
                    ) :null

    )}
        data={merkinnat}
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
        marginBottom:20,
        marginTop:30,
    },
    listcontainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom:5,
        marginTop:1
      },
      merkinta: {
        flex:1,
        marginRight:10,
      },
      input: {
        width: '100%',
        padding: 15,
        marginBottom: 10,
        borderWidth: 2,
        borderColor: '#ccc',
        borderRadius: 5,
        textAlign:'center',
        justifyContent: 'flex-start'
      },
      poistanappula:{
        width:67,
        height:50,

       
      }



})