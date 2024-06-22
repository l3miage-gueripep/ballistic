import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Match } from '../models/match';
import MatchResultEnum from '../models/match-result-enum';

const MatchResultContentComponent = ({ match, teamId: teamId }: { match: Match; teamId: number }) => {
  const isLocal = match.local_team.id === teamId;
  const { teamScore, opponentScore } = isLocal
    ? { teamScore: match.local_score!, opponentScore: match.away_score! }
    : { teamScore: match.away_score!, opponentScore: match.local_score! };

  const matchResult: MatchResultEnum = teamScore > opponentScore ? MatchResultEnum.Win : teamScore < opponentScore ? MatchResultEnum.Loss : MatchResultEnum.Draw;

  return (
    <View style={[styles.item, matchResult === MatchResultEnum.Win ? styles.won : matchResult === MatchResultEnum.Loss ? styles.lost : styles.draw]}>
      <Text>
        {match.date}
      </Text>
      <View style={styles.team}>
        <Image source={{ uri: match.local_team.logo }} style={styles.image} />
        <Text>{match.local_team.name}</Text>
      </View>
      <Text>{match.local_score} - {match.away_score}</Text>
      <View style={styles.team}>
        <Image source={{ uri: match.away_team.logo }} style={styles.image} />
        <Text>{match.away_team.name}</Text>
      </View>
    </View>
  );
};


export const MatchResultComponent = ({ match, teamId, navigation }: { match: Match; teamId: number; navigation?: any }) => {

  return (<View>
    {
      navigation ? <TouchableOpacity
        key={match.id}
        onPress={() =>
          navigation.navigate('MatchDetailsScreen', { match, teamId: teamId})
        }
      >
        <MatchResultContentComponent match={match} teamId={teamId} />
      </TouchableOpacity>
        :
        <MatchResultContentComponent match={match} teamId={teamId} />

    }

  </View>);
};


const styles = StyleSheet.create({
  // Styles related to renderItem
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
  image: {
    width: 50,
    height: 50,
  },
});