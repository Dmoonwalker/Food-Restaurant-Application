import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Modal, FlatList, TouchableWithoutFeedback } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { colors } from '../theme/theme'; // Update with your actual path

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
    paddingTop: 10,
    paddingHorizontal: 20,
    paddingBottom: 10,
    position: 'relative', // Fixes the header at the top
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1000, // Ensures the header stays on top of other components
    elevation: 5,
  },
  header: {
    marginBottom: 10, // Space between header and scrollable content
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
    marginLeft: 10,
    position: 'relative', // Ensure the dropdown is positioned relative to this wrapper
  },
  deliveringToText: {
    color: 'grey',
    fontSize: 14,
    lineHeight: 18,
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
  infoText: {
    marginLeft: 5,
  },
  infoLabel: {
    fontSize: 14,
    color: 'grey',
    textAlign: 'center',
  },
  infoValue: {
    fontSize: 14,
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
  },
  modalItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomColor: '#ddd',
    borderBottomWidth: 1,
  },
  modalItemText: {
    fontSize: 18,
    marginLeft: 10,
  },
  dropdownItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderBottomColor: '#ddd',
    borderBottomWidth: 1,
  },
  dropdownItemText: {
    fontSize: 16,
    marginLeft: 10,
  },
  dropdownText: {
    flex: 1,
  },
});

export default HomeHeader;
