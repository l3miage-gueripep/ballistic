import { RouteProp, useRoute } from "@react-navigation/native";
import { StyleSheet, View } from "react-native";
import MatchEventsListComponent from "../components/MatchEventsListComponent";
import { MatchResultComponent } from "../components/MatchResultComponent";
import { MatchDetailsScreenNavigationRouteParams, MatchDetailsScreenProps } from "../models/navigation-props";
import { useMatchEventsList } from "../states/UseMatchEventsList";

export const MatchDetailsScreen: React.FC<MatchDetailsScreenProps> = () => {
    
    const route = useRoute<RouteProp<{ params: MatchDetailsScreenNavigationRouteParams }, 'params'>>();
    const { match, teamId } = route.params;
    const events = useMatchEventsList(match.id);
    return (
        <View style={styles.container}>
            <MatchResultComponent match={match} teamId={teamId}/>
            <MatchEventsListComponent events={events!} localTeamId={match.local_team.id}></MatchEventsListComponent>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        backgroundColor:'#041020',

    },
    flag: {
        width: 50,
        height: 50,
    },
    face: {
        width: 100,
        height: 100,
    },
});

export default MatchDetailsScreen;