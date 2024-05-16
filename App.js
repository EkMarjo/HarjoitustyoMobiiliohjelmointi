import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from "@react-navigation/native";
import Koti from "./components/Koti";
import OmatTiedot from "./components/OmatTiedot";
import Jumpat from "./components/Jumpat"
import Ionicons from 'react-native-vector-icons/Ionicons';
import { ThemeProvider, createTheme } from '@rneui/themed';
import Muut from './components/Muut';
import React from 'react';
import Yhteystiedot from './components/Yhteystiedot';
import Arvostele from './components/Arvostele';
import Kirjaudu from './components/Kirjaudu';
import Paivakirja from './components/Paivakirja';



const theme = createTheme({
  lightColors: {
    primary: 'pink',
    textFontFamily: 'Arial',
    textColor: 'black',
  },
  darkColors: {
    primary: 'blue',
  },
  components: {
    Button: {
      raised:false,
    },
  },
  mode: 'light',
});

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

export default function App() {
  return (
    <ThemeProvider theme ={theme}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Kirjaudu" component={Kirjaudu} options={{ headerShown: false }} />
          <Stack.Screen name="Koti" options={{ headerShown: false }}>
            {() => (
              <Tab.Navigator
                screenOptions={({ route }) => ({
                  tabBarIcon: ({ focused, color, size }) => {
                    let iconName;

                    if (route.name === 'Etusivu') {
                      iconName = focused
                        ? 'home'
                        : 'home';
                    } else if (route.name == 'Treenit'){
                      iconName = focused ? 'list' : 'list';
                    } else if (route.name === 'Omat tiedot') {
                      iconName = focused ? 'person' : 'person';
                    }else if(route.name == 'Paivakirja'){
                      iconName = focused ? 'list' : 'list';
                    } else if (route.name === 'Muut') {
                      iconName = focused ? 'help' : 'help';
                    } 
                    return <Ionicons name={iconName} size={size} color={color} />;
                  },
                  tabBarActiveTintColor: 'pink',
                  tabBarInactiveTintColor: 'blak',
                })}
              >
                <Tab.Screen name="Etusivu" component={Koti}/>
                <Tab.Screen name ="Treenit" component={Jumpat} />
                <Tab.Screen name ="Päiväkirja treeneistä" component={Paivakirja} />
                <Tab.Screen name ="Omat tiedot" component={OmatTiedot} />
                <Tab.Screen name="Muut">
                  {() => (
                    <Stack.Navigator>
                      <Stack.Screen name="Valikko" component={Muut} options={{ headerShown: false }}/>
                      <Stack.Screen name="Yhteystiedot" component={Yhteystiedot} />
                      <Stack.Screen name ='Arvostele sovellus' component={Arvostele} />
                    </Stack.Navigator>
                  )}
                </Tab.Screen>
              </Tab.Navigator>
            )}
          </Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
}


