// theme.js
import { StyleSheet } from 'react-native';

const colors = {
  primary: '#e96c2a',
  secondary: '#FFFFFF',
  background: '#FCFCFC',
  foreground : '#FFFFFF',
  black: '#000000',
  white: '#FFFFFF',
  gray: '#D8D8D8',
  lightGray: '#F2F2F2',
  darkGray: '#767676',
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
    fontSize: 32,
    color: colors.black,
  },
  subHeader: {
    fontFamily: 'AcuminPro-Regular',
    fontSize: 24,
    color: colors.black,
  },
  body: {
    fontFamily: 'AcuminPro-Regular',
    fontSize: 16,
    color: colors.darkGray,
  },
  button: {
    fontFamily: 'AcuminPro-SemiBold',
    fontSize: 18,
    color: colors.white,
  },
});

export { colors, spacing, typography };
