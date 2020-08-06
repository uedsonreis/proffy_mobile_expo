import React from 'react'
import { Image, Text, View } from 'react-native'
import { BorderlessButton } from 'react-native-gesture-handler'

import logoImg from '../../assets/images/logo.png'

import styles from './styles'

export function Logo() {
    return (
        <BorderlessButton style={styles.logoContainer}>
            <Image source={logoImg} resizeMode="contain" style={styles.logoImage} />
        </BorderlessButton>
    )
}

export function Title({ text }: any) {
    return (
        <View style={styles.container}>
            <Text style={styles.titleText}>{text}</Text>
        </View>
    )
}
