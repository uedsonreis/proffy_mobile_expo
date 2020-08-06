import { StyleSheet } from 'react-native'

export default StyleSheet.create({

    container: {
        backgroundColor: '#8257E5',
        justifyContent: 'center',
        padding: 40,
        flex: 1,
    },

    content: {
        justifyContent: 'center',
        flex: 1,
    },

    title: {
        fontFamily: 'Archivo_700Bold',
        color: 'white',
        lineHeight: 37,
        fontSize: 32,
    },

    description: {
        fontFamily: 'Poppins_400Regular',
        color: '#d4c2ff',
        lineHeight: 26,
        marginTop: 24,
        maxWidth: 320,
        fontSize: 16,
    },

    okButton: {
        backgroundColor: '#04d361',
        justifyContent: "center",
        alignItems: 'center',
        marginVertical: 40,
        borderRadius: 8,
        height: 58,
    },

    textOkButton: {
        fontFamily: 'Archivo_700Bold',
        color: 'white',
        fontSize: 16,
    },

})