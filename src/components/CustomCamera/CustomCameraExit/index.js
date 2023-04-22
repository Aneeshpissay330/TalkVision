import React, { FunctionComponent } from 'react'
import { View } from 'react-native'
import { IconButton } from 'react-native-paper'
import { colors } from '../../../theme/colors';
import { useNavigation } from '@react-navigation/native';

const CustomCameraExit = () => {
    const navigation = useNavigation();
    return (
        <View style={{ position: "absolute", left: 10, top: 40 }}>
            <IconButton iconColor={colors.background} icon="close" onPress={() => navigation.goBack()} containerColor={colors.primary} />
        </View>
    )
}

export default CustomCameraExit