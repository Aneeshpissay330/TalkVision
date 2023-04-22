import React from 'react'
import { Image, View } from 'react-native';
import { metrics } from '../../../metrics';
import { Button, Text, useTheme } from 'react-native-paper';
import { SvgUri } from 'react-native-svg';
import { colors } from '../../../theme/colors';
import { CustomPhoneInput } from '../../../components/CustomPhoneInput';
import { useNavigation } from '@react-navigation/native';

const Login = () => {
  const theme = useTheme();
  const [phoneNumber, setPhoneNumber] = React.useState("");
  const signIn = () => {

  }
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1, backgroundColor: theme.colors.background }}>
      <SvgUri
        uri="https://res.cloudinary.com/dfogjstl5/image/upload/v1681643802/TalkVision/talkvision_logo_dca99g.svg"
        width={metrics.screenWidth * 0.5}
        height={metrics.screenWidth * 0.5}
        style={{ alignSelf: 'center', marginTop: metrics.screenWidth * 0.05 }}
      />
      <CustomPhoneInput
        value={phoneNumber}
        setValue={setPhoneNumber}
      />
      <Button mode="contained" style={{ margin: 20 }} textColor={colors.background} onPress={() => navigation.navigate("OTP")}>Get OTP</Button>
      <Text style={{ color: colors.dark, textAlign: 'center', marginTop: 10 }}>
          Or connect with 
      </Text>
      <Button style={{ margin: 20 }} buttonColor={colors.google} icon="google-plus" textColor={colors.background} mode="contained" onPress={() => console.log('Pressed')}>
        Google
      </Button>
    </View>
  )
}

export default Login;