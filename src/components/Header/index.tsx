import React, { ReactNode } from 'react'
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

type TitleProps = { text: string, right?: ReactNode, children?: ReactNode }

export function Title({ text, right, children }: any) {
    return (
        <View style={styles.container}>
            <View style={styles.titleHeader}>
                <Text style={styles.titleText}>{text}</Text>
                {right}
            </View>
            {children}
        </View>
    )
}
