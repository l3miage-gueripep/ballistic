import { useRoute } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { CurrentLeagueStandingsListComponent } from '../components/CurrentLeagueStandingsListComponent';
import { StandingsPageNavigationRouteParams, StandingsPageProps } from '../models/navigation-props';

export const StandingsScreen: React.FC<StandingsPageProps> = () => {
    const route = useRoute();
    const { leagueId } = route.params as StandingsPageNavigationRouteParams;

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Standings</Text>
            <CurrentLeagueStandingsListComponent leagueId={leagueId}></CurrentLeagueStandingsListComponent>
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
        marginBottom: 16,
    },
});

export default StandingsScreen;