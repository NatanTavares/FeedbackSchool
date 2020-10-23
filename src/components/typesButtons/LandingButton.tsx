import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { useFonts, Nunito_400Regular, Nunito_700Bold } from '@expo-google-fonts/nunito';

interface ILandingButtonProps {
  content: string;
  white?: boolean; 
}

function LandingButton(props: ILandingButtonProps) {
  let [fontsLoaded] = useFonts({
    Nunito_400Regular,
    Nunito_700Bold,
  });

  if (!fontsLoaded) {
    return <Text>Carregando...</Text>;
  }

  return (
    <View style={props.white ? styles.bodyButtonWhite : styles.bobyButton}>
      <Text style={props.white ? styles.text : styles.whiteText}>
        {props.content}
      </Text>
    </View>
  );
}

export default LandingButton;

const styles = StyleSheet.create({
  bobyButton: {
    paddingVertical: 16,
    minWidth: 140,
    alignItems: 'center',
    borderStyle: 'solid',
    borderWidth: 4,
    borderColor: '#86A5FF',
    borderRadius: 6,
    backgroundColor: '#86A5FF',
    justifyContent: 'center',
  },

  bodyButtonWhite: {
    color: '#86A5FF',
    backgroundColor: '#FFF',
    paddingVertical: 20,
    paddingHorizontal: 6,
    minWidth: 140,
    alignItems: 'center',
    borderStyle: 'solid',
    borderWidth: 4,
    borderColor: '#86A5FF',
    borderRadius: 6,
    justifyContent: 'center',
  },

  whiteText: {
    color: '#FFF',
    fontFamily: 'Nunito_700Bold',
    fontSize: 26,
  },

  text: {
    color: '#86A5FF',
    fontFamily: 'Nunito_700Bold',
    fontSize: 26,
  },

});
