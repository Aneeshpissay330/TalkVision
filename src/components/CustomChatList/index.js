import React from 'react'
import { Avatar, Badge, List, Text } from 'react-native-paper'
import { colors } from '../../theme/colors'
import { View } from 'react-native'
import { listStyles } from '../../styles/ListStyles'

export const CustomChatList = ({ title, description, time, count, onPress }) => {
    return (
        <List.Item
            title={title}
            titleStyle={{ color: colors.primary, fontSize: 14 }}
            description={description}
            descriptionStyle={{ color: colors.dark, fontSize: 12 }}
            style={listStyles.container}
            onPress={onPress}
            left={(props) => <Avatar.Text label='AP' {...props} labelStyle={{ color: colors.background }} size={50} />}
            right={(props) => (
                <View {...props}>
                    <Text style={{ color: colors.dark }}>{time}</Text>
                    {count && <Badge style={{ backgroundColor: colors.primary }}>{count}</Badge>}
                </View>
            )}
        />
    )
}
