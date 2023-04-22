import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import Home from '../../../screens/Home';

const Stack = createStackNavigator();

function HomeStack() {
  const navigation = useNavigation();
  return (
    <Stack.Navigator screenOptions={{ headerStyle: { elevation: 0 } }}>
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
}

export default HomeStack;