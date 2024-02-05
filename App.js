import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import LoginPage from './Screens/LoginPage';
import LandingPage from './Screens/LandingPage';
import LogsPage from './Screens/LogsPage';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginPage} />
        <Stack.Screen name="Landing" component={LandingPage} />
        <Stack.Screen name="Logs" component={LogsPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
