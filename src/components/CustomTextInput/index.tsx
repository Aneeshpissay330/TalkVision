import React, { useState } from 'react';
import { Text, TextInput, TouchableRipple } from 'react-native-paper';
import { metrics } from '../../metrics';
import { colors } from '../../theme/colors';
import { KeyboardTypeOptions, StyleProp, TextStyle } from 'react-native/types';
import { TextInputLabelProp } from 'react-native-paper/lib/typescript/src/components/TextInput/types';

type CustomTextInputProps = {
    value: string;
    setValue: (value: string) => void;
    label?: TextInputLabelProp;
    keyboardType?: KeyboardTypeOptions | undefined;
    multiline?: boolean;
    left?: React.ReactNode;
    right?: React.ReactNode;
    style?: StyleProp<TextStyle>;
}

export const CustomTextInput: React.FunctionComponent<CustomTextInputProps> = ({ value, setValue, label, keyboardType, multiline, left, right, style }) => {
    const showCountry = () => {
        console.log("Selected one");
    }
    return (
        <TextInput
            label={label}
            style={[style, { alignSelf: 'center', marginVertical: 10 }]}
            mode="outlined"
            keyboardType={keyboardType}
            textColor={colors.primary}
            value={value}
            onChangeText={setValue}
            activeOutlineColor={colors.primary}
            outlineColor={colors.primary}
            activeUnderlineColor={colors.primary}
            multiline={multiline}
            left={left}
            right={right}
        />
    );
};