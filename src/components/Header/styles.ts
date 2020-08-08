import { StyleSheet } from 'react-native'
import Constants from 'expo-constants'

export default StyleSheet.create({

    container: {
        paddingTop: 50 + Constants.statusBarHeight,
        backgroundColor: '#8257e5',
        paddingBottom: 60,
        padding: 40,
    },

    logoContainer: {
        marginHorizontal: 10,
    },

    logoImage: {
        width: 40,
        height: 15,
    },

    titleHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },

    titleText: {
        fontFamily: 'Archivo_700Bold',
        lineHeight: 32,
        color: 'white',
        fontSize: 24,
    },

})