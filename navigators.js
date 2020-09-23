import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import User from './UserScreen';
import MessScreen from './MessageScreen';
const Stack = createStackNavigator();
export default function root(props) {
  console.log('navigation');
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="User" component={User} />
        <Stack.Screen name="Mess" component={MessScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
