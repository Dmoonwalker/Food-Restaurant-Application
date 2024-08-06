// ./src/screens/SplashScreen.js
import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {colors} from '../theme/theme';
const SplashScreen = ({ navigation }) => {

 useEffect(() => {
    const timer = setTimeout(() => {
      console.log('SplashScreen mounted');
      navigation.replace('Welcome');
    }, 2000); // 2 seconds

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Føðdie</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.primary, // Adjust the background color as needed
  },
  text: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#FFFFFF', // Adjust the text color as needed
  },
});

export default SplashScreen;
