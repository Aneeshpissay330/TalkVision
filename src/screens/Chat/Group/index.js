import React from 'react'
import { useTheme } from 'react-native-paper';
import { CustomChatList } from '../../../components/CustomChatList';
import { ScrollView } from 'react-native-gesture-handler';

const Group = () => {
    const theme = useTheme();
    return (
        <ScrollView style={{ flex: 1, backgroundColor: theme.colors.background }}>
            <CustomChatList 
                title="v13. Boys"
                description="Hello"
                time="08:00"
            />
        </ScrollView>

    )
}

export default Group;