import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native';
import { colors, typography, spacing } from '../theme/theme';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Header from '../components/Header';

const MyAddressesScreen = ({ navigation }) => {
  const addresses = [
    {
      title: 'HOME',
      type: 'Home',
      details: '2464 Royal Ln. Mesa, New Jersey 45463',
      iconColor: colors.primary,
    },
    {
      title: 'WORK',
      type: 'Work',
      details: '3891 Ranchview Dr. Richardson, California 62639',
      iconColor: '#A020F0', // Purple color
    },
  ];

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container}>
        <Header navigation={navigation} title="Addresses" />
        {addresses.map((address, index) => (
          <View key={index} style={styles.addressCard}>
            <View style={styles.iconContainer}>
              <Ionicons
                name={address.type === 'Home' ? 'home-outline' : 'briefcase-outline'}
                size={24}
                color={address.iconColor}
              />
            </View>
            <View style={styles.addressContent}>
              <View style={styles.addressRow}>
                <Text style={styles.addressTitle}>{address.title}</Text>
                <View style={styles.addressActions}>
                  <TouchableOpacity onPress={() => navigation.navigate('EditAddress', { address })}>
                    <Ionicons name="create-outline" size={24} color={colors.primary} />
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => console.log('Delete pressed')}>
                    <Ionicons name="trash-outline" size={24} color={colors.error} />
                  </TouchableOpacity>
                </View>
              </View>
              <Text style={styles.addressDetails}>{address.details}</Text>
            </View>
          </View>
        ))}
        <TouchableOpacity style={styles.addButton} onPress={() => navigation.navigate('AddNewAddress')}>
          <Text style={styles.addButtonText}>ADD NEW ADDRESS</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.background,
  },
  container: {
    padding: spacing.large,
  },
  addressCard: {
    backgroundColor: colors.lightAccent, // Using a light accent color from your theme
    borderRadius: 10,
    padding: spacing.medium,
    marginBottom: spacing.medium,
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconContainer: {
    marginRight: spacing.medium,
  },
  addressContent: {
    flex: 1,
  },
  addressRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  addressTitle: {
    fontSize: typography.header.fontSize,
    fontWeight: typography.header.fontWeight,
    color: colors.primary,
  },
  addressDetails: {
    fontSize: 14,
    color: colors.text, // Use a general text color from your theme
    marginTop: spacing.small,
  },
  addressActions: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  addButton: {
    backgroundColor: colors.primary, // Secondary color for emphasis
    paddingVertical: spacing.medium,
    paddingHorizontal: spacing.large,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: spacing.large,
  },
  addButtonText: {
    color: colors.white, // Text color that contrasts with the secondary color
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default MyAddressesScreen;
