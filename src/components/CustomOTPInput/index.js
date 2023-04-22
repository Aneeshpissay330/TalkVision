import React, { useRef } from 'react';
import { StyleSheet, View } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import { colors } from '../../theme/colors';

export const CustomOTPInput = () => {
    const [otp, setOtp] = React.useState(['', '', '', '', '', '']);
    const inputs = useRef([]);

    const handleOtpChange = (text, index) => {
        const newOtp = [...otp];
        newOtp[index] = text;
        setOtp(newOtp);
        if (index < 5 && text) {
            inputs.current[index + 1].focus();
        }
        if (index > 0 && !text) {
            inputs.current[index - 1].focus();
        }
    };

    const handleOtpSubmit = () => {
        // handle OTP submission logic here
    };

    return (
        <View style={styles.otpContainer}>
            {otp.map((value, index) => (
                <TextInput
                    key={index}
                    ref={(ref) => (inputs.current[index] = ref)}
                    style={styles.otpInput}
                    mode="outlined"
                    label=""
                    keyboardType="numeric"
                    value={value}
                    onChangeText={(text) => handleOtpChange(text, index)}
                    maxLength={1}
                    textColor={colors.primary}
                    outlineColor={colors.dark}
                    onKeyPress={({ nativeEvent }) => {
                        if (nativeEvent.key === 'Backspace' && !value) {
                            inputs.current[index - 1]?.focus();
                        }
                    }}
                />
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    otpContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    },
    otpInput: {
        width: 50,
    },
    submitButton: {
        width: '50%',
    },
});