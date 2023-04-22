import React from 'react'
import { useTheme } from 'react-native-paper';
import { CustomChatList } from '../../../components/CustomChatList';
import { ScrollView } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

const Personal = () => {
    const theme = useTheme();
    const navigation = useNavigation();
    return (
        <ScrollView style={{ flex: 1, backgroundColor: theme.colors.background }}>
            <CustomChatList 
                title="Aneeshpissay"
                description="Hello"
                time="08:00"
                onPress={() => navigation.navigate("ChatMessage")}
            />
            <CustomChatList 
                title="Aneeshpissay"
                description="Hello"
                time="08:00"
                count={4}
            />
        </ScrollView>

    )
}

export default Personal;