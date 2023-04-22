import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import Chat from '../../../screens/Chat';
import { Badge, IconButton } from 'react-native-paper';
import { colors } from '../../../theme/colors';
import { View } from 'react-native';
import ChatMessage from '../../../screens/Chat/ChatMessage';
import Camera from '../../../screens/Chat/Camera';
import CustomGallery from '../../../components/CustomGallery';

const Stack = createStackNavigator();

function ChatStack() {
  const navigation = useNavigation();
  return (
    <Stack.Navigator screenOptions={{ headerStyle: { elevation: 0 } }}>
      <Stack.Screen name="Chat" component={Chat} options={{
        headerRight: () => (
          <View style={{ marginRight: 10 }}>
            <IconButton icon="bell" iconColor={colors.primary} />
            <Badge style={{ backgroundColor: colors.primary, position: 'absolute' }}>3</Badge>
          </View>
        )
      }} />
      <Stack.Screen name="ChatMessage" component={ChatMessage} />
      <Stack.Screen name="Camera" component={Camera} options={{ headerShown: false }} />
      <Stack.Screen name="CustomGallery" component={CustomGallery} options={{ headerTitle: '', presentation: 'modal' }} />
    </Stack.Navigator>
  );
}

export default ChatStack;