import { RouteProp, useRoute } from "@react-navigation/native";
import { Image, Text, View } from "react-native";
import { PlayerDetailsScreenNavigationRouteParams, PlayerDetailsScreenProps } from "../models/navigation-props";

export const PlayerDetailsScreen: React.FC<PlayerDetailsScreenProps> = () => {
    const route = useRoute<RouteProp<{ params: PlayerDetailsScreenNavigationRouteParams }, 'params'>>();
    const { player } = route.params;
    return (
        <View>
            <Text>Player Details</Text>
            <View>
                <Image source={{ uri: player.face_image }} style={styles.face} />
                <Image source={{ uri: player.country_flag }} style={styles.flag} />
            </View>

            <View>
                <Text>Last name: {player.lastname}</Text>
                <Text>First name: {player.firstname}</Text>
                <Text>Position: {player.position}</Text>
                <Text>Age: {player.getAge()}</Text>
            </View>


        </View>
    );
};

const styles = {
    flag: {
        width: 50,
        height: 50,
    },
    face: {
        width: 100,
        height: 100,
    },
};

export default PlayerDetailsScreen;