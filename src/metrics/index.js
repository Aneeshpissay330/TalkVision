import { Dimensions, useWindowDimensions } from "react-native";

const { width, height } = Dimensions.get('window');

export const metrics = {
    screenWidth: width < height ? width : height,
    screenHeight: width < height ? height : width
}

export const layout = useWindowDimensions();