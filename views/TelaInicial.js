import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const TelaInicial = ({navigation}) => {

  const handleLogin = () => {
    // Lógica de autenticação...
    // Se a autenticação for bem-sucedida, navegue para a tela login
    navigation.navigate('Login');
  };

  const handleRegister = () => {
    // Lógica de autenticação...
    // Se a autenticação for bem-sucedida, navegue para a tela login
    navigation.navigate('Registrar');
  };


  return (
    <View style={styles.container}>
    <Image
      source={require('../img/logo.png')}
      style={styles.logo}
    />
    <TouchableOpacity style={styles.buttonEntrar} onPress={handleLogin}>
      <Text style={styles.buttonText}>Login</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.buttonRegistrar} onPress={handleRegister}>
      <Text style={styles.buttonText}>Criar Acesso</Text>
    </TouchableOpacity>
  </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 130, 
    height: 130,
    marginBottom: 55,
  },
  input: {
    width: '65%',
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10
  },
  buttonEntrar: {
    width: '40%',
    height: 40,
    backgroundColor: '#228B22',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5
   },
  buttonRegistrar: {
    width: '40%',
    height: 40,
    backgroundColor: '#007bff',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginTop: 20
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default TelaInicial;
 