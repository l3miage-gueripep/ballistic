import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {HomePageNavigationProp, HomePageProps} from '../models/NavigationProps';
import { useLeaguesData } from '../states/UseLeaguesData';

export const LeaguesList = () => {
  const data = useLeaguesData();
  const navigation = useNavigation<HomePageNavigationProp>();

  return (
    <View style={styles.container}>
      {data &&
        data.map((league: any) => (
          <TouchableOpacity
            key={league.id}
            style={styles.league}
            onPress={() =>
              navigation.navigate('LeagueDetail', {leagueId: league.id})
            }>
            <Image source={{uri: league.image_path}} style={styles.image} />
            <Text style={styles.leagueName}>{league.name}</Text>
          </TouchableOpacity>
        ))}
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

export default LeaguesList;
