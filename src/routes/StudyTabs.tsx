import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Ionicons  } from '@expo/vector-icons'

import FavoritePage from '../pages/Favorite'
import ClassesPage from '../pages/Classes'

const { Navigator, Screen } = createBottomTabNavigator()

function StudyTabs() {
    return (
        <Navigator
            tabBarOptions={{
                tabStyle: { flexDirection: 'row', alignItems: 'center', justifyContent: 'center' },
                labelStyle: { fontFamily: 'Archivo_700Bold', fontSize: 13, marginLeft: 16 },
                iconStyle: { flex: 0, width: 20, height: 22 },
                style: { elevation: 0, shadowOpacity: 0 },
                inactiveBackgroundColor: '#fafafc',
                inactiveTintColor: '#c1bccc',
                activeTintColor: '#32644d',
            }}
        >
            <Screen name="classes" component={ClassesPage}
                options={{
                    tabBarLabel: 'Professores', tabBarIcon: ({ color, size, focused }) =>
                        <Ionicons name="ios-easel" size={size} color={focused ? '#8257e5' : color} />
                }}
            />
            <Screen name="favorites" component={FavoritePage}
                options={{
                    tabBarLabel: 'Favoritas', tabBarIcon: ({ color, size, focused }) =>
                        <Ionicons name="ios-heart" size={size} color={focused ? '#8257e5' : color} />
                }}
            />
        </Navigator>
    )
}

export default StudyTabs