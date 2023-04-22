import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Personal from './Personal';
import Group from './Group';
import { useTheme } from 'react-native-paper';
import { colors } from '../../theme/colors';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { topBarStyles } from '../../styles/TopBarStyles';

const Tab = createMaterialTopTabNavigator();

function Chat() {
    const theme = useTheme();
    return (
        <Tab.Navigator
            style={{ backgroundColor: theme.colors.background }}
            screenOptions={topBarStyles}
        >
            <Tab.Screen name="Personal" component={Personal} options={{
                tabBarIcon: ({ color, focused }) => (
                    <MaterialCommunityIcons name={focused ? "account-multiple" : "account-multiple-outline"} color={color} size={26} />
                ),
            }} />
            <Tab.Screen name="Group" component={Group} options={{
                tabBarIcon: ({ color, focused }) => (
                    <MaterialCommunityIcons name={focused ? "account-group" : "account-group-outline"} color={color} size={26} />
                )
            }} />
        </Tab.Navigator>
    );
}

export default Chat;