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
      <View>
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

        <Text>
          {item.type}
          {isGoal ? (
            <Text>
              !!!!!!!!!!!!!!!!!!
            </Text>
          ) : null} - {
            isSubstitution ? (
              <Text>
                In: 
              </Text>
            ) : null
          }{item.player?.display_name}
        </Text>
        {
          isSubstitution ? (
            <Text>
              Out: {item.related_player?.display_name}
            </Text>
          ) : null
        }
        <Text>{item.minute}
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
    marginRight: 10,
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
  awayEvent: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    backgroundColor: 'lightgray',
  },

});

export default MatchEventsListComponent;
