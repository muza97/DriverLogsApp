import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

const LogoutButton = ({onLogout}) => {
  return (
    <TouchableOpacity onPress={onLogout} style={styles.buttonStyle}>
      <Text style={styles.buttonText}>Logout</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonStyle: {
    // paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#FFFFFF',
    borderRadius: 5,
    // shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowColor: '#000000',
    shadowOffset: {height: 0, width: 0},
    elevation: 1,
  },
  buttonText: {
    color: '#007AFF',
    fontSize: 18,
  },
});

export default LogoutButton;
