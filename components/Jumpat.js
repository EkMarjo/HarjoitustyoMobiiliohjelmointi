import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text, ScrollView} from 'react-native';
import { Card, Button, Icon, Overlay } from '@rneui/themed';
import { useState } from 'react';


export default function Koti(){
  const [visible1, setVisible1] = useState(false);
  const [visible2, setVisible2] = useState(false);
  const [visible3, setVisible3] = useState(false);
  const [visible4, setVisible4] = useState(false);

  const toggleOverlay1 = () => {
    setVisible1(!visible1);
  };

  const toggleOverlay2 = () => {
    setVisible2(!visible2);
  };

  const toggleOverlay3 = () => {
    setVisible3(!visible3);
  };

  const toggleOverlay4 = () => {
    setVisible4(!visible4);
  };
    
  return(
    <ScrollView>
      <View style={styles.container}>
          <Card>
            <Card.Title>Venyttely</Card.Title>
              <Card.Divider />
                <Card.Image
                style={styles.image}
                source={require('../kuvat/kukkia.jpg')}
                />
                <Text style={styles.kuvatekstit}>
                 Rauhallinen venyttely, joka keskittyy jalkoihin
                </Text>
                <Button
                buttonStyle={styles.nappula}
                onPress={toggleOverlay1}
                title="Katso lisää"
                />
                <Overlay isVisible={visible1} onBackdropPress={toggleOverlay1}>
                <Text style={styles.ikkunateksti}>
                Aloita seisomalla suorana ja rentouta hartiat. Ota syvä hengitys ja 
                vedä kädet ylös kohti kattoa. Laske kädet hitaasti alas kohti varpaita ja 
                taivuta kehoa eteenpäin. Pidä selkä suorana ja tunne venytys takareisissä.
                Pidä venytys 15-30 sekuntia ja palaa sitten hitaasti takaisin pystyasentoon. 
                Seuraavaksi, seiso jalat hieman erillään toisistaan ja ojenna toinen käsi kohti kattoa. 
                Kallista vartaloa sivulle ja tunne venytys kyljissä. Pidä venytys 15-30 sekuntia ja 
                vaihda sitten puolta. Lopuksi, aseta kädet lantiolle ja ojenna toinen jalka taakse päin. 
                Taivuta etummaista jalkaa ja laske lantiota kohti lattiaa, kunnes tunnet venytyksen lonkan etuosassa.
                Pidä venytys 15-30 sekuntia ja vaihda sitten jalkaa. Muista hengittää syvään ja rauhallisesti jokaisen venytyksen aikana. Toista nämä venytykset muutaman kerran ja nauti rentouttavasta hetkestä kehollesi.
                </Text>
                <Button 
                title="Sulje ikkuna"
                onPress={toggleOverlay1}
                />
                </Overlay>
          </Card>
          
          <Card>
            <Card.Title>Teho pilates</Card.Title>
              <Card.Divider />
                <Card.Image
                style={styles.image}
                source={require('../kuvat/palmut.jpg')}
                />
                <Text style={styles.kuvatekstit}>
                Tehokas pilates, joka harjoittaa vatsalihaksiasi
                </Text>
                <Button
                buttonStyle={styles.nappula}
                onPress={toggleOverlay2}
                title="Katso lisää"
                />
                <Overlay isVisible={visible2} onBackdropPress={toggleOverlay2}>
                <Text style={styles.ikkunateksti}>
                Aloita selinmakuulla matolla, jalat koukistettuina ja jalat lantionlevyisessä asennossa.
                Aktivoi keskivartalon lihakset hengittämällä syvään ja työntämällä alaselkääsi tiiviisti mattoa vasten.
                Nosta hitaasti pää, kaula ja hartiat matolta, pitäen leuka lähellä rintaa.
                Hengitä sisään ja ojenna hitaasti toista jalkaa eteenpäin, pitäen alaselän tuettuna matolla.
                Vaihda jalkaa ja toista liike toiselle puolelle.
                Palaa aloitusasentoon ja nosta sitten molemmat jalat kohti kattoa, pitäen ne suorina.
                Hengitä ulos ja laske jalat hallitusti kohti lattiaa, mutta älä anna niiden koskettaa sitä.
                Toista tämä liikesarja 8-10 kertaa.
                Lopuksi, palaa selinmakuulle, hengitä syvään ja rentoudu ennen kuin nouse ylös.
                Muista keskittyä hengitykseen ja pitää liikkeet hallittuina koko harjoituksen ajan.
                </Text>
                <Button 
                title="Sulje ikkuna"
                onPress={toggleOverlay2}
                />
                </Overlay>
          </Card>
          
          <Card>
            <Card.Title>Pilates</Card.Title>
              <Card.Divider />
                <Card.Image
                style={styles.image}
                source={require('../kuvat/ranta.jpg')}
                />
                <Text style={styles.kuvatekstit}>
                 Temmoltaan rauhallisempi pilates
                </Text>
                <Button
                buttonStyle={styles.nappula}
                onPress={toggleOverlay3}
                title="Katso lisää"
                />
                <Overlay isVisible={visible3} onBackdropPress={toggleOverlay3}>
                <Text style={styles.ikkunateksti}>
                Asetu selinmakuulle matolle, rentouta hartiat ja anna käsien levätä vartalon vierellä kämmenet alaspäin.
                Aktivoi keskivartalon lihakset hengittämällä syvään ja tunne selkärangan pitenevän kohti mattoa.
                Aloita hengittämällä sisään ja ojentamalla yhtä jalkaa hitaasti eteenpäin, pitäen toisen jalan koukistettuna.
                Hengitä ulos ja tuo jalka takaisin lähelle pakaraa, keskittyen lonkan hallittuun liikkeeseen.
                Toista sama toiselle jalalle ja jatka vuorottelua 6-8 kertaa.
                Kun olet valmis, nosta molemmat jalat kohti kattoa ja pidä ne suorina, aktivoi keskivartalon lihakset pitämään alaselkä tuettuna matolla.
                Hengitä syvään ja laske jalat hallitusti kohti lattiaa, säilytä selän ja lantion asento vakaana.
                Toista tämä liike 6-8 kertaa, muista hengittää tasaisesti ja hallitusti jokaisen liikkeen aikana.
                Lopuksi, palaa selinmakuulle ja tuo kädet ristikkäin vartalon päälle, hengitä syvään ja tunne kehon rentoutuvan.
                Anna itsellesi hetki levätä ja nauti rauhallisesta hetkestä ennen kuin nouse ylös.
                Muista kuunnella kehoasi ja tehdä liikkeitä omaan tahtiisi, vältä ylirasitusta tai epämukavuutta.
                Pilatesharjoittelun jälkeen voit tuntea kehosi vahvempana ja rentoutuneempana.
                Muista nauttia harjoituksesta ja kuunnella kehoa, se on avain terveeseen ja tasapainoiseen elämään.
                </Text>
                <Button 
                title="Sulje ikkuna"
                onPress={toggleOverlay3}
                />
            </Overlay>
          </Card>
          
          <Card>
            <Card.Title>Jooga</Card.Title>
              <Card.Divider />
                <Card.Image
                style={styles.image}
                source={require('../kuvat/auringonlasku.jpg')}
                />
                <Text style={styles.kuvatekstit}>
                Jooga harjoitus, joka on lempeä kehollesi
                </Text>
                <Button
              buttonStyle={styles.nappula}
              onPress={toggleOverlay4}
              title="Katso lisää"
              />
              <Overlay isVisible={visible4} onBackdropPress={toggleOverlay4}>
              <Text style={styles.ikkunateksti}>
              Istu mukavasti matolle risti-istuntaan, sulje silmäsi ja keskity rauhalliseen hengitykseen.
              Aseta kädet polviesi päälle tai viereen ja rentouta hartiat alaspäin.
              Hengitä syvään sisään ja kohota kädet ylös kohti kattoa, venytä selkää ja pidä katse eteenpäin.
              Hengitä ulos ja tuo kädet hitaasti alas alas kohti lattiaa, tunne venytys selässä ja kyljissä.
              Toista tämä liike muutaman kerran, aina syvään hengittäen ja rauhallisesti uloshengittäen.
              Seuraavaksi, siirry nelosasentoon polvet ja kädet lattialla, varpaat osoittavat taaksepäin.
              Hengitä sisään ja kohota ylävartaloa ylös, katso eteenpäin ja tunne venytys rintakehässä.
              Hengitä ulos ja palaa takaisin nelosasentoon, tunne kehon rentoutuvan ja hengityksen tasaantuvan.
              Lopuksi, asetu selinmakuulle matolle, ojenna kädet ja jalat pitkälle ja sulje silmäsi.
              Rentoudu hetki shavasana-asennossa, anna kehosi levätä ja nauti rauhallisesta hetkestä.
              Muista kuunnella kehoasi ja tehdä liikkeitä omassa tahdissasi, vältä ylirasitusta ja nauti joogahetkestäsi!
              </Text>
              <Button 
              title="Sulje ikkuna"
              onPress={toggleOverlay4}
              />
              </Overlay>
          </Card>
          <StatusBar style="auto" />
      </View>
    </ScrollView>
    );
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginLeft:10,
      marginRight:10,
    },
    image: {
        width: 300,
        height: 130,
        marginLeft: 5,
        marginRight:0,
        
      },
      kuvatekstit:{
        textAlign: 'center',
        fontSize:14,
        marginBottom:10,
        marginTop:10,
        color:'grey'
        
      },
      nappula:{
        borderRadius: 0,
        marginLeft: 0,
        marginRight: 0,
        marginBottom: 0,

      },

    ikkunateksti:{
      marginBottom: 10,
      textAlign: 'center',
      fontSize: 16,
      color:'pink',
      fontWeight: 'bold'
    },

  });