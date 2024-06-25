import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
  MatchDetailsScreenNavigationProp,
  TeamMatchesListComponentProps
} from '../models/navigation-props';
import { MatchResultComponent } from './MatchResultComponent';

export const TeamMatchesListComponent: React.FC<TeamMatchesListComponentProps> = ({
  matches, teamId
}) => {
  const navigation = useNavigation<MatchDetailsScreenNavigationProp>();

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={matches}
        renderItem={({ item }) => MatchResultComponent({ match: item, teamId, navigation })}
        keyExtractor={item => item.id.toString()}
        style={styles.test}
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
  test:{
  backgroundColor:'red',}
});

export default TeamMatchesListComponent;
