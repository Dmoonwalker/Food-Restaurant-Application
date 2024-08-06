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
                    <Ionicons name="create-outline" size={24} color="#FF914D" />
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <Ionicons name="trash-outline" size={24} color="#FF914D" />
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
    fontSize: 20,
    flex: 1,
    textAlign: 'center',
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
    backgroundColor: '#E0F7FA', // Cool sky blue color
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
    ...typography.header,
    fontSize: 16,
  },
  addressDetails: {
    color: '#777777',
    fontSize: 14,
    marginTop: spacing.small,
  },
  addressActions: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  addButton: {
    backgroundColor: '#FF914D',
    paddingVertical: spacing.medium,
    paddingHorizontal: spacing.large,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: spacing.large,
  },
  addButtonText: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default MyAddressesScreen;
