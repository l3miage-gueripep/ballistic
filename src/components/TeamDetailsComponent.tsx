import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Image, StatusBar, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {
  HomePageNavigationProp,
  TeamDetailsComponentProps,
} from '../models/navigation-props';
import {useLeaguesData} from '../states/UseLeaguesListState';
import {useTeamMatches} from '../states/UseTeamMatchesList';
import {FlatList} from 'react-native-gesture-handler';
import {SafeAreaView} from 'react-native-safe-area-context';
import { Match } from '../models/match';

export const TeamDetailsComponent: React.FC<TeamDetailsComponentProps> = ({
  teamId,
}) => {
  useTeamMatches(teamId);
  const navigation = useNavigation<HomePageNavigationProp>();
  const matches = useTeamMatches(teamId);

  const renderItem = ({item}: {item: Match}) => (
    <View>
      <TouchableOpacity style={styles.item}
        key={item.id}>
        <View style={styles.team}>
          <Image source={{uri: item.local_team.logo}} style={styles.image} />
          <Text>{item.local_team.name}</Text>
        </View>
        <View style={styles.team}>
          <Image source={{uri: item.away_team.logo}} style={styles.image} />
          <Text>{item.away_team.name}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );

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
    marginTop: StatusBar.currentHeight || 0,
    width: '100%',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
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

export default TeamDetailsComponent;
