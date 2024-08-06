// ./src/components/HeaderWithProfile.js
import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text,TextInput, Image } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'; // For icons
import { colors, spacing } from '../../theme/theme';

const HeaderWithProfile = ({ onProfilePress }) => {
  return (
    <View style={styles.upperPart}>
      <View style={styles.header}>
        <View style={styles.locationContainer}>
          <Ionicons name="location" size={24} color="black" />
          <View style={styles.addressWrapper}>
            <Text style={styles.deliveringToText}>Delivering to</Text>
            <TouchableOpacity style={styles.addressContainer} onPress={() => { /* Handle address selection */ }}>
              <Text style={styles.addressText}>Current Location</Text>
              <Ionicons name="chevron-down" size={16} color="black" />
            </TouchableOpacity>
            {/* Add Dropdown if needed */}
          </View>
        </View>
        <View style={styles.profileContainer}>
          <TouchableOpacity style={styles.rhombus} onPress={onProfilePress}>
            <Image source={require('../../../assets/profile.jpg')} style={styles.profileImage} />
          </TouchableOpacity>
          {/* Add notification badge if needed */}
        </View>
      </View>

      <View style={styles.searchBarContainer}>
        <View style={styles.searchBar}>
          <Ionicons name="search" size={20} color="gray" />
          <TextInput placeholder="Search for Lunch" style={styles.searchInput} />
        </View>
        <TouchableOpacity style={styles.searchButton}>
          <Ionicons name="md-send" size={20} color="gray" />
        </TouchableOpacity>
      </View>
      {/* Add delivery info section if needed */}
    </View>
  );
};

const styles = StyleSheet.create({
  upperPart: {
    backgroundColor: colors.background,
    paddingTop: 10,
    paddingHorizontal: 20,
    paddingBottom: 10,
    position: 'relative',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  addressWrapper: {
    marginLeft: 10,
  },
  deliveringToText: {
    color: 'grey',
    fontSize: 14,
    lineHeight: 35,
  },
  addressContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  addressText: {
    color: colors.black,
    fontSize: 16,
    marginHorizontal: 5,
    lineHeight: 16,
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rhombus: {
    width: 40,
    height: 40,
    transform: [{ rotate: '45deg' }],
    overflow: 'hidden',
    marginLeft: spacing.medium,
  },
  profileImage: {
    width: 56,
    height: 56,
    borderRadius: 28,
    transform: [{ rotate: '-45deg' }],
  },
  greeting: {
    fontSize: 20,
    color: 'black',
    marginVertical: 20,
  },
  userName: {
    fontSize: 30,
    color: 'black',
    fontWeight: 'bold',
    marginBottom: 20,
  },
  searchBarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    height: 60,
    paddingHorizontal: 10,
    paddingVertical: 8,
    flex: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 3,
  },
  searchInput: {
    marginLeft: 10,
    fontSize: 16,
    color: 'gray',
    flex: 1,
  },
  searchButton: {
    marginLeft: 10,
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    height: 60,
    width: 60,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 3,
  },
});

export default HeaderWithProfile;
