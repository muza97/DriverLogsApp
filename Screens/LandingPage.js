import React, {useState, useEffect, useCallback} from 'react';
import {View, Text, StyleSheet, Alert, Button} from 'react-native';
import * as Keychain from 'react-native-keychain';
import LogoutButton from './buttons/LogoutButton';

function LandingPage({navigation}) {
  useEffect(() => {
    const checkForToken = async () => {
      const credentials = await Keychain.getGenericPassword();
      if (!credentials) {
        navigation.navigate('Login');
      }
    };
    checkForToken();
  }, [navigation]);

  const handleLogout = useCallback(async () => {
    try {
      await Keychain.resetGenericPassword();
      navigation.navigate('Login');
    } catch (error) {
      console.error('Error logging out', error);
      Alert.alert(
        'Logout Failed',
        'Could not log out at this time, please try again later.',
      );
    }
  }, [navigation]);

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => <LogoutButton onLogout={handleLogout} />,
      headerLeft: null,
      title: 'Landing',
    });
  }, [navigation, handleLogout]);

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
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
});

export default LandingPage;
