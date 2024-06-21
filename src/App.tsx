import React from 'react';
import { useColorScheme } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { RootStackParamList } from './models/navigation-props';
import HomePage from './screens/HomePage';
import StandingsScreen from './screens/StandingsScreen';
import TeamDetailsPage from './screens/TeamDetailsPage';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  const Stack = createStackNavigator<RootStackParamList>();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomePage">
        <Stack.Screen name="HomePage" component={HomePage} />
        <Stack.Screen name="StandingsPage" component={StandingsScreen} />
        <Stack.Screen name="TeamDetailsPage" component={TeamDetailsPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
