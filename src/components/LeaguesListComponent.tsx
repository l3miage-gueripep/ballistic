import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { HomePageNavigationProp } from '../models/navigation-props';
import { useLeaguesData } from '../states/UseLeaguesListState';

export const LeaguesListComponent = () => {
  const data = useLeaguesData();
  const navigation = useNavigation<HomePageNavigationProp>();

  return (
    <View style={styles.container}>
      {data?.map((league: any) => (
          <TouchableOpacity
            key={league.id}
            style={styles.league}
            onPress={() =>
              navigation.navigate('StandingsPage', {leagueId: league.id})
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

     backgroundColor:'purple',
  },
  image: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  leagueName: {
    fontSize: 18,
    color:'green',
  },
});

export default LeaguesListComponent;
