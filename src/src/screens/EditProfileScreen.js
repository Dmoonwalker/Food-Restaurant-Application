import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, SafeAreaView, Image, ScrollView } from 'react-native';
import { colors, typography, spacing } from '../theme/theme';
import Header from '../components/Header';
const EditProfileScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>

      <Header navigation={navigation} title="Edit Profile" />
        <View style={styles.profileContainer}>
          <View style={styles.banner}>
            <Image source={require('../../assets/profile.jpg')} style={styles.profileImage} />
            <TouchableOpacity style={styles.cameraIconContainer}>
              <Text style={styles.cameraIcon}>📸</Text>
            </TouchableOpacity>
          </View>
        </View>
        <TextInput style={styles.input} placeholder="Julia Edwards" />
        <TextInput style={styles.input} placeholder="juliaedwards@gmail.com" keyboardType="email-address" />
        <TextInput style={styles.input} placeholder="+1234567890" keyboardType="phone-pad" />
        <TouchableOpacity style={styles.changePasswordButton} onPress={() => navigation.navigate('ChangePassword')}>
          <Text style={styles.changePasswordText}>Change Password</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.saveButton}>
          <Text style={styles.saveButtonText}>Save</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  scrollContainer: {
    padding: spacing.large,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: spacing.large,
  },
  backButton: {
    marginRight: spacing.medium,
  },
  backButtonText: {
    fontSize: 24,
    color: colors.primary,
  },
  headerTitle: {
    ...typography.header,
    fontSize: 24,
  },
  profileContainer: {
    alignItems: 'center',
    marginBottom: spacing.large,
  },
  banner: {
    width: '100%',
    height: 150,
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: spacing.large,
    borderRadius: 10,
    position: 'relative',
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 5,
    borderColor: '#FFF',
    position: 'absolute',
    bottom: -50,
  },
  cameraIconContainer: {
    position: 'absolute',
    bottom: -50,
    right: 10,
    backgroundColor: '#FFF',
    borderRadius: 20,
    padding: 5,
  },
  cameraIcon: {
    fontSize: 20,
    color: colors.primary,
  },
  input: {
    backgroundColor: '#F0F0F0',
    padding: spacing.medium,
    borderRadius: 5,
    marginBottom: spacing.medium,
  },
  changePasswordButton: {
    backgroundColor: '#FFF',
    padding: spacing.medium,
    borderRadius: 5,
    marginBottom: spacing.large,
    borderWidth: 1,
    borderColor: '#F0F0F0',
    alignItems: 'center',
  },
  changePasswordText: {
    color: colors.primary,
    fontWeight: 'bold',
    fontSize: 16,
  },
  saveButton: {
    backgroundColor: colors.primary,
    padding: spacing.medium,
    borderRadius: 5,
    alignItems: 'center',
  },
  saveButtonText: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default EditProfileScreen;
