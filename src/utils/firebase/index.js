import messaging from '@react-native-firebase/messaging';

export const fcmMessage = async () => {
    let token = await messaging().getToken();
    console.log(token);
}