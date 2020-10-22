import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

function Landing() {
  return (
    <View>
      <Text style={styles.title}>RankSchool</Text>
    </View>
  );
}

export default Landing;

const styles = StyleSheet.create({
  title: {
    color: '#1d2424',
    fontSize: 38,
    fontWeight: "700",
  }
});
