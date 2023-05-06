import React from 'react';
import { StyleSheet, View } from 'react-native';
import { IconButton, Text } from 'react-native-paper';
import { Svg, Circle } from 'react-native-svg';
import { colors } from '../../theme/colors';

const CustomCircularProgress = ({ radius, stroke, progress, cancelProgress }) => {
  const circumference = 2 * Math.PI * radius;
  const halfCircumference = circumference / 2;
  const progressOffset = circumference - progress / 100 * circumference;

  return (
    <View style={styles.container}>
      <Svg
        width={radius * 2}
        height={radius * 2}
        viewBox={`0 0 ${radius * 2} ${radius * 2}`}
      >
        <Circle
          cx={radius}
          cy={radius}
          r={radius - stroke / 2}
          stroke="none"
          strokeWidth={stroke}
          fill="none"
        />
        <Circle
          cx={radius}
          cy={radius}
          r={radius - stroke / 2}
          stroke="#FFC107"
          strokeWidth={stroke}
          strokeDasharray={circumference}
          strokeDashoffset={progressOffset}
          strokeLinecap="round"
          fill="none"
          transform={`rotate(-90 ${radius} ${radius})`}
        />
      </Svg>
      <View style={styles.progressIconContainer}>
        <IconButton 
          icon="close"
          iconColor={colors.background}
          size={14}
          onPress={cancelProgress}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 10,
    left: 10,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 4,
    borderRadius: 100
  },
  progressIconContainer: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
});

export default CustomCircularProgress;
