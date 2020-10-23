import React from 'react';
import Header from '../components/Header';
import { Image, StyleSheet, Text, View } from 'react-native';

import Logo from '../assets/Logo.png';

import { useFonts, Nunito_400Regular, Nunito_700Bold } from '@expo-google-fonts/nunito';

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
    width: 170,
    height: 170,
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
});

