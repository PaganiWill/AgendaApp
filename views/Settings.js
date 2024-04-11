import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

 
const Settings = ({navigation}) => {
    
  return (
    <View style={styles.container}>
        <Text style={styles.title}>Tela de configurações</Text>
        <Button title="Abrir Menu" onPress={() => navigation.openDrawer()} />
    </View>
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

export default Settings;