import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet, Button } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import CadastroPessoa from './CadastroPessoa';
import CadastroDentista from './CadastroDentista';
import CadastroAgendamento from './CadastroAgendamento';
import HomeScreen from './HomeScreen';


const Drawer = createDrawerNavigator()

const Home = () => {
    
  return (
    <Drawer.Navigator initialRouteName="Agenda">
      <Drawer.Screen name="Agenda" component={HomeScreen} />
      <Drawer.Screen name="Cadastro de Pessoas" component={CadastroPessoa} />
      <Drawer.Screen name="Cadastro de Dentista" component={CadastroDentista} />
      <Drawer.Screen name="Cadastro de Agendamento" component={CadastroAgendamento} />
    </Drawer.Navigator>
  );
};


const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#ffffff',
    },
    title: {
      fontSize: 24,
      marginBottom: 20,
    },
  });

export default Home;