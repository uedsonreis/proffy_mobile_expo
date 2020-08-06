import React from 'react'
import { Text, View, ImageBackground } from 'react-native'

import giveClassImg from '../../assets/images/give-classes-background.png'

import styles from './styles'
import { RectButton } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'

function Teacher() {

    const navigation = useNavigation()
    navigation.setOptions({ headerTransparent: true, headerRight: undefined })

    return (
        <View style={styles.container}>
            <ImageBackground source={giveClassImg} resizeMode='contain' style={styles.content}>
                <Text style={styles.title}>Quer ser um professor?</Text>
                <Text style={styles.description}>Para começar, você precisa se cadastrar na nossa plataforma web.</Text>
            </ImageBackground>

            <RectButton style={styles.okButton} onPress={() => navigation.goBack()}>
                <Text style={styles.textOkButton}>Tudo bem!</Text>
            </RectButton>

        </View>
    )

}

export default Teacher