import React, { useState, useRef } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, SafeAreaView, ScrollView, TouchableWithoutFeedback } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { colors, spacing, typography } from '../theme/theme';
import Header from '../components/Header';
const ProfileScreen = ({ navigation }) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);

  const handleDropdownToggle = () => {
    setShowDropdown(!showDropdown);
  };

  const handleOptionSelect = (option) => {
    setShowDropdown(false);
    if (option === 'Logout') {
      console.log('Logging out...');
    } else if (option === 'Settings') {
      navigation.navigate('Settings');
    }
  };

  const handlePressOutside = () => {
    setShowDropdown(false);
  };

  const navigateToScreen = (screen, stack) => {
    if (stack) {
      navigation.navigate(stack, { screen });
    } else {
      navigation.navigate(screen);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <TouchableWithoutFeedback onPress={handlePressOutside}>
        <View style={styles.Maincontainer}>
       
          <ScrollView contentContainerStyle={styles.scrollContainer}>
            <View style={styles.profileContainer}>
              <Image source={require('../../assets/profile.jpg')} style={styles.profileImage} />
              <Text style={styles.profileName}>Vishal Khadok</Text>
              <Text style={styles.profileBio}>I love fast food</Text>
            </View>

            {/* Personal Info and Addresses Section */}
            <View style={styles.optionContainer}>
              <TouchableOpacity style={styles.optionButton} onPress={() => navigation.navigate('Profile')}>
                <View style={styles.optionIconContainer}>
                  <Icon name="person-outline" size={24} color="#ff6b6b" />
                </View>
                <Text style={styles.optionText}>Personal Info</Text>
                <Icon name="chevron-right" size={24} color="#888888" />
              </TouchableOpacity>
              <View style={styles.divider} />

              <TouchableOpacity style={styles.optionButton} onPress={() => navigation.navigate('MyAddresses')}>
                <View style={styles.optionIconContainer}>
                  <Icon name="location-on" size={24} color="#ffa502" />
                </View>
                <Text style={styles.optionText}>Addresses</Text>
                <Icon name="chevron-right" size={24} color="#888888" />
              </TouchableOpacity>
            </View>

            {/* Coupons, My Orders, and Favourites Section */}
            <View style={styles.optionContainer}>
              <TouchableOpacity style={styles.optionButton} onPress={() => navigation.navigate('Coupons')}>
                <View style={styles.optionIconContainer}>
                  <Icon name="redeem" size={24} color="#2ed573" />
                </View>
                <Text style={styles.optionText}>Coupons</Text>
                <Icon name="chevron-right" size={24} color="#888888" />
              </TouchableOpacity>
              <View style={styles.divider} />

              <TouchableOpacity style={styles.optionButton} onPress={() => navigation.navigate('MyOrders')}>
                <View style={styles.optionIconContainer}>
                  <Icon name="list" size={24} color="#1e90ff" />
                </View>
                <Text style={styles.optionText}>My Orders</Text>
                <Icon name="chevron-right" size={24} color="#888888" />
              </TouchableOpacity>
              <View style={styles.divider} />

              <TouchableOpacity style={styles.optionButton} onPress={() => navigation.navigate('MyFavourites')}>
                <View style={styles.optionIconContainer}>
                  <Icon name="favorite" size={24} color="#ff4757" />
                </View>
                <Text style={styles.optionText}>Favourites</Text>
                <Icon name="chevron-right" size={24} color="#888888" />
              </TouchableOpacity>
              <View style={styles.divider} />
            </View>

            {/* Settings and Logout Section */}
            <View style={styles.optionContainer}>
              <TouchableOpacity style={styles.optionButton} onPress={() => navigation.navigate('Settings')}>
                <View style={styles.optionIconContainer}>
                  <Icon name="settings" size={24} color="#2ed573" />
                </View>
                <Text style={styles.optionText}>Settings</Text>
                <Icon name="chevron-right" size={24} color="#888888" />
              </TouchableOpacity>
              <View style={styles.divider} />

              <TouchableOpacity style={styles.optionButton} onPress={() => navigation.navigate('Logout')}>
                <View style={styles.optionIconContainer}>
                  <Icon name="logout" size={24} color="#ff4757" />
                </View>
                <Text style={styles.optionText}>Log Out</Text>
                <Icon name="chevron-right" size={24} color="#888888" />
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    padding: spacing.medium,
  },
  Maincontainer: {
padding : spacing.medium * -1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: spacing.large,
    justifyContent: 'space-between',
    padding: 10,
    margin: 15,
  },
  headerTitle: {
    ...typography.header,
    fontSize: 24,
    flex: 1,
    textAlign: 'center',
  },
  dropdownToggle: {
    padding: 8,
  },
  profileContainer: {
    alignItems: 'center',
    marginVertical: 0,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 8,
    borderWidth: 2,
    borderColor: '#fff',
  },
  profileName: {
    fontSize: 20,
    marginBottom: 8,
    fontWeight: 'bold',
    color: '#000',
  },
  profileBio: {
    color: '#888888',
    marginBottom: 16,
    fontStyle: 'italic',
  },
  scrollContainer: {
    padding: 20,
    paddingBottom: 70,
  },
  optionContainer: {
    backgroundColor: '#F0F0F0',
    borderRadius: 10,
    marginBottom: 10,
    paddingVertical: 5,
  },
  optionButton: {
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  optionIconContainer: {
    width: 32,
    height: 32,
    justifyContent: 'center',
    alignItems: 'center',
  },
  optionText: {
    fontSize: 16,
    marginLeft: 16,
    flex: 1,
  },
  divider: {
    height: 1,
    backgroundColor: '#CCCCCC',
    marginHorizontal: 16,
  },
  dropdown: {
    position: 'absolute',
    top: 40,
    right: 0,
    backgroundColor: 'white',
    borderRadius: 10,
    elevation: 5,
    zIndex: 1000,
    width: 120,
  },
  dropdownItem: {
    padding: 10,
  },
  dropdownItemText: {
    fontSize: 16,
    color: '#000',
    textAlign: 'center',
  },
});

export default ProfileScreen;
