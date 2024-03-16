import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, StyleSheet } from 'react-native';

const LoginScreen = () => {
  const [username, setUsername] = useState(''); 
  const [password, setPassword] = useState(''); 

  const handleLogin = () => {
    if (username === '' || password === '') {
      Alert.alert('Error', 'Please enter both username and password');
    } else if (username === 'saad' && password === 'saad') {
      Alert.alert('Success', 'Login Successful');
    } else {
      Alert.alert('Error', 'Incorrect username or password');
    }
  };

  return (
    <View >
      <Text>Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry={true}
        value={password}
        onChangeText={setPassword}
      />
      <TouchableOpacity
        style={[, (username === '' || password === '') && styles.disabledButton]}
        onPress={handleLogin}
        disabled={username === '' || password === ''}
      >
        <Text >Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    width: '80%',
    padding: 10,
    marginBottom: 20,
  },

  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default LoginScreen;
