import { StyleSheet } from 'react-native'

export default StyleSheet.create({

    container: {
        backgroundColor: '#8257E5',
        justifyContent: 'center',
        padding: 40,
        flex: 1,
    },

    banner: {
        width: '100%',
        height: 202,
        resizeMode: 'contain',
    },

    title: {
        fontFamily: 'Poppins_400Regular',
        lineHeight: 30,
        color: '#fff',
        marginTop: 80,
        fontSize: 20,
    },

    titleBold: {
        fontFamily: 'Poppins_600SemiBold',
    },

    buttonsContainer: {
        flexDirection: 'row',
        marginTop: 40,
        justifyContent: 'space-between',
    },

    button: {
        height: 130,
        width: '48%',
        backgroundColor: '#333',
        borderRadius: 8,
        padding: 24,
        justifyContent: 'space-between'
    },

    buttonPrimary: {
        backgroundColor: '#9871f5',
    },

    buttonSecondary: {
        backgroundColor: '#04d361',
    },
    
    buttonText: {
        fontFamily: 'Archivo_700Bold',
        color: '#fff',
        fontSize: 20,
    },

    totalConnections: {
        fontFamily: 'Poppins_400Regular',
        color: '#d4c2ff',
        fontSize: 12,
        lineHeight: 20,
        marginTop: 40,
    },

})