import { RouteProp, useRoute } from "@react-navigation/native";
import { Image, Text, View } from "react-native";
import { PlayerDetailsScreenNavigationRouteParams, PlayerDetailsScreenProps } from "../models/navigation-props";

export const PlayerDetailsScreen: React.FC<PlayerDetailsScreenProps> = () => {
    const route = useRoute<RouteProp<{ params: PlayerDetailsScreenNavigationRouteParams }, 'params'>>();
    const { player } = route.params;
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Player Details</Text>
            <View style={styles.playerCard}>
                <View style={styles.playerImg}>
                    <Image source={{ uri: player.face_image }} style={styles.face} />
                </View>

                <View style={styles.display}>
                    <View style={styles.detail}>
                        <Text style={styles.text}>{player.lastname}</Text>
                        <Text  style={styles.firstname}> {player.firstname}</Text>
                        <Text  style={styles.text}> {player.getAge()} years old</Text>
                    </View>
                    <Image source={{ uri: player.country_flag }} style={styles.flag} />
                </View>
                        <Text  style={styles.position}> {player.position}</Text>

            </View>


        </View>
    );
};

const styles = {
container:{
backgroundColor:'#041020',
},
    flag: {
        width: 70,
        height: 50,
        marginLeft:10,
        marginRight:10,
        marginTop:40,
    },
    playerImg:{
    width: 300,
    height: 300,
    padding:20,
    backgroundColor:'#F2F2F2',
    borderRadius:150,
    alignItems:'center',
    },
    face: {
    marginTop:20,
        width: 200,
        height: 200,
    },
    title:{
        fontSize:27,
        fontWeight:'bold',
        textAlign:'center',
        marginTop:30,
        marginBottom:50,
        color:'white',
    },
    playerCard:{
        backgroundColor:'#1C7EC4',
        marginTop:20,
        marginBottom:120,
        marginLeft:30,
        marginRight:30,
        paddingTop:60,
        paddingBottom:60,
        borderRadius:20,
        alignItems:'center',
        borderWidth: 1, // Thickness of the border
            borderColor: 'white', // Color of the border
            borderRadius: 10, // Optional: Rounded corners

    },
    display: {
        flexDirection: 'row',
    },
    detail:{
    margin:10,
    padding:10,
    },
    text:{
    fontSize:20,
    fontWeight:'bold',
        color:'white',
    },
     firstname:{
     fontSize:30,
     fontWeight:'bold',
         color:'white',
         width: 200,
     },
      position:{
          fontSize:50,
          fontWeight:'bold',
              color:'white',
      }
};

export default PlayerDetailsScreen;