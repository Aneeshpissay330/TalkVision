import React, { FunctionComponent } from 'react'
import { CameraController } from '../CameraController'

type PhotoCameraProps = {
    goToGallery: () => void;
    takePhoto: () => void;
    cameraSwitch: () => void;
}

export const PhotoCamera : FunctionComponent<PhotoCameraProps> = ({ goToGallery, takePhoto, cameraSwitch }) => {
    return (
        <CameraController firstEvent={goToGallery} secondEvent={takePhoto} thirdEvent={cameraSwitch} photo />
    )
}