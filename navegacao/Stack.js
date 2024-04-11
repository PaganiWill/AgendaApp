import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import TelaInicial from '../views/TelaInicial'
import Login from '../views/Login'
import Registrar from '../views/Registrar'
import Home from '../views/Home'

const Stack = createStackNavigator()

export default props => (
    <Stack.Navigator initialRouteName="TelaInicial"
        screenOptions={{ headerShown: false}}>
        <Stack.Screen name="TelaInicial" component={TelaInicial} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Registrar" component={Registrar} />
        <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
)