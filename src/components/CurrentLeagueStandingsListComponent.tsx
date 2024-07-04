import { useNavigation } from '@react-navigation/native';
import { FlatList, Image, StatusBar, StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LeagueStanding } from '../models/league-standing';
import {
  CurrentLeagueStandingsListComponentProps,
  StandingsScreenNavigationProp,
} from '../models/navigation-props';
import { useCurrentLeagueStandingsListState } from '../states/UseCurrentLeagueStandingsListState';

export const CurrentLeagueStandingsListComponent = ({
  leagueId,
}: CurrentLeagueStandingsListComponentProps) => {
  const { leagueStandingsList, loading, error } =
    useCurrentLeagueStandingsListState(leagueId);

  const navigation = useNavigation<StandingsScreenNavigationProp>();
  const renderItem = ({ item, index }: { item: LeagueStanding; index: number }) => (
    <View >
      <TouchableOpacity style={styles.item}
        key={leagueId}
        onPress={() =>
          navigation.navigate('TeamDetailsPage', { teamId: item.team.id })
        }>
        <View style={styles.team}>
          <Text style={styles.index}>{index + 1}. </Text>

          <Image source={{ uri: item.team.logo }} style={styles.image} />
          <Text style={styles.color}>{item.team.name}</Text>
        </View>
        <Text style={styles.color}>{item.points}</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.color}>Team</Text>
        <Text style={styles.color}>Points</Text>
      </View>
      <FlatList
        data={leagueStandingsList}
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
    backgroundColor:'#041020',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
  },
  color:{
  color:'white',
  },
  index: {
    marginRight: 10, // Adjust spacing as needed
    fontWeight: 'bold', // Optional: makes the number stand out
    color:'white',
  },
  item: {
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