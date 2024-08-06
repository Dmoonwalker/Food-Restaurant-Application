import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native';
import AddressCard from '../components/AddressCardChoose';
import { colors, typography, spacing } from '../theme/theme';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Header from '../components/Header';
const ChooseAddressScreen = ({ navigation }) => {
  const [selectedAddress, setSelectedAddress] = useState(null);

  const addresses = [
    {
      id: 1,
      title: 'My Home Address',
      type: 'Home',
      details: '(503) 338-5200 15612 Fisher Island Dr Miami Beach, Florida(FL), 33109',
    },
    {
      id: 2,
      title: 'My Office Address',
      type: 'Office',
      details: '(503) 338-5200 15612 Fisher Island Dr Miami Beach, Florida(FL), 33109',
    },
  ];

  const handleSelectAddress = (id) => {
    setSelectedAddress(id);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container}>
      <Header navigation={navigation} title="Address" />
        {addresses.map((address) => (
          <AddressCard
            key={address.id}
            address={address}
            onSelect={() => handleSelectAddress(address.id)}
            isSelected={selectedAddress === address.id}
            cardStyle={styles.addressCard}
            titleStyle={styles.addressTitle}
            detailsStyle={styles.addressDetails}
          />
        ))}
        <TouchableOpacity style={styles.addButton} onPress={() => navigation.navigate('AddNewAddress')}>
          <Ionicons name="add" size={24} color={colors.primary} />
          <Text style={styles.addButtonText}>Add New Address</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.nextButton} onPress={() => navigation.goBack()}>
          <Text style={styles.nextButtonText}>Next</Text>
        </TouchableOpacity>
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
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: spacing.large,
  },
  headerTitle: {
    ...typography.header,
    fontSize: 20, // Smaller title
    flex: 1,
    textAlign: 'center', // Center align the title
  },
  backButton: {
    width: 50,
    height: 50,
    backgroundColor: '#FFFFFF',
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
  addressCard: {
    backgroundColor: '#FFF',
    borderRadius: 10,
    padding: spacing.medium,
    marginBottom: spacing.large,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  addressTitle: {
    ...typography.header,
    fontSize: 20, // Bigger text for the card title
    marginBottom: spacing.small,
  },
  addressDetails: {
    color: '#000',
    fontSize: 16, // Bigger text for the card details
  },
  addButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF',
    borderColor: colors.primary,
    borderWidth: 1,
    padding: spacing.medium,
    borderRadius: 5,
    justifyContent: 'center',
    marginTop: spacing.large,
    alignSelf: 'center', // Center align the button
    padding: 10,
    paddingHorizontal: 10
  },
  addButtonText: {
    color: colors.primary,
    fontWeight: 'bold',
    fontSize: 16,
    marginLeft: spacing.small,
  },
  nextButton: {
    backgroundColor: colors.primary,
    padding: spacing.medium,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: spacing.large,
  },
  nextButtonText: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default ChooseAddressScreen;
