import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Modal, FlatList, TouchableWithoutFeedback } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { colors, spacing, typography } from '../theme/theme'; // Update with your actual path

const addresses = ['Home', 'Office', "Friend's Place"];

const HomeHeader = ({ showDropdown, setShowDropdown }) => {
  const [currentLocation, setCurrentLocation] = useState('Home');
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  const navigation = useNavigation(); // Use the navigation hook

  // Simulating fetching location from GPS
  useEffect(() => {
    setTimeout(() => {
      setCurrentLocation('Home');
    }, 2000); // Simulate a delay
  }, []);

  // Function to handle address option selection
  const handleAddressSelect = (address) => {
    if (address === 'Add New Address') {
      setIsModalVisible(false); // Hide modal
      navigation.navigate('CartStack', { screen: 'AddAddress' }); // Navigate to AddAddress screen under CartStack
    } else {
      setCurrentLocation(address);
      setIsDropdownVisible(false); // Hide dropdown after selection
      setIsModalVisible(false); // Hide modal after selection
    }
  };

  const getAddressIcon = (address) => {
    switch (address) {
      case 'Home':
        return 'home-outline';
      case 'Office':
        return 'briefcase-outline';
      case "Friend's Place":
        return 'people-outline';
      default:
        return 'location-outline';
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.infoSection}>
          <View style={styles.infoItem}>
            <Ionicons name="location" size={24} color={colors.primary} />
            <View style={styles.addressWrapper}>
              <Text style={styles.deliveringToText}>Delivering to</Text>
              <TouchableOpacity style={styles.addressContainer} onPress={() => setIsModalVisible(true)}>
                <Text style={styles.addressText}>{currentLocation}</Text>
                <Ionicons name="chevron-down" size={16} color="black" />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.infoItem}>
            <Ionicons name="pricetag-outline" size={20} color="black" />
            <View style={styles.infoText}>
              <Text style={styles.infoLabel}>Delivery Fee</Text>
              <Text style={styles.infoValue}>₦500</Text>
            </View>
          </View>
        </View>
      </View>

      {/* Modal for address selection */}
      <Modal
        visible={isModalVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setIsModalVisible(false)}
      >
        <TouchableWithoutFeedback onPress={() => setIsModalVisible(false)}>
          <View style={styles.modalContainer}>
            <TouchableWithoutFeedback>
              <View style={styles.modalContent}>
                <Text style={styles.modalHeading}>Select Address</Text>
                <TouchableOpacity style={styles.modalItem} onPress={() => handleAddressSelect('Current Location')}>
                  <Ionicons name="navigate-outline" size={24} color={colors.primary} />
                  <Text style={styles.modalItemText}>Deliver to Current Location</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.modalItem} onPress={() => setIsDropdownVisible(!isDropdownVisible)}>
                  <Ionicons name={getAddressIcon(currentLocation)} size={24} color={colors.primary} />
                  <Text style={[styles.modalItemText, styles.dropdownText]}>Deliver to Address</Text>
                  <Ionicons name={isDropdownVisible ? "chevron-up" : "chevron-down"} size={24} color="black" />
                </TouchableOpacity>

                {isDropdownVisible && (
                  <FlatList
                    data={addresses}
                    renderItem={({ item }) => (
                      <TouchableOpacity
                        style={[
                          styles.dropdownItem,
                          item === addresses[addresses.length - 1] && { borderBottomWidth: 0 },
                        ]}
                        onPress={() => handleAddressSelect(item)}
                      >
                        <Ionicons name={getAddressIcon(item)} size={20} color="black" />
                        <Text style={[styles.dropdownItemText, item === currentLocation && { color: colors.primary }]}>
                          {item}
                        </Text>
                      </TouchableOpacity>
                    )}
                    keyExtractor={(item, index) => index.toString()}
                  />
                )}

                <TouchableOpacity style={[styles.modalItem, { borderBottomWidth: 0 }]} onPress={() => handleAddressSelect('Add New Address')}>
                  <Ionicons name="add-outline" size={24} color={colors.primary} />
                  <Text style={styles.modalItemText}>Add New Address</Text>
                </TouchableOpacity>
              </View>
            </TouchableWithoutFeedback>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background,
    paddingTop: spacing.medium,
    paddingHorizontal: spacing.large,
    paddingBottom: spacing.medium,
    position: 'relative', // Fixes the header at the top
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1000, // Ensures the header stays on top of other components
  },
  header: {
    marginBottom: spacing.small, // Space between header and scrollable content
  },
  infoSection: {
    flexDirection: 'row', // Align info items horizontally
    justifyContent: 'space-between', // Distribute space between info items
    alignItems: 'center',
  },
  infoItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  addressWrapper: {
    marginLeft: spacing.small,
    position: 'relative', // Ensure the dropdown is positioned relative to this wrapper
  },
  deliveringToText: {
    color: colors.darkGray,
    fontSize: typography.body.fontSize,
    lineHeight: 28,
  },
  addressContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  addressText: {
    color: colors.text,
    fontSize: typography.body.fontSize,
    marginHorizontal: spacing.small,
    lineHeight: 16,
    fontWeight: 'bold',
  },
  infoText: {
    marginLeft: spacing.small,
  },
  infoLabel: {
    fontSize: typography.body.fontSize,
    color: colors.darkGray,
    textAlign: 'center',
  },
  infoValue: {
    fontSize: typography.body.fontSize,
    color: colors.text,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: colors.white,
    borderTopLeftRadius: spacing.small,
    borderTopRightRadius: spacing.small,
    padding: spacing.large,
     // Added margin bottom for sufficient spacing
  },
  modalHeading: {
    fontSize: typography.header.fontSize,
    fontWeight: 'bold',
    textAlign: 'center',
    color:colors.text,
    marginBottom: spacing.large, // Added margin bottom for spacing below heading
  },
  modalItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: spacing.large,
    borderBottomColor: colors.gray,
    borderBottomWidth: 1,
  },
  modalItemText: {
    fontSize: typography.body.fontSize,
    marginLeft: spacing.small,
    color: colors.text
  },
  dropdownItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: spacing.small,
    paddingHorizontal: spacing.medium,
    borderBottomColor: colors.gray,
    borderBottomWidth: 1,
  },
  dropdownItemText: {
    fontSize: typography.body.fontSize,
    marginLeft: spacing.small,
  },
  dropdownText: {
    flex: 1,
  },
});

export default HomeHeader;
