import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, Text, View ,Image, TouchableOpacity} from 'react-native';
import { StartNavigationProp } from '../models/navigation-props';

export const Start: React.FC<StartProps> = () => {
  const navigation = useNavigation<StartNavigationProp>();

  return (
    <View style={styles.container}>
        <Image source={require('../assets/images/ronaldo.png')} style={styles.startImage} />
        <TouchableOpacity
            style={styles.button}
              onPress={() =>
              navigation.navigate('HomePage')}>
            <Text style={styles.title}>GET STARTED </Text>
          </TouchableOpacity>
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
        fontSize: 30,
        fontWeight: 'bold',
        color:'#0496FF',
    },
    startImage:{
    width: 560,  // Utilise la largeur de l'écran
    height: 690,  // Utilise la hauteur de l'écran
    resizeMode: 'contain',
    transform: [{ rotate: '-12deg' }],
    },
    button:{
    backgroundColor:'white',
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: 20,
    paddingRight: 20,
    borderRadius: 8,
     borderWidth: 2,
    borderColor: '#0496FF',
    marginTop:10,
    }
});

export default Start;