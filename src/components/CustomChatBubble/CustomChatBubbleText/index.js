import { View } from 'react-native'
import React from 'react'
import { Text } from 'react-native-paper'
import { colors } from '../../../theme/colors'
import moment from 'moment';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function CustomChatBubbleText({ text, isLeft }) {
    return (
        <View style={{ padding: 8, justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center', paddingTop: 4 }}>
            <Text style={{ color: colors.background }}>{text}</Text>
            <Text style={{ color: colors.background, fontSize: 10, marginLeft: 5, paddingTop: 20 }}>{moment().format("hh:mm")}</Text>
            {!isLeft && <MaterialCommunityIcons 
                name="check-all"
                size={18}
                style={{ marginLeft: 5, paddingTop: 15 }}
                color={colors.tertiary}
            />}
        </View>
    )
}