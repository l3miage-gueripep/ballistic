import React from 'react';
import { useColorScheme } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { RootStackParamList } from './models/navigation-props';
import Start from './screens/Start';
import HomePage from './screens/HomePage';
import MatchDetailsScreen from './screens/MatchDetailsScreen';
import PlayerDetailsScreen from './screens/PlayerDetailsScreen';
import StandingsScreen from './screens/StandingsScreen';
import TeamDetailsPage from './screens/TeamDetailsPage';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  const Stack = createStackNavigator<RootStackParamList>();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Start">
       <Stack.Screen name="Start" component={Start} options={{
                                                                title: 'SCORELY',
                                                             headerStyle: {
                                                               backgroundColor: '#041020',
                                                             },
                                                             headerTintColor: '#0496FF',
                                                             headerTitleStyle: {
                                                               fontWeight: 'bold',
                                                             },
                                                           }}/>
        <Stack.Screen name="HomePage" component={HomePage} options={{
                                                                        title: 'HOME',

                                                                    headerStyle: {
                                                                      backgroundColor: '#041020',
                                                                    },
                                                                    headerTintColor: '#fff',
                                                                    headerTitleStyle: {
                                                                      fontWeight: 'bold',
                                                                    },
                                                                  }}/>
        <Stack.Screen name="StandingsPage" component={StandingsScreen} options={{
                                                                                title: 'STANDINGS',

                                                                                 headerStyle: {
                                                                                   backgroundColor: '#041020',
                                                                                 },
                                                                                 headerTintColor: '#fff',
                                                                                 headerTitleStyle: {
                                                                                   fontWeight: 'bold',
                                                                                 },
                                                                               }}/>
        <Stack.Screen name="TeamDetailsPage" component={TeamDetailsPage} options={{
                                                                              title: 'TEAM DETAILS',

                                                                              headerStyle: {
                                                                                backgroundColor: '#041020',
                                                                              },
                                                                              headerTintColor: '#fff',
                                                                              headerTitleStyle: {
                                                                                fontWeight: 'bold',
                                                                              },
                                                                            }} />
        <Stack.Screen name="PlayerDetailsScreen" component={PlayerDetailsScreen} options={{
                                                                                title: 'PLAYER DETAILS',

                                                                                  headerStyle: {
                                                                                    backgroundColor: '#041020',
                                                                                  },
                                                                                  headerTintColor: '#fff',
                                                                                  headerTitleStyle: {
                                                                                    fontWeight: 'bold',
                                                                                  },
                                                                                }}/>
        <Stack.Screen name="MatchDetailsScreen" component={MatchDetailsScreen}options={{
                                                                        title: 'MATCH DETAILS',

                                                                                   headerStyle: {
                                                                                     backgroundColor: '#041020',
                                                                                   },
                                                                                   headerTintColor: '#fff',
                                                                                   headerTitleStyle: {
                                                                                     fontWeight: 'bold',
                                                                                   },
                                                                                 }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
