//import liraries
import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './login-stlyes';
import { Home } from '../../assets/svgs';


// create a component
const Login = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.login}>Login Screen</Text>
            <Home />
            <TouchableOpacity onPress={() => navigation.navigate('Profile')} style={styles.button}>
                <Text style={styles.next}>
                    Next...
                </Text>
            </TouchableOpacity>
        </View>
    );
};
//make this component available to the app
export default Login;
