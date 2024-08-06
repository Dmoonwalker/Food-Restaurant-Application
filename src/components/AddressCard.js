// ./src/components/AddressCard.js
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { colors, typography, spacing } from '../theme/theme';

const AddressCard = ({ address, onEdit }) => {
  return (
    <View style={styles.card}>
      <View style={styles.cardHeader}>
        <Text style={styles.addressTitle}>{address.title}</Text>
        <TouchableOpacity style={styles.editButton} onPress={onEdit}>
          <Text style={styles.editButtonText}>Edit</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.addressSubtitle}>{address.type}</Text>
      <Text style={styles.addressDetails}>{address.details}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFF',
    padding: spacing.medium,
    borderRadius: 10,
    marginBottom: spacing.medium,
    shadowColor: '#0000FF', // Blue shadow color
    shadowOffset: { width: 5, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 3,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: spacing.small,
  },
  addressTitle: {
    ...typography.subHeader,
    color: '#000',
    fontSize: 22,
  },
  editButton: {
    padding: spacing.small,
  },
  editButtonText: {
    color: colors.primary,
  },
  addressSubtitle: {
    color: '#888888',
    marginBottom: spacing.small,
    fontSize: 15
  },
  addressDetails: {
    color: '#888888',
    fontSize: 19
  },
});

export default AddressCard;
