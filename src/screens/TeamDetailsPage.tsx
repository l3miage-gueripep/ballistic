import { useRoute } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { SceneMap, TabView } from 'react-native-tab-view';
import TeamMatchesListComponent from '../components/TeamMatchesListComponent';
import TeamPlayersListComponent from '../components/TeamPlayersListComponent';
import { Match } from '../models/match';
import { TeamDetailsNavigationRouteParams, TeamDetailsProps } from '../models/navigation-props';
import { Squad } from '../models/squad';
import { useTeamMatches } from '../states/UseTeamMatchesList';
import { useTeamPlayers } from '../states/UseTeamPlayersList';

export const TeamDetailsPage: React.FC<TeamDetailsProps> = () => {

  const route = useRoute();
  const { teamId } = route.params as TeamDetailsNavigationRouteParams;
  const matches = useTeamMatches(teamId);
  const squad = useTeamPlayers(teamId);

  //tab view
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
      />
    </View>
  );
};

const renderScene = (teamId: number, matches: Match[], squad: Squad) => SceneMap({
  first: () => <TeamMatchesListComponent matches={matches} teamId={teamId} />,
  second: () => <TeamPlayersListComponent squad={squad}  teamId={teamId} />,
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  league: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },
  image: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  leagueName: {
    fontSize: 18,
  },
});

export default TeamDetailsPage;
