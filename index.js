/**
 * @format
 */

import { AppRegistry, StatusBar } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import 'react-native-gesture-handler';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { Provider as PaperProvider } from 'react-native-paper';
import { lightTheme } from './src/theme';
import { colors } from './src/theme/colors';
import { Provider } from 'react-redux';
import { persistor, store } from './src/app/store';
import { PersistGate } from 'redux-persist/integration/react';

GoogleSignin.configure({
    webClientId: '676524352562-kp0us35vltk7fit5hn5dpumk424bu7u4.apps.googleusercontent.com',
});

function TalkVision() {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <PaperProvider theme={lightTheme}>
                    <StatusBar
                        backgroundColor={colors.background}
                        barStyle="dark-content"
                    />
                    <App />
                </PaperProvider>
            </PersistGate>
        </Provider>
    )
}

AppRegistry.registerComponent(appName, () => TalkVision);
