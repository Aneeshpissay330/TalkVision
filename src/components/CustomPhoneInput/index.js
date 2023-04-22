import React, { useState } from 'react';
import { Text, TextInput, TouchableRipple } from 'react-native-paper';
import { metrics } from '../../metrics';
import { colors } from '../../theme/colors';

export const CustomPhoneInput = ({ value, setValue }) => {
    const showCountry = () => {
        console.log("Selected one");
    }
    return (
        <TextInput
            label="Phone number"
            style={{ width: metrics.screenWidth * 0.9, alignSelf: 'center', marginVertical: 10 }}
            mode="outlined"
            keyboardType="phone-pad"
            maxLength={10}
            textColor={colors.primary}
            value={value}
            onChangeText={setValue}
            left={<TextInput.Affix text={<TouchableRipple onPress={showCountry}><Text style={{ color: colors.primary }}>+91</Text></TouchableRipple>} />}
            activeOutlineColor={colors.primary}
            outlineColor={colors.dark}
            activeUnderlineColor={colors.primary}
        />
    );
};