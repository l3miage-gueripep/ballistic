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
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    padding: 20,
    marginBottom:20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',

  },
  league: {
    flexDirection: 'row',
    alignItems: 'center',
        justifyContent: 'center',
        margin: 20,
        width: 180,
        height: 180,
        borderRadius: 90,
        backgroundColor: 'white',
        borderWidth: 2,
        borderColor: '#0496FF',
  },
  image: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  leagueName: {
    fontSize: 18,
    color:'black',
  },
});

export default LeaguesListComponent;
