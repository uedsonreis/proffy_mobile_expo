import React from 'react'
import { Text, View } from 'react-native'

import { Title } from '../../components/Header'

import styles from './styles'

function Favorite() {

    return (
        <View style={styles.container}>
            <Title text="Meus professores favoritos" />
            <Text>Favorite</Text>
        </View>
    )
}

export default Favorite