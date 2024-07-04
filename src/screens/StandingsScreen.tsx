import { useRoute } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { CurrentLeagueStandingsListComponent } from '../components/CurrentLeagueStandingsListComponent';
import { StandingsScreenNavigationRouteParams, StandingsScreenProps } from '../models/navigation-props';

export const StandingsScreen: React.FC<StandingsScreenProps> = () => {
    const route = useRoute();
    const { leagueId } = route.params as StandingsScreenNavigationRouteParams;

    return (
        <View style={styles.container}>
            <CurrentLeagueStandingsListComponent leagueId={leagueId}></CurrentLeagueStandingsListComponent>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'#041020',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16,
    },
});

export default StandingsScreen;