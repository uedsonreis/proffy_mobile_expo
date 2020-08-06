import React from 'react'
import { Text, View } from 'react-native'

import { Title } from '../../components/Header'

import styles from './styles'

function Classes() {

    return (
        <View style={styles.container}>
            <Title text="Professores disponíveis" />
            <Text>Alunos</Text>
        </View>
    )

}

export default Classes