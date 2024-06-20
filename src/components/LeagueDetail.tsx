import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {
  LeagueDetailsPageProps,
  RootStackParamList,
} from '../models/NavigationProps';
import {Image, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {fetchData} from '../services/Sportmonks';
import { Team } from '../models/team';
import { Match } from '../models/match';
export const LeagueDetailsPage: React.FC<LeagueDetailsPageProps> = ({
  route,
  navigation,
}) => {
  const [date, setDate] = useState('2022-07-24');
  const [data, setData] = useState<Standing[] | null>();
  const [matches, setMatches] = useState<Match[] | null>();
  const {leagueId} = route.params;

useEffect(() => {
  fetchData(`fixtures/date/${date}`)
    .then(result => {
      // Filter fixtures for the selected league
      const filteredData = result.data.filter((fixture: any) => fixture.league_id === leagueId);
      setData(filteredData);

      // Process each fixture to find team details
      const matchesTemp: Match[] = [];
      const fetchTeamPromises = filteredData.map((fixture: any) => {
        const [team1Name, team2Name] = fixture.name.split(' vs ');
        // Fetch team 1 data
        return fetchData(`teams/search/${team1Name}`)
          .then(team1Data => {
            const team1 = new Team(team1Data.data[0].name, team1Data.data[0].image_path);
            // Fetch team 2 data
            return fetchData(`teams/search/${team2Name}`).then(team2Data => {
              const team2 = new Team(team2Data.data[0].name, team2Data.data[0].image_path);
              // Combine team1 and team2 data with the fixture
              return { team1, team2, fixture };
            });
          });
      });

      // Wait for all team details to be fetched
      Promise.all(fetchTeamPromises).then(results => {
        results.forEach(({ team1, team2, fixture }) => {
          console.log(results);
          const date = new Date(fixture.starting_at);
          // Create a match object for each fixture and add it to the matchesTemp array
          const match = new Match(team1, team2, date);
          matchesTemp.push(match);
        });

        // Update the state with all the matches
        setMatches(matchesTemp);
      }).catch(error => {
        console.error(error);
      });
    })
    .catch(error => console.error(error));
}, [leagueId]); // Added leagueId as a dependency
  return (
    <View style={styles.matchesContainer}>
      <Text>
        Matches on {date}
      </Text>
      {matches?.map((match, index) => (
        <View key={index} style={styles.matchItem}>
          <View style={styles.team}>
            <Image source={{ uri: match.local_team.logo }} style={styles.teamLogo} />
            <Text style={styles.teamName}>{match.local_team.name}</Text>
          </View>
          <Text style={styles.vs}>vs</Text>
          <View style={styles.team}>
            <Image source={{ uri: match.away_team.logo }} style={styles.teamLogo} />
            <Text style={styles.teamName}>{match.away_team.name}</Text>
          </View>
          <Text style={styles.startTime}>{match.date.toLocaleTimeString()}</Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  matchesContainer: {
    flexDirection: 'column', // Correctly typed
  },
  matchItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10, // Example of adding space between items instead of using gap
  },
  team: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 10, // Example of adding space between items instead of using gap
  },
  teamLogo: {
    width: 50,
    height: 50,
    resizeMode: 'cover',
  },
  teamName: {
    fontWeight: 'bold',
  },
  vs: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  startTime: {
    marginLeft: 'auto',
    fontStyle: 'italic',
  },
});