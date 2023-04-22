import { View } from 'react-native'
import React from 'react'
import { Text } from 'react-native-paper'
import { colors } from '../../../theme/colors'
import moment from 'moment';

export default function CustomChatBubbleText({ text }) {
    return (
        <View style={{ padding: 8 }}>
            <Text style={{ color: colors.background }}>{text}</Text>
            <Text style={{ color: colors.background }}>{moment().format("hh:mm")}</Text>
        </View>
    )
}