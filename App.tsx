import React from 'react'
import Navigation from './src/navigation';
import { NavigationContainer, NavigationState } from '@react-navigation/native';
import { useAppDispatch } from './src/app/hooks';
import { hideTab, showTab } from './src/features/tabSlicer';
import { useRecentPicksPersistence } from 'rn-emoji-keyboard';
import AsyncStorage from '@react-native-async-storage/async-storage';

const App = () => {
  const dispatch = useAppDispatch();
  const onStateChange = (state: NavigationState | undefined) => {
    let route = state?.routes.find((a) => a?.state?.index !== 0);
    if (route) {
      dispatch(hideTab());
    }
    else {
      dispatch(showTab());
    }
  }
  useRecentPicksPersistence({
    initialization: () => AsyncStorage.getItem("emoji").then((item) => JSON.parse(item || '[]')),
    onStateChange: (next) => AsyncStorage.setItem("emoji", JSON.stringify(next)),
  });
  return (
    <NavigationContainer onReady={() => {
      dispatch(showTab());
    }} onStateChange={onStateChange}>
      <Navigation />
    </NavigationContainer>
  )
}

export default App;