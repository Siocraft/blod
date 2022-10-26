import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { RootStackNavigator } from '../Navigators';

export const App = () => {
  return (
    <NavigationContainer>
      <RootStackNavigator />
    </NavigationContainer>
  );
}
