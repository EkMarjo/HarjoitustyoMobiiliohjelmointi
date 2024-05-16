import { View, Text, StyleSheet} from "react-native"
import { StatusBar } from 'expo-status-bar';
import MapView, {Marker} from 'react-native-maps';

export default function Yhteystiedota(){
    return(
        <View  style={styles.container}>
            <Text style={styles.tittleText}> Ota yhteyttä </Text>
            <Text style={styles.muuText}>Mikäli kaipaat motivaatiota tai tarvitset tukea sovelluksen kanssa niin autamme mielelämme!
            Saat meihin yhteyden puhelimitse, sähköpostilla tai asioimalla toimipisteellämme. </Text>
            <Text style={styles.muuText}>Puhelinnumero: 0100 123 456 789 </Text>
            <Text style={styles.muuText}> Tavoitat meidät ma-pe klo 10:00-15:30 </Text>
            <Text style={styles.muuText}> Sähköposti: otayhteytta@otayhteytta.com </Text>
            <Text style={styles.tittleText}> Löydä meidät </Text>
            <MapView 
      style={styles.mapStyle}
      region={{
        latitude: 60.256489,
        longitude: 24.865950,
        latitudeDelta: 0.0322,
        longitudeDelta: 0.0221,
      }}
      >
        <Marker 
        title='Toimipiste'
        coordinate={{
            latitude: 60.256489,
            longitude: 24.865950,
        }}
        />
          </MapView>
          <StatusBar style="auto" />
            </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginLeft:10,
      marginRight:10,
      backgroundColor: 'white',
    },
    tittleText:{
        fontSize:25,
        fontWeight:'bold',
        marginTop:20,
        textAlign:'center',
        marginBottom:10,
        color:'pink'
    },
    muuText:{
        fontsize:15,
        textAlign:'center',
        color:'grey'
    },
    mapStyle: {
        width:'100%',
        height:'55%',
      },

});