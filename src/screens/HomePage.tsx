import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {fetchData} from '../services/Sportmonks';
import {useNavigation} from '@react-navigation/native';
import {HomePageNavigationProp, HomePageProps} from '../models/NavigationProps';
import { League } from '../models/league';
import LeaguesList from '../components/LeaguesList';
import { DailyMatchesListComponent } from '../components/DailyMatchesListComponent';

export const HomePage: React.FC<HomePageProps> = () => {
  return (
    <View style={styles.container}>
        <Text style={styles.title}>Welcome to the Soccer App!</Text>
        <LeaguesList></LeaguesList>
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
