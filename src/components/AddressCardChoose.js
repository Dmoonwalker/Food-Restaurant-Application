import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { colors, spacing, typography } from '../theme/theme';

const AddressCardChoose = ({ address, onEdit, onSelect, isSelected, cardStyle, titleStyle, detailsStyle }) => {
  return (
    <View style={[styles.card, cardStyle]}>
      <View style={styles.header}>
        <Text style={[styles.title, titleStyle]}>{address.title}</Text>
        {onSelect ? (
          <TouchableOpacity onPress={onSelect}>
            <Ionicons
              name={isSelected ? "radio-button-on" : "radio-button-off"}
              size={24}
              color={isSelected ? colors.primary : '#000'}
            />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity style={styles.editButton} onPress={onEdit}>
            <Text style={styles.editButtonText}>Edit</Text>
          </TouchableOpacity>
        )}
      </View>
      <Text style={[styles.details, detailsStyle]}>{address.details}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
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
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: spacing.small,
  },
  title: {
    ...typography.header,
    fontSize: 18,
  },
  details: {
    color: '#000',
    fontSize: 16,
  },
  editButton: {
    marginTop: spacing.small,
    alignSelf: 'flex-end',
  },
  editButtonText: {
    color: colors.primary,
    fontWeight: 'bold',
  },
});

export default AddressCardChoose;
