import React from 'react';
import Header from '../components/Header';
import { Image, StyleSheet, Text, View } from 'react-native';

import Logo from '../assets/Logo.png';

import { useFonts, Nunito_400Regular, Nunito_700Bold } from '@expo-google-fonts/nunito';
import LandingButton from '../components/typesButtons/LandingButton';

function Landing() {
  let [fontsLoaded] = useFonts({
    Nunito_400Regular,
    Nunito_700Bold,
  });

  if (!fontsLoaded) {
    return <Text>Carregando...</Text>;
  }

  return (
    <>
      <Header goBackIcon={false} menuIcon={false} />
      
      <View style={styles.imgPosition}>
        <Image source={Logo} style={styles.img} />
      </View>

      <View style={styles.positionTitle}>
        <Text style={styles.fontTitle}>RankSchool</Text>
      </View>

      <View style={styles.footerZone}>
        <View style={styles.positionButtons}>
          <LandingButton content="Avaliações" white />
          <LandingButton content="Entrar" />
        </View>
        <Text style={styles.terms}>todos os direitos reservados ©</Text>
      </View>
    </>
  );
}

export default Landing;

const styles = StyleSheet.create({
  imgPosition: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  
  img: {
    width: 190,
    height: 190,
  },
  
  positionTitle: {
    alignItems: 'center',
    marginTop: 120,
  },

  fontTitle: {
    fontFamily: 'Nunito_700Bold',
    fontSize: 40,
    color: '#2F364D',
  },

  footerZone: {
    marginTop: 132,
    alignItems: 'center',
  },
  
  positionButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 324,
    marginBottom: 10,
  },

  terms: {
    width: 120,
    fontSize: 14,
    color: '#848484',
    textAlign: 'center',
  },
});

