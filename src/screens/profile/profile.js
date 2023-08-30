//import liraries
import React, { Component } from 'react';
import { View, Text, } from 'react-native';
import styles from './profile-stlyes';
import { Banana, Home } from '../../assets/svgs';


// create a component
const Profile = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.profile}>Profile Screen</Text>

            <Home />
            <Banana />

        </View>
    );
};
//make this component available to the app
export default Profile;
