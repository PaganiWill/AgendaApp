import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

//const Stack = createStackNavigator();

const Login = ({navigation}) => {
  const [usuario, setUsername] = useState('');
  const [senha, setPassword] = useState('');

  const handleLogin = () => {
    // Implementar a lógica de autenticação aqui
    console.log('Usuário:', usuario);
    console.log('Senha:', senha);
    navigation.navigate('Home'); //Acessar tela Home
  };
 
  return (
    <View style={styles.container}>
      <Image
        source={require('../img/logo.png')}
        style={styles.logo}
      />
      <TextInput
        style={styles.input}
        placeholder="Usuário"
        value={usuario}
        onChangeText={(text) => setUsername(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        secureTextEntry={true}
        value={senha}
        onChangeText={(text) => setPassword(text)}
      />
      <TouchableOpacity style={styles.buttonEntrar} onPress={handleLogin}>
        <Text style={styles.buttonText}>Entrar</Text>
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
    width: '30%',
    height: 40,
    backgroundColor: '#228B22',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
    marginTop: 40
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default Login;
