import { ThemeColors } from './../../globals/constaints';
import { StyleSheet } from 'react-native';


export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: ThemeColors.white,
        alignItems: 'center'
    },
    icon: {
        height: 100,
        width: 100,
        resizeMode: 'contain',
        alignSelf: 'center',
        marginTop: 10,
        marginBottom: 20
    },
    chatContainer: {
        width: '90%',
        backgroundColor: '#a3a3a3',
        borderRadius: 10,
        paddingHorizontal: 10,
        paddingVertical: 10,
        opacity: 0.9,

    },
    assistanContainer: {
        backgroundColor: '#10b981',
        paddingHorizontal: 10,
        alignSelf: 'flex-start',
        marginBottom: 10,
        paddingVertical: 10,
        borderRadius: 5,
        marginTop: 10
    },
    user: {
        backgroundColor: ThemeColors.white,
        paddingVertical: 10,
        paddingHorizontal: 10,
        borderRadius: 5,
        alignSelf: 'flex-end'
    },
    assistant: {
        color: ThemeColors.white,
        fontSize: 12,
        lineHeight: 20
    },
    userText: {
        color: ThemeColors.black,
        fontSize: 12,
        lineHeight: 20
    },
    img: {
        height: 150,
        width: 150,
        marginTop: 10,
        marginBottom: 10,
        resizeMode: 'cover',
        borderRadius: 10
    },
    recordingIcon: {
        height: 100,
        width: 100
    },
    recordingContainr: {
        position: 'absolute',
        bottom: 0,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        width: '100%'
    },
    voiceLoading: {
        height: 100,
        width: 100
    },
    clear: {
        backgroundColor: 'grey',
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 20,
        textAlign: 'center'
    },
    stop: {
        backgroundColor: 'red',
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 20,
        textAlign: 'center'
    },
    buttonContainer: {
        flexDirection: 'row', // Arrange buttons horizontally
        alignItems: 'center', // Center items vertically
    },

});