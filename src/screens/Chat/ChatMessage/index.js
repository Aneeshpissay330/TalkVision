import { useNavigation } from '@react-navigation/native';
import React, { memo, useLayoutEffect, useState } from 'react'
import { ScrollView, TextInput, View } from 'react-native';
import { Avatar, IconButton, List, useTheme } from 'react-native-paper';
import { colors } from '../../../theme/colors';
import CustomChatInput from '../../../components/CustomChatInput';
import { EmojiKeyboard } from 'rn-emoji-keyboard';
import { fonts } from '../../../theme/fonts';
import { CustomEmojiKeyboard } from '../../../components/CustomEmojiKeyboard';
import CustomChatBubble from '../../../components/CustomChatBubble';

const ChatMessage = () => {
    const theme = useTheme();
    const navigation = useNavigation();
    useLayoutEffect(() => {
        navigation.setOptions({
            headerTitle: () => (
                <List.Item
                    title="Aneesh Pissay"
                    titleStyle={{ color: colors.dark, fontSize: 14 }}
                    description="Online"
                    descriptionStyle={{ color: colors.dark, fontSize: 12 }}
                    style={{ position: 'absolute', marginLeft: -25 }}
                    left={(props) => <Avatar.Text label="AP" color={theme.colors.background} size={40} />}
                />
            ),
            headerRight: () => (
                <View style={{ flexDirection: 'row' }}>
                    <IconButton icon="phone-outline" iconColor={colors.primary} />
                    <IconButton icon="video-outline" iconColor={colors.primary} />
                    <IconButton icon="dots-vertical" iconColor={colors.primary} />
                </View>
            )
        })
    }, []);
    const [message, setMessage] = useState("");
    const [showEmojiPicker, setShowEmojiPicker] = useState(false);
    const handlePickEmoji = (emojiObject) => {
        setMessage((prev) => prev + emojiObject.emoji);
    }
    return (
        <View style={{ backgroundColor: theme.colors.background, flex: 1 }}>
            <ScrollView style={{ flex: 1 }}>
                <CustomChatBubble 
                    isLeft
                    text="Hello"
                />
                <CustomChatBubble
                    text="Hi"
                />
            </ScrollView>
            <CustomChatInput 
                message={message}
                setMessage={setMessage}
                showEmojiPicker={showEmojiPicker}
                setShowEmojiPicker={setShowEmojiPicker}
            />
            {/* <TextInput 
                placeholder="Enter message"
                placeholderTextColor={colors.primary}
            /> */}
            {showEmojiPicker && <CustomEmojiKeyboard handlePickEmoji={handlePickEmoji} />}
        </View>
    )
}

export default memo(ChatMessage);