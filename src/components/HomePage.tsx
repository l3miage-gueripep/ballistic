import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {fetchData} from '../services/Sportmonks';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {HomePageNavigationProp, HomePageProps} from '../models/NavigationProps';

export const HomePage: React.FC<HomePageProps> = () => {
  const [data, setData] = useState<League[] | null>();
  const navigation = useNavigation<HomePageNavigationProp>();

  useEffect(() => {
    fetchData('leagues')
      .then(result => {
        console.log(result); // Log the data
        setData(result.data); // Set the data state to the data array
      })
      .catch(error => console.error(error));
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to the Soccer App!</Text>
      {data &&
        data.map((league: any) => (
          <TouchableOpacity
            key={league.id}
            style={styles.league}
            onPress={() =>
              navigation.navigate('LeagueDetail', {leagueId: league.id})
            }>
            <Image source={{uri: league.image_path}} style={styles.image} />
            <Text style={styles.leagueName}>{league.name}</Text>
          </TouchableOpacity>
        ))}
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

export default HomePage;
