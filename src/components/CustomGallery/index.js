import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import React from 'react'
import { topBarStyles } from '../../styles/TopBarStyles';
import Recents from './Recents';
import Gallery from './Gallery';
import { colors } from '../../theme/colors';

const Tab = createMaterialTopTabNavigator();

export default function CustomGallery() {
    return (
        <Tab.Navigator
            style={{ backgroundColor: colors.background }}
            screenOptions={topBarStyles}
            sceneContainerStyle={{ backgroundColor: colors.background }}
        >
            <Tab.Screen name="Recents" component={Recents} />
            <Tab.Screen name="Gallery" component={Gallery} />
        </Tab.Navigator>
    )
}