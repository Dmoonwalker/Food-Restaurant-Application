// ./src/components/CustomTabBarBackground.js
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { colors } from '../theme/theme';

const CustomTabBarBackground = () => {
  return <View style={styles.background} />;
};

const styles = StyleSheet.create({
  background: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 60,
    backgroundColor: '#FFF', // Match this to the tab bar background color
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    shadowColor: '#000000', // Shadow color
    shadowOffset: { width: 0, height: -10 }, // Shadow offset
    shadowOpacity: 0.5, // Shadow opacity
    shadowRadius: 10, // Shadow radius
    elevation: 20, // Android shadow
  },
});

export default CustomTabBarBackground;
