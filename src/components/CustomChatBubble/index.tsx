import React, { FC } from 'react';
import { View, ViewStyle } from 'react-native';
import { colors } from '../../theme/colors';
import { Text } from 'react-native-paper';
import { metrics } from '../../metrics';
import CustomChatBubbleText from './CustomChatBubbleText';

interface ChatBubbleProps {
  isLeft?: boolean;
  style?: ViewStyle;
  text?: string;
}

const CustomChatBubble: FC<ChatBubbleProps> = ({ isLeft = false, style, text }) => {
  return (
    <View style={[{ alignSelf: isLeft ? 'flex-start' : 'flex-end', borderRadius: 10, backgroundColor: isLeft ? colors.secondary : colors.primary, maxWidth: metrics.screenWidth * 0.5, margin: 10 }, style]}>
      {text && (
        <CustomChatBubbleText 
            text={text}
        />
      )}
    </View>
  );
};

export default CustomChatBubble;
