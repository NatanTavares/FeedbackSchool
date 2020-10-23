import React from 'react';
import { SafeAreaView } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import Landing from './src/pages/Landing';

export default function App() {
  return (
    <SafeAreaView >
      <Landing />
      <StatusBar style="light" />
    </SafeAreaView>
  );
}
