import React from 'react';
import { Image, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { ScrollView } from 'react-native-virtualized-view';

import {
  TeamPlayersListComponentProps
} from '../models/navigation-props';
import { Player } from '../models/player';

export const TeamPlayersListComponent: React.FC<TeamPlayersListComponentProps> = ({
  squad, teamId
}) => {
  const renderItem = ({ item }: { item: Player }) => {
    return (<View>
      <TouchableOpacity style={[styles.item]}
        key={item.id}>
        <Image source={{ uri: item.face_image }} style={styles.face} />
        <Image source={{ uri: item.country_flag }} style={styles.flag} />
        <Text>
          {item.name}
        </Text>

      </TouchableOpacity>
    </View>);
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
});

export default TeamPlayersListComponent;
