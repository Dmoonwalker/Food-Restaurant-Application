// theme.js
import { StyleSheet } from 'react-native';
import { Text } from 'react-native-reanimated/lib/typescript/Animated';

const colors = {
  primary: '#fb8500',       // Light blue
  secondary: '#219ebc',     // Darker blue
  accent: '#ffb703',        // Orange
  accentDark: '#fb8500',    // Dark orange
  background: '#FCFCFC',    // Deep blue
  white: '#FFFFFF',
  black: '#000000',
  gray: '#D8D8D8',
  lightGray: '#F2F2F2',
  darkGray: '#767676',
  text : '#023047'
};

const spacing = {
  small: 8,
  medium: 16,
  large: 24,
  extraLarge: 32,
};

const typography = StyleSheet.create({
  header: {
    fontFamily: 'AcuminPro-Bold',
    fontSize: 24,
    color: colors.text,
  },
  subHeader: {
    fontFamily: 'AcuminPro-Regular',
    fontSize: 20,
    color: colors.text,
  },
  body: {
    fontFamily: 'AcuminPro-Regular',
    fontSize: 16,
    color: colors.text,
  },
  button: {
    fontFamily: 'AcuminPro-SemiBold',
    fontSize: 18,
    color: colors.white,
  },
});

export { colors, spacing, typography };
