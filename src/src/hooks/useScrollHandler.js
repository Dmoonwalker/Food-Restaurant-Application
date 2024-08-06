import { useRef } from 'react';
import { Animated } from 'react-native';

export const useScrollHandler = () => {
  const scrollY = useRef(new Animated.Value(0)).current;
  const hideNav = scrollY.interpolate({
    inputRange: [0, 100],
    outputRange: [0, 1],
    extrapolate: 'clamp',
  });

  return { scrollY, hideNav };
};
