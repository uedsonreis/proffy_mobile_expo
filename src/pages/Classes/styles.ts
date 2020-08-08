import { StyleSheet } from 'react-native'

export default StyleSheet.create({

    container: {
        backgroundColor: '#f0f0f7',
        flex: 1,
    },

    scroll: {
        marginTop: -35,
    },

    contentScroll: {
        paddingHorizontal: 16,
        paddingBottom: 8,
    },

    searchForm: {
        marginTop: 12,
        marginHorizontal: -20,
    },

    label: {
        fontFamily: 'Poppins_400Regular',
        color: '#d4c2ff',
    },

    input: {
        backgroundColor: 'white',
        justifyContent: 'center',
        paddingHorizontal: 16,
        marginBottom: 16,
        borderRadius: 8,
        marginTop: 4,
        height: 54,
    },

    inputGroup: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    inputBlock: {
        width: '48%',
    },

    applyButton: {
        backgroundColor: '#04d361',
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 8,
        height: 56,
    },

    applyButtonText: {
        fontFamily: 'Archivo_700Bold',
        color: 'white',
        fontSize: 16,
    },

})