import React, { FunctionComponent } from 'react'
import { View } from 'react-native'
import { IconButton } from 'react-native-paper'
import { colors } from '../../../theme/colors';

type CustomCameraFlashProps = {
    changeFlash: () => void;
    flash: "off" | "on" | "auto";
}

const CustomCameraFlash: FunctionComponent<CustomCameraFlashProps> = ({ changeFlash, flash }) => {
    return (
        <View style={{ position: "absolute", right: 10, top: 40 }}>
            <IconButton iconColor={colors.background} icon={flash === "off" ? "flash-off" : flash === "on" ? "flash" : "flash-auto"} onPress={changeFlash} style={{ backgroundColor: colors.primary }} />
        </View>
    )
}

export default CustomCameraFlash