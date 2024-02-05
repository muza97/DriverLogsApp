import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

function LandingPage({navigation}) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to the Driver Logs App!</Text>
      <Button title="Go to Logs" onPress={() => navigation.navigate('Logs')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
});

export default LandingPage;
