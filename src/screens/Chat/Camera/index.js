import { View, Text, StatusBar } from 'react-native'
import React from 'react'
import CustomCamera from '../../../components/CustomCamera'

export default function Camera() {
  return (
    <View style={{ flex: 1 }}>
      <StatusBar 
        translucent
        backgroundColor="transparent"
      />
      <CustomCamera />
    </View>
  )
};