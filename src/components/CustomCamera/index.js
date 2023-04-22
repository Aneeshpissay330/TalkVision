import { StyleSheet, View } from 'react-native'
import React, { useCallback, useEffect, useState } from 'react'
import { Camera, useCameraDevices } from 'react-native-vision-camera';
import useCamera from '../../hooks/useCamera';
import { useIsFocused, useNavigation } from '@react-navigation/native';
import CustomCameraFlash from './CustomCameraFlash';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { topBarStyles } from '../../styles/TopBarStyles';
import { PhotoCamera } from './PhotoCamera';
import { VideoCamera } from './VideoCamera';
import CustomCameraExit from './CustomCameraExit';
import Reanimated, {
    Extrapolate,
    interpolate,
    useAnimatedGestureHandler,
    useAnimatedProps,
    useSharedValue,
} from "react-native-reanimated"
import { PinchGestureHandler, TapGestureHandler } from 'react-native-gesture-handler';
import Slider from '@react-native-community/slider';
import { colors } from '../../theme/colors';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createMaterialTopTabNavigator();

const ReanimatedCamera = Reanimated.createAnimatedComponent(Camera);
const ReanimatedSlider = Reanimated.createAnimatedComponent(Slider);

Reanimated.addWhitelistedNativeProps({
    zoom: true,
});
const SCALE_FULL_ZOOM = 3;
const MAX_ZOOM_FACTOR = 20;

export default function CustomCamera() {
    const devices = useCameraDevices();
    const { cameraRef, takePhoto, flash, cameraDevice, changeCameraDevice, changeFlash, startRecording, stopRecording } = useCamera();
    const device = cameraDevice === "back" ? devices.back : devices.front;
    const minZoom = device?.minZoom ?? 1;
    const maxZoom = Math.min(device?.maxZoom ?? 1, MAX_ZOOM_FACTOR)
    const isFocused = useIsFocused();
    const zoom = useSharedValue(1);
    const animatedProps = useAnimatedProps(
        () => ({ zoom: zoom.value }),
        [zoom]
    );
    const onDoubleTap = useCallback(() => {
        changeCameraDevice();
    }, [changeCameraDevice]);
    const onPinchGesture = useAnimatedGestureHandler({
        onStart: (_, context) => {
            context.startZoom = zoom.value;
        },
        onActive: (event, context) => {
            const startZoom = context.startZoom ?? 0;
            const scale = interpolate(event.scale, [1 - 1 / SCALE_FULL_ZOOM, 1, SCALE_FULL_ZOOM], [-1, 0, 1], Extrapolate.CLAMP);
            zoom.value = interpolate(scale, [-1, 0, 1], [minZoom, startZoom, maxZoom], Extrapolate.CLAMP);
        },
    });
    const getPermissions = async () => {
        await Camera.requestCameraPermission()
        await Camera.requestMicrophonePermission();
    }
    const [recording, setRecording] = useState(false);
    const photoCapture = async () => {
        let result = await takePhoto(flash);
        console.log(result);
    }
    const videoCapture = async () => {
        if (recording) {
            setRecording(false);
            await stopRecording();
        }
        else {
            setRecording(true);
            let video = await startRecording(flash);
            console.log("video", video);
        }
    }
    const navigation = useNavigation();
    const Photo = () => (
        <PhotoCamera goToGallery={() => navigation.navigate("CustomGallery")} takePhoto={photoCapture} cameraSwitch={changeCameraDevice} />
    )
    const Video = () => (
        <VideoCamera takePhoto={photoCapture} startRecording={videoCapture} cameraSwitch={changeCameraDevice} recording={recording} />
    )
    useEffect(() => {
        getPermissions();
    }, []);
    if (device == null) return null;
    return (
        <View style={{ flex: 1 }}>
            <PinchGestureHandler onGestureEvent={onPinchGesture} enabled={isFocused}>
                <Reanimated.View style={StyleSheet.absoluteFill}>
                    <TapGestureHandler onEnded={onDoubleTap} numberOfTaps={2}>
                        <ReanimatedCamera
                            style={StyleSheet.absoluteFill}
                            device={device}
                            isActive={isFocused}
                            photo={true}
                            video={true}
                            audio={true}
                            zoom={zoom}
                            ref={cameraRef}
                            animatedProps={animatedProps}
                            enableHighQualityPhotos
                        />
                    </TapGestureHandler>
                </Reanimated.View>
            </PinchGestureHandler>
            <CustomCameraExit />
            {cameraDevice === "back" && <CustomCameraFlash changeFlash={changeFlash} flash={flash} />}
            <View style={styles.container}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <MaterialCommunityIcons 
                        name="minus"
                        color={colors.background}
                        size={20}
                    />
                    <ReanimatedSlider
                        style={{ width: '90%', height: 60 }}
                        minimumValue={minZoom}
                        maximumValue={maxZoom}
                        value={zoom}
                        onValueChange={(value) => zoom.value = value}
                        minimumTrackTintColor={colors.primary}
                        maximumTrackTintColor={colors.background}
                        thumbTintColor={colors.primary}
                    />
                    <MaterialCommunityIcons 
                        name="plus"
                        color={colors.background}
                        size={20}
                    />
                </View>
                <View style={{ height: '100%', width: '100%' }}>
                    <Tab.Navigator
                        style={{ backgroundColor: 'transparent' }}
                        screenOptions={topBarStyles}
                        sceneContainerStyle={{ backgroundColor: 'transparent' }}
                        tabBarPosition="bottom"
                    >
                        <Tab.Screen name="Photo" component={Photo} />
                        <Tab.Screen name="Video" component={Video} />
                    </Tab.Navigator>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        bottom: 50,
        left: 0,
        right: 0,
        paddingHorizontal: 20,
        paddingBottom: 20,
    }
});