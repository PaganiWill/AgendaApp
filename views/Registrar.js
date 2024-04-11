import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { TextInputMask } from 'react-native-masked-text';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


const Registrar = ({navigation}) => {
  const [usuario, setUsername] = useState('');
  const [senha, setPassword] = useState('');
  const [telefone, setPhoneNumber] = useState('');

  const handlePhoneChange = (formatted, extracted) => {
    setPhoneNumber(formatted);  //Máscara telefone
  };
 
  const handleRegister = () => {
    // Implementar a lógica de registro aqui
    console.log('Registrando usuário:', usuario);
    navigation.navigate('Login'); //Acessar tela de Login
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
      <TextInputMask
        style={styles.input}
        placeholder="Telefone"
        type={'cel-phone'}
        options={{
          maskType: 'BRL',
          withDDD: true,
          dddMask: '(99) ',
        }}
        value={telefone}
        onChangeText={handlePhoneChange}
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        secureTextEntry={true}
        value={senha}
        onChangeText={(text) => setPassword(text)}
      />
      <TouchableOpacity style={styles.buttonRegistrar} onPress={handleRegister}>
        <Text style={styles.buttonText}>Criar Conta</Text>
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
  buttonRegistrar: {
    width: '30%',
    height: 40,
    backgroundColor: '#007bff',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
    marginTop: 15
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default Registrar;
 

