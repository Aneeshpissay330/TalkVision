import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import HomeStack from '../stacks/HomeStack';
import { colors } from '../../theme/colors';
import ChatStack from '../stacks/ChatStack';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { getTabShown } from '../../features/tabSlicer';
import { useAppSelector } from '../../app/hooks';

const Tab = createMaterialBottomTabNavigator();

function TalkVisionTab() {
    const tabShown = useAppSelector((state) => state.tab.tabShown);
    return (
        <Tab.Navigator activeColor={colors.background} inactiveColor={colors.background} barStyle={{ margin: 20, borderRadius: 10, overflow: 'hidden', position: 'absolute', display: tabShown ? "flex" : "none" }}>
            <Tab.Screen name="HomeStack" component={HomeStack} options={{
                tabBarIcon: ({ color, focused }) => (
                    <MaterialCommunityIcons name={focused ? "home" : "home-outline"} color={color} size={26} />
                ), tabBarLabel: 'Home'
            }} />
            <Tab.Screen name="ChatStack" component={ChatStack} options={{ tabBarIcon: ({ color, focused }) => (
                <MaterialCommunityIcons name={focused ? 'chat-processing' : 'chat-processing-outline'} color={color} size={26} />
            ), tabBarLabel: 'Chat' }} />
        </Tab.Navigator>
    );
}

export default TalkVisionTab