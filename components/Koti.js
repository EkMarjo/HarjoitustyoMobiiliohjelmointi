import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, SafeAreaView } from 'react-native';
import { Button } from '@rneui/themed';


export default function Koti({navigation}){
    const kirjauduUlos = () =>{
        navigation.navigate('Kirjaudu')
    }
    return(
  
        <View style={styles.container}>
            <SafeAreaView style={styles.container}>
                <Image source={require('../kuvat/auringonlasku.jpg')} style={styles.image} />
                <Text style={styles.tittleText}>Tervetuloa jumppaamaan! </Text>
                <Text style={styles.overlayText}>Jokainen harjoitus on askel kohti terveempää tulevaisuutta. Sovelluksen avulla 
                löydät inspiraatiota ja juuri sinulle sopivia treenejä. Autamme mielelellämme sinut alkuun!</Text>
            </SafeAreaView>
            <Button onPress={kirjauduUlos}>Kirjaudu ulos</Button>
            <StatusBar style="auto" />
        </View>
 
    );
}


const styles = StyleSheet.create({
    container: {
        paddingTop:20,
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      paddingBottom:10
    },
    image: {
        width: 430,
        height: 700,
      },
      overlayText: {
        position: 'absolute',
        top: 100,
        left: 50,
        right: 50,
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white', 
        fontSize: 18, 
    },
    tittleText:{
        position: 'absolute',
        top: 30,
        left: 50,
        right: 50,
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 28,
        fontWeight: 'bold',
        color:'white'
    },
  
  });