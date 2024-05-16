import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { Input, Button } from '@rneui/themed';
import { useState } from 'react';



export default function OmatTiedot(){
    const [etunimi, setEtunimi] = useState('');
    const muutaEtunimi = (text) => {
      setEtunimi(text);
    };

    const [sukunimi,setSukunimi] = useState('')
    const muutaSukunimi = (text) => {
        setSukunimi(text);
    }

    const [osoite, setOsoite] = useState('')
    const muutaOsoite = (text) => {
        setOsoite(text);
    }

    const [puhelin, setPuhelin] = useState('')
    const muutaPuhelin = (text) => {
        setPuhelin(text)
    }

    const [sposti, setSposti] = useState('')
    const muutaSposti = (text) => {
        setSposti(text)
    }
    const [tallennettu, setTallennettu] = useState(false);
    const tallennaTiedot = () => {
        setTallennettu(true);
        setEtunimi('');
        setSukunimi('');
        setOsoite('');
        setPuhelin('');
        setSposti('');
      };

      return(
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.tittleText}>Täällä voit päivittää omat tietosi</Text>
            <Input
                placeholder='Kirjoita etunimesi' label='Etunimi'
                onChangeText={muutaEtunimi} value={etunimi}
            />
            <Input
                placeholder='Kirjoita sukunimesi' label='Sukunimi'
                onChangeText={muutaSukunimi} value={sukunimi}
            />
            <Input
                placeholder='Kirjoita osoitteesi' label='Osoite'
                onChangeText={muutaOsoite} value={osoite}
            />
            <Input
                placeholder='Kirjoita puhelinnumero' label='Puhelinnumero'
                onChangeText={muutaPuhelin} value={puhelin}
            />
            <Input
                placeholder='Kirjoita sähköpostiosoitteesi' label='Sähköposti'
                onChangeText={muutaSposti} value={sposti}
            />
            <Button 
                raised icon={{name: 'save'}}  title="Tallenna" 
                onPress={tallennaTiedot}
            />
            {tallennettu && <Text>Tiedot tallennettu</Text>}
            <StatusBar style="auto" />
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
    },
    tittleText:{
        fontSize:20,
        fontWeight:'bold',
        marginBottom: 40,
        color:'pink'
    },
});