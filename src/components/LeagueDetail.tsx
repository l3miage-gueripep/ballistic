import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {
  LeagueDetailsPageProps,
  RootStackParamList,
} from '../models/NavigationProps';
import {Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {fetchData} from '../services/Sportmonks';

export const LeagueDetailsPage: React.FC<LeagueDetailsPageProps> = ({
  route,
  navigation,
}) => {
  const [data, setData] = useState<Standing[] | null>();
  const {leagueId} = route.params;

  useEffect(() => {
    fetchData('seasons/search/2024')
      .then(result => {
        console.log(result.data.find((x: any) => x.league_id === leagueId).id); // Log the data
        fetchData(
          `standings/seasons/${
            result.data.find((x: any) => x.league_id === leagueId).id
          }`,
        ).then(standings => {
          console.log(standings);
          setData(standings.data); // Set the data state to the data array
        });
      })
      .catch(error => console.error(error));
  }, []);

  return (
    <View>
      <Text>League ID: {leagueId}</Text>
      {data &&
        data.map((item: any, index: number) => (
          <View key={index}>
            <Text>Group ID: {item.group_id}</Text>
            <Text>ID: {item.id}</Text>
            <Text>League ID: {item.league_id}</Text>
            <Text>Participant ID: {item.participant_id}</Text>
            <Text>Points: {item.points}</Text>
            <Text>Position: {item.position}</Text>
            <Text>Result: {item.result}</Text>
            <Text>Round ID: {item.round_id}</Text>
            <Text>Season ID: {item.season_id}</Text>
            <Text>Sport ID: {item.sport_id}</Text>
            <Text>Stage ID: {item.stage_id}</Text>
            <Text>Standing Rule ID: {item.standing_rule_id}</Text>
          </View>
        ))}
    </View>
  );
};
