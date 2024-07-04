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
    <View style={styles.vue}>
            <View><Text style={styles.textCenter}>{match.date}</Text></View>

        <View style={[styles.item, matchResult === MatchResultEnum.Win ? styles.won : matchResult === MatchResultEnum.Loss ? styles.lost : styles.draw]}>
              <View style={styles.team}>
                <Image source={{ uri: match.local_team.logo }} style={styles.image} />
                <Text style={styles.teamName} >{match.local_team.name}</Text>
              </View>
              <View style={styles.scoreContainer}>
                   <Text style={styles.score}>{match.local_score} - {match.away_score}</Text>
              </View>
              <View style={styles.team}>
                <Image source={{ uri: match.away_team.logo }} style={styles.image} />
                <Text  style={styles.teamName}>{match.away_team.name}</Text>
              </View>

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
    backgroundColor: '#a7c957',
  },
  lost: {
    backgroundColor: '#e01e37',
  },
  draw: {
    backgroundColor: '#fcf6bd',
  },
  team: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  image: {
    width: 50,
    height: 50,
  },
  vue:{
  backgroundColor:'#041020',
    },
textCenter:{
textAlign:'center',
  color:'white',

},
score:{
fontWeight:'bold',
fontSize:23,
color:'black',
},
scoreContainer: {
      justifyContent: 'center', // Centers the score text vertically
},
teamName:{
color :'black',
},
});