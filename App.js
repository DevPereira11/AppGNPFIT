import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import palmeiras from'./assets/palmeiras.png';

import logo from './assets/logo.png'

export default function App() {
  return (
    <View style={styles.container}>
      <Text> Primeira tela do app</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
