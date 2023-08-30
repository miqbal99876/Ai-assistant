//import liraries
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Splash from '../screens/Splash';
import WelcomeScreen from '../screens/WelcomeScreen';
import { RootStackParamList } from '../screens/constraints';
import ChatScreen from '../screens/ChatScreen';

const Stack = createNativeStackNavigator<RootStackParamList>();
// create a component
const MainStack = () => {
    return (
        <NavigationContainer >
            <Stack.Navigator initialRouteName='Splash' screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Splash" component={Splash} />
                <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
                <Stack.Screen name="ChatScreen" component={ChatScreen} />

            </Stack.Navigator>
        </NavigationContainer>
    );
};
//make this component available to the app
export default MainStack;
