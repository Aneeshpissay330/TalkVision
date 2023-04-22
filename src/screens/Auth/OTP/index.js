import React from 'react'
import { Button, Text, useTheme } from 'react-native-paper';
import { View } from 'react-native';
import { colors } from '../../../theme/colors';
import { CustomOTPInput } from '../../../components/CustomOTPInput';
import { useNavigation } from '@react-navigation/native';

const OTP = () => {
    const theme = useTheme();
    const navigation = useNavigation();
    return (
        <View style={{ flex: 1, backgroundColor: theme.colors.background }}>
            <Text style={{ color: colors.primary, textAlign: 'center', marginVertical: 20, fontSize: 20 }}>
                Enter 6 digit verification code sent your number
            </Text>
            <CustomOTPInput />
            <Button mode="contained" style={{ margin: 20 }} textColor={colors.background} onPress={() => navigation.navigate("OTP")}>Continue</Button>
            <Text style={{ color: colors.primary, textAlign: 'center', marginVertical: 20, fontSize: 14 }}>
                Resend code in 00:00
            </Text>
        </View>
    )
}

export default OTP;