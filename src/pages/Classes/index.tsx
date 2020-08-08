import React, { useState, useEffect } from 'react'
import { ScrollView, Text, TextInput, View } from 'react-native'
import { BorderlessButton, RectButton } from 'react-native-gesture-handler'
import { Feather } from '@expo/vector-icons'
import { connect } from 'react-redux'

import api from '../../services/api'
import { Class } from '../../domain/entities'
import { Title } from '../../components/Header'
import TeacherItem from '../../components/TeacherItem'

import styles from './styles'

function FilterButton({ onPress }: any) {
    return (
        <BorderlessButton onPress={onPress}>
            <Feather name="filter" size={20} color="white" />
        </BorderlessButton>
    )
}

type Props = { favorites: Class[] }

function Classes({ favorites }: Props) {

    const [filterVisible, setFilterVisible] = useState(false)

    const [classes, setClasses] = useState<Class[]>([])
    const [subject, setSubject] = useState('')
    const [weekDay, setWeekDay] = useState('')
    const [time, setTime] = useState('')

    function handleFilterVisible() {
        setFilterVisible(!filterVisible)
    }

    async function filter(weekDayCode: string) {
        const data = await api.getClasses({ subject, weekDay: weekDayCode, time })
        setClasses(data)
        if (data.length > 0) handleFilterVisible()
    }

    async function handleApplyFilters() {
        let weekDayCode = ''

        if (weekDay) {
            switch(weekDay.trim().toLowerCase()) {
                case 'domingo': weekDayCode = '0'; break
                case 'segunda': weekDayCode = '1'; break
                case 'terça': weekDayCode = '2'; break
                case 'quarta': weekDayCode = '3'; break
                case 'quinta': weekDayCode = '4'; break
                case 'sexta': weekDayCode = '5'; break
                case 'sabado': weekDayCode = '6'; break
            }
        }

        filter(weekDayCode)
    }

    useEffect(() => {
        filter('')
    }, [])

    return (
        <View style={styles.container}>

            <Title text="Professores disponíveis" right={<FilterButton onPress={handleFilterVisible} />}>
                {filterVisible && (
                    <View style={styles.searchForm}>
                        <Text style={styles.label}>Matéria</Text>
                        <TextInput style={styles.input} placeholder="Qual a matéria?" value={subject} onChangeText={setSubject} />

                        <View style={styles.inputGroup}>
                            <View style={styles.inputBlock}>
                                <Text style={styles.label}>Dia da semana</Text>
                                <TextInput style={styles.input} placeholder="Qual o dia?" value={weekDay} onChangeText={setWeekDay} />
                            </View>

                            <View style={styles.inputBlock}>
                                <Text style={styles.label}>Horário</Text>
                                <TextInput style={styles.input} placeholder="Qual horário?" value={time} onChangeText={setTime} />
                            </View>
                        </View>

                        <RectButton style={styles.applyButton} onPress={handleApplyFilters}>
                            <Text style={styles.applyButtonText}>Aplicar</Text>
                        </RectButton>
                    </View>
                )}
            </Title>

            <ScrollView style={styles.scroll} contentContainerStyle={styles.contentScroll}>
                {classes.map(objClass => (
                    <TeacherItem
                        key={objClass.id} objClass={objClass}
                        isFavorite={favorites.find(obj => obj.id === objClass.id) ? true : false}
                    />
                ))}
            </ScrollView>
        </View>
    )

}

function mapToState(state: any) {
    return { favorites: state.favorites };
}

export default connect(mapToState)(Classes)