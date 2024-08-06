import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, SafeAreaView, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { colors, typography, spacing } from '../theme/theme';
import Header from '../components/Header';

const ProfileScreen = ({ navigation }) => {
  const [fullName, setFullName] = useState('Vishal Khadok');
  const [email, setEmail] = useState('hello@hallalab.co');
  const [phoneNumber, setPhoneNumber] = useState('408-841-0926');
  const [bio, setBio] = useState('I love fast food');
  const [editable, setEditable] = useState(false);

  const handleSave = () => {
    console.log('Profile Updated');
    setEditable(false);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header navigation={navigation} title="Profile" />
      <TouchableOpacity style={styles.editButton} onPress={() => setEditable(!editable)}>
        <Icon name={editable ? "checkmark" : "pencil"} size={24} color={colors.primary} />
      </TouchableOpacity>
      <View style={styles.profileImageContainer}>
        <View style={styles.profileImage}>
          <Image source={require('../../assets/profile.jpg')} style={styles.image} />
          <TouchableOpacity style={styles.profileEditIcon} onPress={() => console.log('Edit Profile Image')}>
            <Icon name="pencil" size={16} color={colors.white} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>FULL NAME</Text>
        <TextInput
          style={[styles.input, !editable && styles.nonEditableInput]}
          placeholder="Enter your full name"
          value={fullName}
          onChangeText={setFullName}
          editable={editable}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>EMAIL</Text>
        <TextInput
          style={[styles.input, !editable && styles.nonEditableInput]}
          placeholder="Enter your email"
          value={email}
          onChangeText={setEmail}
          editable={editable}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>PHONE NUMBER</Text>
        <TextInput
          style={[styles.input, !editable && styles.nonEditableInput]}
          placeholder="Enter your phone number"
          value={phoneNumber}
          onChangeText={setPhoneNumber}
          editable={editable}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>BIO</Text>
        <TextInput
          style={[styles.input, !editable && styles.nonEditableInput]}
          placeholder="Enter your bio"
          value={bio}
          onChangeText={setBio}
          editable={editable}
        />
      </View>
      {editable && (
        <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
          <Text style={styles.saveButtonText}>SAVE</Text>
        </TouchableOpacity>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: spacing.large,
    justifyContent: 'space-between',
  },
  backButton: {
    width: 50,
    height: 50,
    backgroundColor: '#FFF',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    transform: [{ rotate: '45deg' }],
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 3,
    margin: 10,
  },
  backIcon: {
    transform: [{ rotate: '-45deg' }],
  },
  headerTitle: {
    ...typography.header,
    fontSize: 24,
    flex: 1,
    textAlign: 'center',
    marginRight: 40,
  },
  rhombus: {
    width: 50,
    height: 50,
    backgroundColor: '#FFF',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    transform: [{ rotate: '45deg' }],
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 3,
    margin: 10,
  },
  icon: {
    transform: [{ rotate: '-45deg' }],
  },
  editButton: {
    position: 'absolute',
    top: 20,
    right: 20,
    backgroundColor: '#FFF',
    borderRadius: 10,
    padding: 10,
    elevation: 5,
    transform: [{ rotate: '45deg' }],
  },
  profileImageContainer: {
    alignItems: 'center',
    marginVertical: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#FECACA', // Light red background for the profile image
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative', // Added for absolute positioning of the edit icon
  },
  image: {
    width: 90,
    height: 90,
    borderRadius: 45,
  },
  profileEditIcon: {
    position: 'absolute',
    bottom: 5, // Positioned at the bottom edge
    right: '1%',
    backgroundColor: '#FF6600', // Orange background for the edit icon
    borderRadius: 15,
    padding: 5,
    borderWidth: 2,
    borderColor: colors.white,
  },
  inputContainer: {
    marginBottom: 20,
  },
  label: {
    ...typography.subHeader,
    color: '#7A7A7A',
    marginBottom: 5,
    fontSize: 12, // Smaller labels
  },
  input: {
    height: 60, // Longer input fields
    backgroundColor: '#E0F7FA', // Sky blue background for the input fields
    borderRadius: 10,
    paddingHorizontal: 10,
    fontSize: 16,
    color: '#000000',
  },
  nonEditableInput: {
    backgroundColor: '#D3D3D3', // Light gray background for non-editable input fields
  },
  saveButton: {
    backgroundColor: '#FF6600', // Orange background for the save button
    paddingVertical: 15,
    borderRadius: 25,
    alignItems: 'center',
    marginVertical: 20,
  },
  saveButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default ProfileScreen;
