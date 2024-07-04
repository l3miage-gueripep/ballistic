import React from 'react';
import { Image, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { ScrollView } from 'react-native-virtualized-view';

import { useNavigation } from '@react-navigation/native';
import {
  HomePageNavigationProp,
  TeamPlayersListComponentProps
} from '../models/navigation-props';
import { Player } from '../models/player';

export const TeamPlayersListComponent: React.FC<TeamPlayersListComponentProps> = ({
  squad, teamId
}) => {
  const navigation = useNavigation<HomePageNavigationProp>();
  const renderItem = ({ item }: { item: Player }) => {
    return (
      <TouchableOpacity style={styles.item} key={item.id} onPress={() =>
        navigation.navigate('PlayerDetailsScreen', { player: item })
      }>
        <Image source={{ uri: item.face_image }} style={styles.face} />
        <View style={styles.flagContainer}>
          <Image source={{ uri: item.country_flag }} style={styles.flag} />
        </View>
        <Text style={styles.name}>
          {item.display_name}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Forwards</Text>
      <FlatList
        data={squad.forwards}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
      />
      <Text style={styles.title}>Midfielders</Text>
      <FlatList
        data={squad.midfielders}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
      />
      <Text style={styles.title}>Defenders</Text>
      <FlatList
        data={squad.defenders}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
      />
      <Text style={styles.title}>Goalkeepers</Text>
      <FlatList
        data={squad.goalkeepers}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
      />
    </ScrollView>
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
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between', // Distribute space between children
  },
  face: {
    width: 50,
    height: 50,
    marginRight: 10,
    backgroundColor: 'white',
    borderRadius: 25, // Make it round
  },
  flagContainer: {
    flex: 1,
    alignItems: 'center', // Center the flag horizontally
  },
  flag: {
    width: 40,
    height: 25,
  },
  title: {
    fontSize: 27,
    fontWeight: 'bold',
    color: 'white',
    marginLeft: 15,
  },
  name: {
    color: 'white',
    width:90,
  }
});

export default TeamPlayersListComponent;
