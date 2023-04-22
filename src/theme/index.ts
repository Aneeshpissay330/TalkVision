import { ThemeProp } from "react-native-paper/lib/typescript/src/types";
import { colors } from "./colors";
import { configureFonts } from "react-native-paper";

const { DefaultTheme } = require("react-native-paper");

export const lightTheme: ThemeProp = {
    ...DefaultTheme,
    colors: {
        background: colors.background,
        primary: colors.primary,
        elevation: {
            level2: colors.primary
        }
    },
    fonts: configureFonts({
        config: {
            fontFamily: 'Poppins-Medium'
        }
    })
};