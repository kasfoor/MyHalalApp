import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from "../screens/Login";
import Map from "../screens/Map";
import Rewards from "../screens/Rewards";

const Stack = createStackNavigator()

export default Navigator = () => {
    return (
        <NavigationContainer initialRouteName='Home'>
            <Stack.Navigator>
                <Stack.Screen name='Login' component={Login} options={{ title: '' }} />
                <Stack.Screen name='Map' component={Map} options={{ title: '' }} />
                <Stack.Screen name='Rewards' component={Rewards} options={{ title: '' }} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
