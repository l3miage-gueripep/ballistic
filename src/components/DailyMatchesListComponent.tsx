import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { useDailyMatchesList } from '../states/UseDailyMatchesList';

export const DailyMatchesListComponent = () => {
  const { date, matches } = useDailyMatchesList();
  return (
    <View style={styles.matchesContainer}>
      <Text style={styles.match}>
        Matches on {date}
      </Text>
      {matches?.map((match, index) => (
        <View key={index} style={styles.matchItem}>
          <View style={styles.team}>
            <Image source={{ uri: match.local_team.logo }} style={styles.teamLogo} />
            <Text style={styles.teamName}>{match.local_team.name}</Text>
          </View>
          <Text style={styles.startTime}>{match.date}</Text>
          <View style={styles.team}>
            <Image source={{ uri: match.away_team.logo }} style={styles.teamLogo} />
            <Text style={styles.teamName}>{match.away_team.name}</Text>
          </View>

        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  matchesContainer: {
    flexDirection: 'column',
    padding: 20,
  },
  matchItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    backgroundColor: '#0B192D',
    padding:10,
  },
  team: {
    flexDirection: 'column',
    alignItems: 'center',
    marginRight: 10,
  },
  teamLogo: {
    width: 50,
    height: 50,
    resizeMode: 'cover',
  },
  teamName: {
    fontWeight: 'bold',
    width: 90,
    textAlign: 'center',
    marginTop:5,
    color:'white'
  },
  startTime: {
    marginLeft: 'auto',
    fontStyle: 'italic',
    color: '#D9D9D9',
  },
  match: {
      fontSize: 21,
      marginBottom: 10,
      color: 'white',
      fontWeight: 'bold',
  },
});