import React from 'react'
import { ScrollView, View } from 'react-native'
import { connect } from 'react-redux'

import { Title } from '../../components/Header'
import TeacherItem from '../../components/TeacherItem'
import { Class } from '../../domain/entities'

import styles from './styles'

type Props = { favorites: Class[] }

function Favorite({ favorites }: Props) {

    return (
        <View style={styles.container}>
            <Title text="Meus professores favoritos" />
            
            <ScrollView style={styles.scroll} contentContainerStyle={styles.contentScroll}>
                {favorites.map(objClass => (
                    <TeacherItem key={objClass.id} objClass={objClass} isFavorite />
                ))}
            </ScrollView>

        </View>
    )
}

function mapToState(state: any) {
    return { favorites: state.favorites };
}

export default connect(mapToState)(Favorite)