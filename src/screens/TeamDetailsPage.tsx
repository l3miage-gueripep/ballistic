import { useNavigation, useRoute } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { SceneMap, TabView, TabBar } from 'react-native-tab-view';
import TeamMatchesListComponent from '../components/TeamMatchesListComponent';
import TeamPlayersListComponent from '../components/TeamPlayersListComponent';
import { Match } from '../models/match';
import { HomePageNavigationProp, TeamDetailsNavigationRouteParams, TeamDetailsProps } from '../models/navigation-props';
import { Squad } from '../models/squad';
import { useTeamMatches } from '../states/UseTeamMatchesList';
import { useTeamPlayers } from '../states/UseTeamPlayersList';

export const TeamDetailsPage: React.FC<TeamDetailsProps> = () => {
  const route = useRoute();
  const navigation = useNavigation<HomePageNavigationProp>();
  const { teamId } = route.params as TeamDetailsNavigationRouteParams;
  const matches = useTeamMatches(teamId);
  const squad = useTeamPlayers(teamId);

  // Tab view
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'first', title: 'Matches' },
    { key: 'second', title: 'Squad' },
  ]);

  return (
    <View style={styles.container}>
      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene(teamId, matches!, squad!)}
        onIndexChange={setIndex}
        style={styles.tabView} // Apply custom style to TabView
        renderTabBar={props => (
          <TabBar
            {...props}
            style={styles.tabBar} // Apply custom style to TabBar
            indicatorStyle={styles.indicator}
            labelStyle={styles.label}
          />
        )}
      />
    </View>
  );
};

const renderScene = (teamId: number, matches: Match[], squad: Squad) => SceneMap({
  first: () => (
    <View style={styles.scene}>
      <TeamMatchesListComponent matches={matches} teamId={teamId} />
    </View>
  ),
  second: () => (
    <View style={styles.scene}>
      <TeamPlayersListComponent squad={squad} teamId={teamId} />
    </View>
  ),
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  tabView: {
    backgroundColor: '#041020',
  },
  tabBar: {
    backgroundColor: '#041020',
  },
  indicator: {
    backgroundColor: 'white',
  },
  label: {
    color: 'white',
  },
  scene: {
    flex: 1,
    backgroundColor: '#041020',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default TeamDetailsPage;
