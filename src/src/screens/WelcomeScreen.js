// ./src/screens/WelcomeScreen.js
import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, SafeAreaView } from 'react-native';
import { colors, typography, spacing } from '../theme/theme';

const WelcomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image 
            source={require('../../assets/suya.jpg')} // Ensure the path is correct
            style={styles.backgroundImage}
            onError={(error) => console.log('Image loading error:', error)}
          />
          <Text style={styles.logoText}>Føðdie</Text>
        </View>
        <View style={styles.content}>
          <Text style={styles.welcome}>Welcome</Text>
          <Text style={styles.description}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus et felis dolor. Donec vitae facilisis velit.
          </Text>
          <TouchableOpacity style={styles.loginButton} onPress={() => navigation.navigate('Login')}>
            <Text style={styles.loginButtonText}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.signupButton} onPress={() => navigation.navigate('Signup')}>
            <Text style={styles.signupButtonText}>Sign up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.secondary, // Adjust background color if needed
  },
  container: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  imageContainer: {
    position: 'relative',
    width: '100%',
    height: '50%',
  },
  backgroundImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  logoText: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: [{ translateX: -50 }, { translateY: -50 }],
    fontSize: 40,
    fontWeight: 'bold',
    color: '#FFFFFF',
    textAlign: 'center',
  },
  content: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    padding: spacing.medium,
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  welcome: {
    ...typography.subHeader,
    marginBottom: spacing.small,
    textAlign: 'center',
  },
  description: {
    ...typography.body,
    textAlign: 'center',
    marginHorizontal: spacing.medium,
    marginBottom: spacing.large,
    color: '#333333', // Adjust text color if needed
  },
  loginButton: {
    backgroundColor: colors.primary,
    paddingVertical: spacing.small,
    paddingHorizontal: spacing.large,
    borderRadius: 5,
    marginBottom: spacing.small,
    width: '80%',
    alignItems: 'center',
    marginBottom: spacing.medium, // Add space between buttons
  },
  loginButtonText: {
    ...typography.button,
    color: colors.secondary,
  },
  signupButton: {
    borderColor: colors.primary,
    borderWidth: 2,
    paddingVertical: spacing.small,
    paddingHorizontal: spacing.large,
    borderRadius: 5,
    width: '80%',
    alignItems: 'center',
    marginBottom: spacing.large, // Add space between buttons and bottom
  },
  signupButtonText: {
    ...typography.button,
    color: colors.primary,
  },
});

export default WelcomeScreen;
