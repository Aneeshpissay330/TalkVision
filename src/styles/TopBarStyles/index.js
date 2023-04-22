import { colors } from "../../theme/colors";
import { fonts } from "../../theme/fonts";

export const topBarStyles = {
    tabBarLabelStyle: {
        fontFamily: fonts.default
    },
    tabBarStyle: {
        margin: 20, borderRadius: 10
    },
    tabBarIndicatorStyle: {
        display: 'none'
    },
    tabBarItemStyle: { flexDirection: 'row' },
    tabBarActiveTintColor: colors.primary,
    tabBarInactiveTintColor: colors.dark,
}