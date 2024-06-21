import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Match } from '../models/match';
import MatchResult from '../models/match-result';
import {
  TeamMatchesListComponentProps
} from '../models/navigation-props';

export const TeamMatchesListComponent: React.FC<TeamMatchesListComponentProps> = ({
  matches, teamId
}) => {
  const renderItem = ({ item }: { item: Match }) => {
    const isLocal = item.local_team.id === teamId;
    const { teamScore, opponentScore } = isLocal
      ? { teamScore: item.local_score!, opponentScore: item.away_score! }
      : { teamScore: item.away_score!, opponentScore: item.local_score! };

    const matchResult: MatchResult = teamScore > opponentScore ? MatchResult.Win : teamScore < opponentScore ? MatchResult.Loss : MatchResult.Draw;

    return (<View>
      <TouchableOpacity style={[styles.item, matchResult === MatchResult.Win ? styles.won : matchResult === MatchResult.Loss ? styles.lost : styles.draw]}
        key={item.id}>
        <Text>
          {item.date.toLocaleDateString()}
        </Text>
        <View style={styles.team}>
          <Image source={{ uri: item.local_team.logo }} style={styles.image} />
          <Text>{item.local_team.name}</Text>
        </View>
        <Text>{item.local_score} - {item.away_score}</Text>
        <View style={styles.team}>
          <Image source={{ uri: item.away_team.logo }} style={styles.image} />
          <Text>{item.away_team.name}</Text>
        </View>
      </TouchableOpacity>
    </View>);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text>Team</Text>
        <Text>Points</Text>
      </View>
      <FlatList
        data={matches}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
  },
  item: {
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  won: {
    backgroundColor: 'green',
  },
  lost: {
    backgroundColor: 'red',
  },
  draw: {
    backgroundColor: 'yellow',
  },
  team: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    fontSize: 32,
  },
  image: {
    width: 50,
    height: 50,
  },
});

export default TeamMatchesListComponent;
