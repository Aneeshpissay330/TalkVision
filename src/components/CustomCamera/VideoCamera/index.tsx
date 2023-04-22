import React, { FunctionComponent } from 'react'
import { CameraController } from '../CameraController'

type VideoCameraProps = {
  takePhoto: () => void;
  startRecording: () => void;
  cameraSwitch: () => void;
  recording: boolean;
}

export const VideoCamera : FunctionComponent<VideoCameraProps> = ({ takePhoto, startRecording, cameraSwitch, recording }) => {
  return (
    <CameraController 
      firstEvent={takePhoto}
      secondEvent={startRecording}
      thirdEvent={cameraSwitch}
      recording={recording}
      video
    />
  )
}