// ./src/screens/SignUpScreen.js
import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, SafeAreaView, ScrollView, CheckBox } from 'react-native';
import { colors, typography, spacing } from '../theme/theme';


const SignUpScreen = ({ navigation }) => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container}>
     
        <Text style={styles.title}>Register</Text>
        <Text style={styles.subtitle}>Create your new account.</Text>
        <TextInput 
          style={styles.input}
          placeholder="Full Name"
          placeholderTextColor="#B0B0B0"
        />
        <TextInput 
          style={styles.input}
          placeholder="Email or phone"
          placeholderTextColor="#B0B0B0"
        />
        <TextInput 
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#B0B0B0"
          secureTextEntry
        />
        <TextInput 
          style={styles.input}
          placeholder="Confirm Password"
          placeholderTextColor="#B0B0B0"
          secureTextEntry
        />
        {/* <View style={styles.checkboxContainer}>
          <CheckBox
            value={isChecked}
            onValueChange={setIsChecked}
            style={styles.checkbox}
          />
          <Text style={styles.checkboxLabel}>
            I agree to your <Text style={styles.link}>privacy policy</Text> and <Text style={styles.link}>terms & conditions</Text>.
          </Text>
        </View> */}
        <TouchableOpacity style={styles.signupButton} onPress={() => { /* Handle sign up logic */ }}>
          <Text style={styles.signupButtonText}>Sign up</Text>
        </TouchableOpacity>
        <Text style={styles.footerText}>
          Already an account, <Text style={styles.link} onPress={() => navigation.navigate('Login')}>login</Text>
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  container: {
    padding: spacing.large,
  },
  title: {
    ...typography.header,
    color: colors.primary,
    marginBottom: spacing.small,
    textAlign: 'center',
  },
  subtitle: {
    ...typography.subHeader,
    color: '#888888',
    marginBottom: spacing.large,
    textAlign: 'center',
  },
  input: {
    backgroundColor: '#F0F0F0',
    padding: spacing.small,
    borderRadius: 5,
    marginBottom: spacing.medium,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: spacing.large,
  },
  checkbox: {
    marginRight: spacing.small,
  },
  checkboxLabel: {
    ...typography.body,
    color: '#888888',
  },
  link: {
    color: colors.primary,
  },
  signupButton: {
    backgroundColor: colors.primary,
    paddingVertical: spacing.medium,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: spacing.large,
  },
  signupButtonText: {
    ...typography.button,
    color: '#FFF',
  },
  footerText: {
    ...typography.body,
    color: '#888888',
    textAlign: 'center',
  },
});

export default SignUpScreen;
