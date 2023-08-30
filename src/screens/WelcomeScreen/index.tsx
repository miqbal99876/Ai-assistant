//import liraries
import React from 'react';
import { View, Text, Image, TouchableOpacity, } from 'react-native';
import { styles } from './styles';
import { WelcomeIcon } from '../../assets/images';
import { UserNavigationPropType, } from '../constraints';

// create a component
const WelcomeScreen: React.FC<UserNavigationPropType> = (props) => {
    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.title}>React native Ai</Text>
                <Text style={styles.subTitle}>Futture is here, power by Ai</Text>
            </View>
            <Image source={WelcomeIcon} style={styles.icon} />
            <TouchableOpacity onPress={() => props.navigation.navigate('ChatScreen')} style={styles.btn}>
                <Text style={styles.getStarted}>Get started</Text>
            </TouchableOpacity>
        </View>
    );
};


//make this component available to the app
export default WelcomeScreen;
