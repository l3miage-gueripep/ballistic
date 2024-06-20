import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { DailyMatchesListComponent } from '../components/DailyMatchesListComponent';
import LeaguesListComponent from '../components/LeaguesListComponent';
import { HomePageProps } from '../models/navigation-props';

export const HomePage: React.FC<HomePageProps> = () => {
  return (
    <View style={styles.container}>
        <Text style={styles.title}>Welcome to the Soccer App!</Text>
        <LeaguesListComponent></LeaguesListComponent>
        <DailyMatchesListComponent></DailyMatchesListComponent>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  league: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },
  image: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  leagueName: {
    fontSize: 18,
  },
});

export default HomePage;
