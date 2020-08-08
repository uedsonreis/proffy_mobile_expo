import React, { useEffect, useState } from 'react'
import { Text, View, Image, TouchableOpacity } from 'react-native'
import { RectButton } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'

import api from '../../services/api'

import landingImg from '../../assets/images/landing.png'
import studyIcon from '../../assets/images/icons/study.png'
import classIcon from '../../assets/images/icons/give-classes.png'
import heartIcon from '../../assets/images/icons/heart.png'

import styles from './styles'

function Landing() {

    const [total, setTotal] = useState<number>(0)

    const navigation = useNavigation()
    navigation.setOptions({ headerTransparent: true, headerRight: undefined })

    useEffect(() => {
        api.getConnections().then(connections => setTotal(connections.total))
    }, [])

    function goToTeacherPage() {
        navigation.navigate('teacher')
    }

    function goToStudyTabs() {
        navigation.navigate('study')
    }

    return (
        <View style={styles.container}>
            <Image source={landingImg} style={styles.banner} />

            <Text style={styles.title}>
                Seja bem-vindo, {'\n'}
                <Text style={styles.titleBold}>O que deseja fazer?</Text>
            </Text>

            <View style={styles.buttonsContainer}>
                <RectButton style={[styles.button, styles.buttonPrimary]} onPress={goToStudyTabs}>
                    <Image source={studyIcon} style={{ width: 40, height: 40 }} />
                    <Text style={styles.buttonText}>Estudar</Text>
                </RectButton>

                <RectButton style={[styles.button, styles.buttonSecondary]} onPress={goToTeacherPage}>
                    <Image source={classIcon} style={{ width: 34, height: 32 }} />
                    <Text style={styles.buttonText}>Dar aulas</Text>
                </RectButton>
            </View>

            <Text style={styles.totalConnections}>
                Total de {total} conexões já realizadas {' '}
                <Image source={heartIcon} style={{ width: 14, height: 12 }} />
            </Text>

        </View>
    )

}

export default Landing