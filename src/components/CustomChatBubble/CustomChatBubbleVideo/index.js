import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import { getExtension, getFilename } from '../../../utils/mime';
import downloadVideo, { formatDuration } from '../../../utils/downloads';
import Video from 'react-native-video';
import { StyleSheet } from 'react-native';
import { Image } from 'react-native';
import CustomCircularProgress from '../../CustomCircularProgress';
import { metrics } from '../../../metrics';
import CustomImage from '../../CustomImage';
import { Button, IconButton } from 'react-native-paper';
import { colors } from '../../../theme/colors';

export default function CustomChatBubbleVideo({ uri }) {
  const [videoPath, setVideoPath] = useState(null);
  const [progress, setProgress] = useState(0);
  const [height, setHeight] = useState(metrics.screenWidth / (16 / 9));
  const [duration, setDuration] = useState(0);
  const handleDownload = async () => {
    const videoUrl = uri; // Replace with the actual video URL
    const fileName = getFilename(uri) + "." + getExtension(uri);

    const onProgress = (res) => {
      const progress = res.bytesWritten / res.contentLength;
      setProgress(Math.round(progress * 100));
    };

    let dest = await downloadVideo(videoUrl, fileName, onProgress);
    setVideoPath("file://" + dest);
  };
  const onLoad = (e) => {
    setDuration(formatDuration(e.duration));
  }
  const cancelProgress = () => {

  }
  useEffect(() => {
    handleDownload();
  }, []);
  return (
    <View>
      {videoPath ?
        <View>
          <Video
            source={{ uri: videoPath }}
            style={{ width: metrics.screenWidth * 0.7, height, borderRadius: 10 }}
            resizeMode="cover"
            onLoad={onLoad}
            paused={true}
          />
          <View style={styles.playContainer}>
            <IconButton
              icon="play"
              iconColor={colors.background}
              size={40}
              containerColor={colors.transparency}
            />
          </View>
          <View style={{ position: 'absolute', bottom: -5 }}>
            <Button icon="video" labelStyle={{ color: colors.background }}>{duration}</Button>
          </View>
        </View>
        :
        <View>
          <CustomImage
            source={{ uri: uri.replace("mp4", "png") }}
            width={metrics.screenWidth * 0.7}
            style={{ borderRadius: 10 }}
            onHeightChange={(height) => setHeight(height)}
          />
          <CustomCircularProgress
            radius={10}
            stroke={2}
            progress={progress}
            cancelProgress={cancelProgress}
          />
        </View>
      }
    </View>
  )
}

const styles = StyleSheet.create({
  playContainer: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    top: 0,
    justifyContent: 'center',
    alignItems: 'center',
  }
});