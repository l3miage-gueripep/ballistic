import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { useDailyMatchesList } from '../states/UseDailyMatchesList';

export const DailyMatchesListComponent = () => {
  const { date, matches } = useDailyMatchesList();
  return (
    <View style={styles.matchesContainer}>
      <Text>
        Matches on {date}
      </Text>
      {matches?.map((match, index) => (
        <View key={index} style={styles.matchItem}>
          <View style={styles.team}>
            <Image source={{ uri: match.local_team.logo }} style={styles.teamLogo} />
            <Text style={styles.teamName}>{match.local_team.name}</Text>
          </View>
          <Text style={styles.vs}>vs</Text>
          <View style={styles.team}>
            <Image source={{ uri: match.away_team.logo }} style={styles.teamLogo} />
            <Text style={styles.teamName}>{match.away_team.name}</Text>
          </View>
          <Text style={styles.startTime}>{match.date}</Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  matchesContainer: {
    flexDirection: 'column', // Correctly typed
  },
  matchItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10, // Example of adding space between items instead of using gap
  },
  team: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 10, // Example of adding space between items instead of using gap
  },
  teamLogo: {
    width: 50,
    height: 50,
    resizeMode: 'cover',
  },
  teamName: {
    fontWeight: 'bold',
  },
  vs: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  startTime: {
    marginLeft: 'auto',
    fontStyle: 'italic',
  },
});