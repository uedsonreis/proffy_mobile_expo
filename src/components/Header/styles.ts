import { StyleSheet } from 'react-native'
import Constants from 'expo-constants'

export default StyleSheet.create({

    container: {
        backgroundColor: '#8257e5',
        paddingTop: 50 + Constants.statusBarHeight,
        padding: 40,
    },

    logoContainer: {
        marginHorizontal: 10,
    },

    logoImage: {
        width: 40,
        height: 15,
    },

    titleText: {
        fontFamily: 'Archivo_700Bold',
        lineHeight: 32,
        color: 'white',
        fontSize: 24,
    },

})