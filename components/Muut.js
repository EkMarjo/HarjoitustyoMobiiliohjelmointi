import React from "react";
import { View } from "react-native";
import { ListItem } from "@rneui/base";
import { useNavigation } from '@react-navigation/native';

export default function Muut(){
  const navigation = useNavigation();

  return(
    <View>
      <ListItem onPress={() => navigation.navigate('Yhteystiedot')}>
    <ListItem.Content>
      <ListItem.Title>Yhteystiedot</ListItem.Title>
    </ListItem.Content>
    <ListItem.Chevron />
  </ListItem>
  <ListItem onPress={() => navigation.navigate('Arvostele sovellus')}>
    <ListItem.Content>
      <ListItem.Title>Arvostele sovellus</ListItem.Title>
    </ListItem.Content>
    <ListItem.Chevron />
  </ListItem>
    </View>
  )

}