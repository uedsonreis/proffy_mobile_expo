import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import LandingPage from '../pages/Landing'
import TeacherPage from '../pages/Teacher'

import StudyTabs from './StudyTabs'
import { Logo } from '../components/Header'

const { Navigator, Screen } = createStackNavigator()

function Router() {
    return (
        <NavigationContainer>
            <Navigator headerMode="screen" screenOptions={{
                headerRight: () => <Logo />,
                headerTintColor: 'white',
                headerTransparent: true,
                headerBackTitle: ' ',
                title: '',
            }}>
                <Screen name="landing" component={LandingPage} />
                <Screen name="study" component={StudyTabs} />
                <Screen name="teacher" component={TeacherPage} />
            </Navigator>
        </NavigationContainer>
    )
}

export default Router