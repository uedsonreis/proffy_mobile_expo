import { StyleSheet } from 'react-native'

export default StyleSheet.create({

    container: {
        backgroundColor: 'white',
        borderColor: '#e6e6f0',
        overflow: 'hidden',
        marginBottom: 16,
        borderRadius: 8,
        borderWidth: 1,
    },

    profile: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 24,
    },

    avatar: {
        backgroundColor: '#eee',
        borderRadius: 32,
        height: 64,
        width: 64,
    },

    profileInfo: {
        marginLeft: 16,
    },

    name: {
        fontFamily: 'Archivo_700Bold',
        color: '#32264d',
        fontSize: 20,
    },

    subject: {
        fontFamily: 'Poppins_400Regular',
        color: '#6a6180',
        fontSize: 12,
        marginTop: 4,
    },

    bio: {
        fontFamily: 'Poppins_400Regular',
        marginHorizontal: 24,
        marginBottom: 24,
        color: '#6a6180',
        lineHeight: 24,
        fontSize: 14,
    },

    footer: {
        backgroundColor: '#fafafc',
        padding: 24,
        alignItems: "center",
    },

    price: {
        fontFamily: 'Poppins_400Regular',
        color: '#6a6180',
        fontSize: 14,
    },

    priceValue: {
        fontFamily: 'Archivo_700Bold',
        color: '#8257e5',
        fontSize: 16,
    },

    buttonsContainer: {
        flexDirection: 'row',
        marginTop: 16,
    },

    favoriteButton: {
        backgroundColor: '#8257e5',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
        marginRight: 8,
        width: 56,
        height: 56,
    },

    isFavorite: {
        backgroundColor: '#e33d3d',
    },

    contactButton: {
        backgroundColor: '#04d361',
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 8,
        marginRight: 8,
        height: 56,
        flex: 1,
    },

    contactButtonText: {
        fontFamily: 'Archivo_700Bold',
        marginLeft: 16,
        color: 'white',
        fontSize: 16,
    },

})