import React, { FC } from 'react';
import { View, ViewStyle } from 'react-native';
import { colors } from '../../theme/colors';
import { metrics } from '../../metrics';
import CustomChatBubbleText from './CustomChatBubbleText';
import CustomChatBubbleFile from './CustomChatBubbleFile';

interface ChatBubbleProps {
  isLeft?: boolean;
  style?: ViewStyle;
  text?: string | null;
  files?: string[] | null;
}

const CustomChatBubble: FC<ChatBubbleProps> = ({ isLeft = false, style, text, files }) => {
  return (
    <View style={[{ alignSelf: isLeft ? 'flex-start' : 'flex-end', borderRadius: 10, backgroundColor: isLeft ? colors.secondary : colors.primary, maxWidth: metrics.screenWidth * 0.8, margin: 10, borderTopLeftRadius: isLeft ? 0 : 10, borderTopRightRadius: isLeft ? 10 : 0 }, style]}>
      {text && (
        <CustomChatBubbleText 
            text={text}
            isLeft={isLeft}
        />
      )}
      {files && 
        <CustomChatBubbleFile 
            files={files}
            isLeft={isLeft}
        />
      }
    </View>
  );
};

export default CustomChatBubble;
