import React from 'react'
import { Image, Text, View, Linking } from 'react-native'
import { RectButton } from 'react-native-gesture-handler'
import { connect } from 'react-redux'

import api from '../../services/api'
import { Class } from '../../domain/entities'
import { creators } from '../../domain/favorites'
import heartOutlineIcon from '../../assets/images/icons/heart-outline.png'
import notFavoriteIcon from '../../assets/images/icons/unfavorite.png'
import whatsappIcon from '../../assets/images/icons/whatsapp.png'

import styles from './styles'

type Props = { objClass: Class, isFavorite: boolean, add: Function, remove: Function }

function TeacherItem({ objClass, isFavorite, add, remove }: Props) {
    const { subject, user, cost } = objClass

    function linkToWhatsapp() {
        api.createNewConnection(user.id)
        Linking.openURL(`whatsapp://send?phone=${user.whatsapp}`)
    }

    return (
        <View style={styles.container}>
            
            <View style={styles.profile}>

                <Image style={styles.avatar} source={{ uri: user.avatar }} />

                <View style={styles.profileInfo}>
                    <Text style={styles.name}>{user.name}</Text>
                    <Text style={styles.subject}>{subject}</Text>
                </View>

            </View>
            
            <Text style={styles.bio}>{user.bio}</Text>

            <View style={styles.footer}>

                <Text style={styles.price}>
                    Valor da hora aula: {' '}
                    <Text style={styles.priceValue}>R$ {Number(cost).toFixed(2)}</Text>
                </Text>

                <View style={styles.buttonsContainer}>
                    { isFavorite ? (
                        <RectButton style={[styles.favoriteButton, styles.isFavorite]} onPress={() => remove(objClass)}>
                            <Image source={notFavoriteIcon} />
                        </RectButton>
                    ) : (
                        <RectButton style={styles.favoriteButton} onPress={() => add(objClass)}>
                            <Image source={heartOutlineIcon} />
                        </RectButton>
                    )}

                    <RectButton style={styles.contactButton} onPress={linkToWhatsapp}>
                        <Image source={whatsappIcon} />
                        <Text style={styles.contactButtonText}>Entrar em contato</Text>
                    </RectButton>
                </View>

            </View>

        </View>
    )
}

const mapActions = {
    add: creators.createAdd,
    remove: creators.createRemove,
}

export default connect(null, mapActions)(TeacherItem)