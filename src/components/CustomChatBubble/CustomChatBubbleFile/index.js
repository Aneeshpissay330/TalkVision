import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { getMimeType, getExtension, getFilename } from '../../../utils/mime';
import { metrics } from '../../../metrics';
import CustomImage from '../../CustomImage';
import { colors } from '../../../theme/colors';
import moment from 'moment';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import LinearGradient from 'react-native-linear-gradient';
import CustomChatBubbleVideo from '../CustomChatBubbleVideo';
import CustomChatBubbleAudio from '../CustomChatBubbleAudio';
import CustomChatBubblePdf from '../CustomChatBubblePdf';

const CustomChatBubbleFile = ({ files, isLeft }) => {
    return (
        <View style={{ padding: 4 }}>
            {files.map((file, index) => (
                <TouchableOpacity key={index} onPress={() => console.log(file)} activeOpacity={0.5} style={{ marginTop: index === 0 ? 0 : 10 }}>
                    {getMimeType(file).valueOf().toString().includes("image") ?
                        <CustomImage
                            source={{ uri: file }}
                            width={metrics.screenWidth * 0.7}
                            style={{ borderRadius: 10 }}
                        />
                        :
                        getMimeType(file).valueOf().toString().includes("video") ?
                            <CustomChatBubbleVideo
                                uri={file}
                            /> :
                            getMimeType(file).valueOf().toString().includes("audio") ?
                                <CustomChatBubbleAudio
                                    uri={file}
                                /> : getMimeType(file).valueOf().toString().includes("application") &&
                                    getExtension(file).valueOf().toString().includes("pdf")
                                    ? <CustomChatBubblePdf
                                        uri={file}
                                    /> : null
                    }
                </TouchableOpacity>
            ))}
            {files.find((a) => !getMimeType(a).valueOf().toString().includes("audio") && !getMimeType(a).valueOf().toString().includes("application")) &&
                <LinearGradient
                    colors={['transparent', 'rgba(0, 0, 0, 0.1)']}
                    style={{ position: 'absolute', width: '100%', height: '100%', borderRadius: 10 }}
                />
            }
            <Text style={{ color: colors.background, alignSelf: 'flex-end', fontSize: 12, position: 'absolute', right: isLeft ? 10 : 30, bottom: 10 }}>{moment().format("hh:mm")}</Text>
            {!isLeft && <MaterialCommunityIcons
                name="check-all"
                size={18}
                style={{ position: 'absolute', right: 10, bottom: 10 }}
                color={colors.tertiary}
            />}
        </View>
    )
}

export default CustomChatBubbleFile;