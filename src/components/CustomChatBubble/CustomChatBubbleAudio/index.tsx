import { AppState, View } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import { Avatar, IconButton, Text } from 'react-native-paper';
import { colors } from '../../../theme/colors';
import Slider from '@react-native-community/slider';
import { Player } from '@react-native-community/audio-toolkit';
import { useIsFocused } from '@react-navigation/native';
import { formatMilliseconds } from '../../../utils/audio';

type CustomChatBubbleAudioProps = {
    uri: string;
}

var interval: number;

const CustomChatBubbleAudio: React.FunctionComponent<CustomChatBubbleAudioProps> = ({ uri }) => {
    const [playing, setPlaying] = useState(false);
    const [progress, setProgress] = useState(0);
    const audioRecorderPlayer = useRef(new Player(uri, {
        continuesToPlayInBackground: true
    })).current;
    const onStartPlay = async () => {
        audioRecorderPlayer.playPause();
        setPlaying(!playing);
        if (playing) {
            clearInterval(interval);
        }
        else {
            interval = setInterval(() => {
                setProgress(audioRecorderPlayer.currentTime);
            }, 1000);
        }
    }
    const isFocused = useIsFocused();
    useEffect(() => {
        if (!isFocused && AppState.currentState === "active") {
            audioRecorderPlayer.pause();
        }
    }, [isFocused]);
    return (
        <View style={{ flexDirection: 'row', margin: 5, marginBottom: 10, alignItems: 'center' }}>
            <View>
                <Avatar.Icon icon="account" size={40} style={{ backgroundColor: colors.background }} color={colors.primary} />
            </View>
            <IconButton
                icon={playing ? "pause" : "play"}
                onPress={onStartPlay}
                iconColor={colors.background}
            />
            <Slider
                style={{ width: '47%', height: 40 }}
                value={progress}
                minimumValue={0}
                maximumValue={audioRecorderPlayer.duration}
                thumbTintColor={colors.background}
                onSlidingComplete={(value) => audioRecorderPlayer.seek(parseInt(value.toFixed()))}
                minimumTrackTintColor={colors.background}
                maximumTrackTintColor={colors.background}
            />
            <Text style={{ color: colors.background, fontSize: 14 }}>{formatMilliseconds(audioRecorderPlayer.duration - progress)}</Text>
        </View>
    )
}

export default CustomChatBubbleAudio;