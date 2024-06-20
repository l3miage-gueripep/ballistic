import React from 'react';
import { useColorScheme } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { RootStackParamList } from './models/navigation-props';
import HomePage from './screens/HomePage';
import StandingsScreen from './screens/StandingsScreen';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  const Stack = createStackNavigator<RootStackParamList>();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomePage">
        <Stack.Screen name="HomePage" component={HomePage} />
        <Stack.Screen name="StandingsPage" component={StandingsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
