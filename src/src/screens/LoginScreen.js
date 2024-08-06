// ./src/screens/LoginScreen.js
import React from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, SafeAreaView } from 'react-native';
import { colors, typography, spacing } from '../theme/theme';

const LoginScreen = ({ navigation }) => {
    const handleLogin = () => {
      navigation.replace('Main');
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.signInText}>Sign in</Text>
        <Text style={styles.welcomeText}>Welcome Back</Text>
        <Text style={styles.subText}>Login to your account.</Text>
        <TextInput 
          style={styles.input}
          placeholder="Email or Phone"
          placeholderTextColor="#B0B0B0"
        />
        <TextInput 
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#B0B0B0"
          secureTextEntry
        />
        <TouchableOpacity>
          <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.loginButton}  onPress={handleLogin}>
          <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>
        <Text style={styles.signUpText}>
          Don’t have an account? <Text style={styles.signUpLink} onPress={() => navigation.navigate('Signup')}>Sign up</Text>
        </Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.secondary,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: spacing.large,
  },
  signInText: {
    ...typography.subHeader,
    marginBottom: spacing.medium,
  },
  welcomeText: {
    ...typography.header,
    marginBottom: spacing.small,
    textAlign: 'center',
  },
  subText: {
    ...typography.body,
    marginBottom: spacing.large,
    color: '#888888',
    textAlign: 'center',
  },
  input: {
    width: '100%',
    padding: spacing.small,
    marginBottom: spacing.medium,
    borderRadius: 5,
    backgroundColor: '#F0F0F0',
    color: '#000',
  },
  forgotPasswordText: {
    alignSelf: 'flex-end',
    color: colors.primary,
    marginBottom: spacing.large,
  },
  loginButton: {
    width: '100%',
    padding: spacing.medium,
    borderRadius: 5,
    backgroundColor: colors.primary,
    alignItems: 'center',
    marginBottom: spacing.large,
  },
  loginButtonText: {
    ...typography.button,
    color: colors.secondary,
  },
  signUpText: {
    color: '#888888',
  },
  signUpLink: {
    color: colors.primary,
  },
});

export default LoginScreen;
