import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {Text, SafeAreaView} from 'react-native';
import TelaInicial from './views/TelaInicial';
import Login from './views/Login';
import Registrar from './views/Registrar';
import Home from './views/Home';
import Settings from './views/Settings';
import Stack from './navegacao/Stack';
 
/*

const HomeStack = () => (
  <Stack.Navigator>
        <Stack.Screen name=" " initialRouteName="TelaInicial" component={TelaInicial} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Registrar" component={Registrar} />  
  </Stack.Navigator>
);



const SettingsStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="Settings" component={Settings} />
  </Stack.Navigator>
);


const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Settings" component={Settings} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name=" " initialRouteName="TelaInicial" component={TelaInicial} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Registrar" component={Registrar} />
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

*/

export default props => (
  <SafeAreaView style={{flex: 1}}>
    <NavigationContainer>
      <Stack />
    </NavigationContainer>
  </SafeAreaView>
  
)