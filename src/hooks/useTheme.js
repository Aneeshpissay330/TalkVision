import { useColorScheme } from "react-native";
import { useAppSelector } from "../app/hooks";

const useTheme = () => {
    const themeSelector = useAppSelector((state) => state.theme.value);
    const theme = useColorScheme();
    const autoTheme = (lightTheme, darkTheme) => theme === "light" ? lightTheme : darkTheme;
    const customTheme = (lightTheme, darkTheme) => themeSelector === "light" ? lightTheme : darkTheme;
    const appTheme = (lightTheme, darkTheme) => themeSelector === "auto" ? autoTheme(lightTheme, darkTheme) : customTheme(lightTheme, darkTheme);
    return { appTheme }
}

export default useTheme;