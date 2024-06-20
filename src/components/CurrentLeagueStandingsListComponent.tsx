import { FlatList, Image, StatusBar, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { LeagueStanding } from "../models/league-standing";
import { CurrentLeagueStandingsListComponentProps } from "../models/navigation-props";
import { useCurrentLeagueStandingsListState } from "../states/UseCurrentLeagueStandingsListState";

export const CurrentLeagueStandingsListComponent = ({leagueId} : CurrentLeagueStandingsListComponentProps) => {
    const { leagueStandingsList, loading, error } = useCurrentLeagueStandingsListState(leagueId);

    const renderItem = ({ item }: { item: LeagueStanding }) => (
        <View style={styles.item}>
            <View style={styles.team}>
                <Image source={{ uri: item.team.logo }} style={styles.image} />
                <Text>{item.team.name}</Text>
            </View>
            <Text>
                {item.points}
            </Text>

        </View>
    );

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Text>Team</Text>
                <Text>Points</Text>
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
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 20,
    },
    item: {
        backgroundColor: '#f9c2ff',
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
