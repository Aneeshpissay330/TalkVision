import React from 'react'
import { View } from 'react-native';
import { useTheme } from 'react-native-paper';

const Home = () => {
    const theme = useTheme();
    return (
        <View style={{ flex: 1, backgroundColor: theme.colors.background }}>

        </View>
    )
}

export default Home;