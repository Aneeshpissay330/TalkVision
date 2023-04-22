import React, { FunctionComponent } from 'react'
import { View } from 'react-native'
import { IconButton } from 'react-native-paper'
import { colors } from '../../../theme/colors';

type CameraControllerProps = {
    video?: boolean;
    firstEvent?: () => void;
    secondEvent?: () => void;
    thirdEvent?: () => void;
    recording?: boolean;
    photo?: boolean;
}

export const CameraController: FunctionComponent<CameraControllerProps> = ({ video, firstEvent, secondEvent, thirdEvent, recording, photo }) => {
    return (
        <View style={{ position: "absolute", top: 0, right: 0, left: 0, bottom: 0, justifyContent: "center", alignItems: "center" }}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
                <IconButton icon="image" iconColor={colors.background} containerColor={colors.primary} onPress={firstEvent} />
                {video && <IconButton icon={recording ? "stop" : "checkbox-blank-circle"} size={45} style={{ position: "absolute", left: 65 }} iconColor={colors.google} />}
                {photo && <IconButton icon={"checkbox-blank-circle"} size={45} style={{ position: "absolute", left: 65 }} iconColor={colors.background} />}
                <IconButton icon="checkbox-blank-circle-outline" size={70} iconColor={colors.background} onPress={secondEvent} />
                {!recording && <IconButton icon="camera-switch" onPress={thirdEvent} iconColor={colors.background} containerColor={colors.primary} />}
            </View>
        </View>
    )
}