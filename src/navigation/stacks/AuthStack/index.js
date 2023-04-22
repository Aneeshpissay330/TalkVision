import { createStackNavigator } from '@react-navigation/stack';
import Login from '../../../screens/Auth/Login';
import OTP from '../../../screens/Auth/OTP';
import { IconButton } from 'react-native-paper';
import { colors } from '../../../theme/colors';
import { useNavigation } from '@react-navigation/native';

const Stack = createStackNavigator();

function AuthStack() {
  const navigation = useNavigation();
  return (
    <Stack.Navigator screenOptions={{ headerStyle: { elevation: 0 }, headerLeft: () => <IconButton onPress={() => navigation.goBack()} icon="chevron-left" style={{ marginLeft: 15 }} containerColor={colors.primary} iconColor={colors.background} size={28} /> }}>
      <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
      <Stack.Screen name="OTP" component={OTP} options={{ headerTitle: '' }} />
    </Stack.Navigator>
  );
}

export default AuthStack;