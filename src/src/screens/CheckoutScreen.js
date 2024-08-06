import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { colors, typography, spacing } from '../theme/theme';
import Header from '../components/Header';
const CheckoutScreen = ({ navigation }) => {
  const [deliveryMethod, setDeliveryMethod] = useState('Door delivery');
  const totalPrice = 23000; // Example total price

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container}>
      <Header navigation={navigation} title="Checkout" />

        <View style={styles.addressContainer}>
          <View style={styles.addressHeader}>
            <Text style={styles.sectionTitle}>Address details</Text>
            <TouchableOpacity onPress={() => navigation.navigate('ChooseAddress')}>
              <Text style={styles.changeText}>change</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.addressCard}>
            <Text style={styles.addressTitle}>Marvis Kparobo</Text>
            <Text style={styles.addressDetails}>Km 5 refinery road opposite republic road, effurun, delta state</Text>
            <Text style={styles.addressDetails}>+234 9011039271</Text>
          </View>
        </View>

        <Text style={styles.sectionTitle}>Delivery method</Text>
        <View style={styles.deliveryMethodContainer}>
          <TouchableOpacity style={styles.deliveryOption} onPress={() => setDeliveryMethod('Door delivery')}>
            <Ionicons
              name={deliveryMethod === 'Door delivery' ? "radio-button-on" : "radio-button-off"}
              size={24}
              color={deliveryMethod === 'Door delivery' ? colors.primary : '#000'}
            />
            <Text style={styles.deliveryOptionText}>Door delivery</Text>
          </TouchableOpacity>
          <View style={styles.divider} />
          <TouchableOpacity style={styles.deliveryOption} onPress={() => setDeliveryMethod('Pick up')}>
            <Ionicons
              name={deliveryMethod === 'Pick up' ? "radio-button-on" : "radio-button-off"}
              size={24}
              color={deliveryMethod === 'Pick up' ? colors.primary : '#000'}
            />
            <Text style={styles.deliveryOptionText}>Pick up</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.totalContainer}>
          <View style={styles.summaryRow}>
            <View>
              <Text style={styles.totalText}>Total</Text>
              <Text style={styles.totalPrice}>
                <Text style={styles.currencySign}>₦</Text>
                {totalPrice.toLocaleString()}
              </Text>
            </View>
            <TouchableOpacity style={styles.proceedButton} onPress={() => navigation.navigate('PaymentMethod')}>
              <Text style={styles.proceedButtonText}>Proceed to payment</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#F0F0F0', // Light grey background
  },
  container: {
    padding: spacing.large,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: spacing.large,
    justifyContent: 'space-between',
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
  headerTitle: {
    ...typography.header,
    fontSize: 24,
    flex: 1,
    textAlign: 'center',
    marginRight: 40,
  },
  addressContainer: {
    marginBottom: spacing.large,
  },
  addressHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: spacing.small,
  },
  sectionTitle: {
    ...typography.header,
    fontSize: 20,
    color: '#000', // Black color for titles
  },
  changeText: {
    color: colors.primary,
    textAlign: 'right',
  },
  addressCard: {
    backgroundColor: '#FFFFFF', // White background
    padding: spacing.medium,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  addressTitle: {
    ...typography.header,
    fontSize: 18,
    marginBottom: spacing.medium,
  },
  addressDetails: {
    color: '#000',
    fontSize: 16,
  },
  deliveryMethodContainer: {
    backgroundColor: '#FFFFFF', // White background
    padding: spacing.medium,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
    marginTop: spacing.small, 
    marginBottom: spacing.large,
  },
  deliveryOption: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: spacing.medium,
    backgroundColor: '#FFFFFF', // White background
    borderRadius: 10,
    marginBottom: spacing.small,
  },
  deliveryOptionText: {
    ...typography.body,
    marginLeft: spacing.small,
  },
  totalContainer: {
    backgroundColor: '#FFFFFF', // White background
    padding: spacing.medium,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
    marginBottom: spacing.large,
  },
  summaryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  totalText: {
    ...typography.body,
    fontSize: 18,
    fontWeight: 'bold', // Bold text for total
  },
  totalPrice: {
    ...typography.header,
    fontSize: 24,
    color: '#000',
    fontWeight: 'bold', // Bold text for total price
  },
  currencySign: {
    fontSize: 18,
    color: colors.primary,
  },
  proceedButton: {
    backgroundColor: colors.primary,
    padding: spacing.medium,
    borderRadius: 10,
    alignItems: 'center',
    marginLeft: spacing.medium,
  },
  proceedButtonText: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 18,
  },
  divider: {
    height: 1,
    backgroundColor: '#EEE',
    marginVertical: spacing.medium,
    width: '100%',
  },
});

export default CheckoutScreen;
