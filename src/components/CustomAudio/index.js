import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { Player } from '@react-native-community/audio-toolkit';

export default function CustomAudio({ uri }) {
    const initializePlayer = () => {
        const player = new Player(uri, {
            autoDestroy: false
        });
    }
    useEffect(() => {
        initializePlayer();
    }, []);
    return (
        <View>
            
        </View>
    )
}