import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { DailyMatchesListComponent } from '../components/DailyMatchesListComponent';
import LeaguesListComponent from '../components/LeaguesListComponent';
import { HomePageProps, TeamDetailsNavigationRouteParams, TeamDetailsProps } from '../models/navigation-props';
import TeamDetailsComponent from '../components/TeamDetailsComponent';
import { useRoute } from '@react-navigation/native';

export const TeamDetailsPage: React.FC<TeamDetailsProps> = () => {
    const route = useRoute();
    const { teamId } = route.params as TeamDetailsNavigationRouteParams;
  return (
    <View style={styles.container}>
        <Text>bonjour</Text>
        <TeamDetailsComponent teamId={teamId}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
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
