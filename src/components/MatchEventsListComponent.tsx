import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

import { SafeAreaView } from 'react-native-safe-area-context';
import { MatchEvent, MatchEventTypeEnum } from '../models/match-event';
import {
  MatchEventsListComponentProps
} from '../models/navigation-props';

export const MatchEventsListComponent: React.FC<MatchEventsListComponentProps> = ({
  events, localTeamId
}) => {
  const renderItem = ({ item }: { item: MatchEvent }) => {
    const isGoal = item.type === MatchEventTypeEnum.Goal;
    const isSubstitution = item.type === MatchEventTypeEnum.Substitution;
    const isYellowCard = item.type === MatchEventTypeEnum.YellowCard;
    const isRedCard = item.type === MatchEventTypeEnum.RedCard;
    const isOwnGoal = item.type === MatchEventTypeEnum.OwnGoal;
    const isPenalty = item.type === MatchEventTypeEnum.Penalty;
    const isHomeEvent = item.team_id === localTeamId;

    return (<View style={!isHomeEvent ? styles.awayEvent : null}>
      <View style={styles.test}>
        <View style={styles.eventHeader}>
          <Image source={{ uri: item.player?.face_image }} style={styles.face} />
          {
            isGoal || isOwnGoal || isPenalty ? (
              <Image source={require('../assets/images/football.png')} style={styles.goalIcon} />
            ) : null
          }
          {
            isYellowCard ? (
              <Image source={require('../assets/images/yellowcard.png')} style={styles.goalIcon} />
            ) : null
          }
          {
            isRedCard ? (
              <Image source={require('../assets/images/redcard.png')} style={styles.goalIcon} />
            ) : null
          }
          {
            isSubstitution ? (
              <View style={styles.eventHeader}>
                <Image source={require('../assets/images/substitution.png')} style={styles.goalIcon} />
                <Image source={{ uri: item.related_player?.face_image }} style={styles.face} />
              </View>
            ) : null
          }
        </View>

        <Text style={styles.text}>
          {item.type}
          {isGoal ? (
            <Text>
            </Text>
          ) : null} - {
            isSubstitution ? (
              <Text style={styles.text}>
                In: 
              </Text>
            ) : null
          }{item.player?.display_name}
        </Text>
        {
          isSubstitution ? (
            <Text style={styles.text}>
              Out: {item.related_player?.display_name}
            </Text>
          ) : null
        }
        <Text style={styles.text}>{item.minute}
          {item.extra_minute ? ` + ${item.extra_minute}` : ''}
        </Text>

      </View>

    </View>);
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={events}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
test:{borderBottomWidth: 2,
              borderBottomColor: 'white',},
  container: {
    flex: 1,
    width: '100%',
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
  face: {
    width: 50,
    height: 50,
    backgroundColor:'white',
    borderRadius:40,
    margin: 20,
  },
  flag: {
    width: 80,
    marginRight: 10,
  },
  title: {
    fontSize: 32,
  },
  goalIcon: {
    width: 50,
    height: 50,
  },
  eventHeader: {
    flexDirection: 'row',
    alignItems: 'center',

  },
  text:{
  color:'white',
  },
  awayEvent: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    backgroundColor: '#041020',
    paddingTop:20,
    borderBottomWidth: 1,
    borderBottomColor: 'white',
  },

});

export default MatchEventsListComponent;
