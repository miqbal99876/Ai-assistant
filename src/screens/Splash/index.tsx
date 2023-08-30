//import liraries
import React from 'react';
import { Image, View } from 'react-native';
import { Home } from '../../assets/svgs';
import { styles } from './styles';
import { UserNavigationPropType, } from '../constraints';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';


// create a component
const Splash: React.FC<UserNavigationPropType> = (props) => {
    setTimeout(() => {
        props.navigation.navigate('WelcomeScreen')

    }, 2000)

    return (
        <View style={styles.container}>
            <Image
                source={require('../../assets/images/bot.png')}
                style={{ height: hp(15), width: hp(15) }}
            />
        </View>
    );
};

// define your styles


export default Splash;
