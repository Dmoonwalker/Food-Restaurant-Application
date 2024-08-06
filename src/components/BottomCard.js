import React from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native';
import { colors, spacing } from '../theme/theme'; // Adjust the import paths as necessary

const BottomCard = ({ deliveryAddress, totalPrice, onPlaceOrder, onEditAddress }) => {
  return (
    <View style={styles.container}>
      <View style={styles.addressHeader}>
        <Text style={styles.deliveryLabel}>Delivery Address</Text>
        <TouchableOpacity onPress={onEditAddress}>
          <Text style={styles.editLabel}>Change</Text>
        </TouchableOpacity>
      </View>
      <TextInput
        style={styles.deliveryInput}
        value={deliveryAddress}
        editable={false}
      />
      <View style={styles.totalContainer}>
        <Text style={styles.totalLabel}>Total</Text>
        <Text style={styles.totalValue}>${totalPrice.toFixed(2)}</Text>
      </View>
      <TouchableOpacity style={styles.placeOrderButton} onPress={onPlaceOrder}>
        <Text style={styles.placeOrderButtonText}>Checkout</Text>
      </TouchableOpacity>
    </View>
  );
};


const styles = StyleSheet.create({
    container: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      backgroundColor: '#FFFFFF',
      padding: spacing.medium,
  
   
    },
    addressHeader: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: spacing.large,
    },
    deliveryLabel: {
      fontSize: 16,
      fontWeight: 'bold',
    },
    editLabel: {
      color: colors.primary,
      fontSize: 16,
    },
    deliveryInput: {
      fontSize: 16,
      color: '#000',
      paddingHorizontal: spacing.small,
      paddingVertical: spacing.tiny,
      borderRadius: 10,
      backgroundColor: '#f0f0f0',
      marginBottom: spacing.large,
    },
    totalContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: spacing.medium,
    },
    totalLabel: {
      fontSize: 18,
      fontWeight: 'bold',
      color: '#888',
    },
    totalValue: {
      fontSize: 24,
      fontWeight: 'bold',
      color: colors.black,
    },
    placeOrderButton: {
      backgroundColor: colors.primary,
      padding: spacing.medium,
      borderRadius: 10,
      alignItems: 'center',
      marginBottom: 20,
    },
    placeOrderButtonText: {
      color: '#FFF',
      fontSize: 18,
      fontWeight: 'bold',
    
    },
  });
  

export default BottomCard;
