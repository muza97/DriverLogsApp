import React, {useState} from 'react';
import {View, TextInput, Button, StyleSheet, Alert} from 'react-native';

function LoginPage({navigation}) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (username !== '' && password !== '') {
      navigation.navigate('Landing');
    } else {
      Alert.alert(
        'Invalid Credentials',
        'Username and password cannot be empty.',
        [{text: 'OK'}],
      );
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button title="Log In" onPress={handleLogin} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    padding: 10,
  },
});

export default LoginPage;
