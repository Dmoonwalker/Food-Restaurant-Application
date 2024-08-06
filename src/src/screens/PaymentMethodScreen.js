import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView, ScrollView, Image } from 'react-native';
import { colors, typography, spacing } from '../theme/theme';
import Ionicons from 'react-native-vector-icons/Ionicons';

const PaymentMethodScreen = ({ navigation }) => {
  const [selectedMethod, setSelectedMethod] = useState(null);

  const paymentMethods = [
    { id: 1, label: 'Cash on Delivery', icon: require('../../assets/cash.png') },
    { id: 2, label: 'Credit Card', icon: require('../../assets/creditcard.jpg') },
  ];

  const savedMethods = [
    { id: 3, label: 'Visa', icon: require('../../assets/visa.png'), saved: true, name: 'Hamza Tariq', cardNumber: '0274 7414 ***' }
  ];

  const handleNext = () => {
    // Handle next step logic here
    navigation.navigate('ConfirmOrder'); // Replace 'NextScreen' with the actual screen you want to navigate to
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.header}>
          <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
            <Ionicons name="chevron-back-outline" size={24} color={colors.black} style={styles.backIcon} />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Payment Method</Text>
        </View>
        {paymentMethods.map((method) => (
          <TouchableOpacity
            key={method.id}
            style={[
              styles.methodContainer,
              selectedMethod === method.id && styles.selectedMethod,
            ]}
            onPress={() => setSelectedMethod(method.id)}
          >
            <View style={styles.methodDetails}>
              <View
                style={[
                  styles.radioCircle,
                  selectedMethod === method.id && styles.selectedRadioCircle,
                ]}
              />
              <Image source={method.icon} style={styles.methodIcon} />
              <Text style={styles.methodLabel}>{method.label}</Text>
            </View>
          </TouchableOpacity>
        ))}

        <Text style={styles.savedMethodTitle}>Saved Method</Text>
        {savedMethods.map((method) => (
          <TouchableOpacity
            key={method.id}
            style={[
              styles.savedMethodContainer,
              selectedMethod === method.id && styles.selectedMethod,
            ]}
            onPress={() => setSelectedMethod(method.id)}
          >
            <View style={styles.methodDetails}>
              <View
                style={[
                  styles.radioCircle,
                  selectedMethod === method.id && styles.selectedRadioCircle,
                ]}
              />
              <Image source={method.icon} style={styles.methodIcon} />
              <View style={styles.savedMethodDetails}>
                <Text style={styles.savedMethodName}>{method.name}</Text>
                <Text style={styles.savedMethodCard}>{method.cardNumber}</Text>
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
      <TouchableOpacity style={styles.nextButton} onPress={handleNext}>
        <Text style={styles.nextButtonText}>Proceed</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
  container: {
    flex: 1,
    backgroundColor: '#fcfcfc',
  },
  scrollContainer: {
    padding: spacing.large,
    paddingBottom: spacing.large * 5, // Added padding for floating button space
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: spacing.large,
    justifyContent: 'space-between',
    marginBottom: 50,
  },
  backButton: {
    width: 50,
    height: 50,
    backgroundColor: '#FFF',
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
    color: colors.black,
    fontSize: 24,
    flex: 1,
    textAlign: 'center',
    marginRight: 40,
  },
  methodContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: spacing.medium,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    marginBottom: spacing.large,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    height: 95,
    elevation: 5,
    marginHorizontal: spacing.large,
  },
  savedMethodContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: spacing.medium,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    marginBottom: spacing.large,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    height: 90,
    elevation: 5,
    marginHorizontal: spacing.large,
  },
  methodDetails: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  methodIcon: {
    width: 24,
    height: 24,
    marginRight: spacing.small,
  },
  savedMethodDetails: {
    flexDirection: 'column',
    marginLeft: spacing.small,
  },
  savedMethodName: {
    ...typography.body,
    fontSize: 16,
  },
  savedMethodCard: {
    ...typography.body,
    fontSize: 14,
    color: '#888888',
  },
  selectedMethod: {
    borderColor: colors.primary,
    borderWidth: 2,
  },
  methodLabel: {
    ...typography.body,
    color: '#000',
    fontSize: 18,
  },
  radioCircle: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: colors.primary,
    marginRight: spacing.medium, // Added margin to the right
  },
  selectedRadioCircle: {
    borderColor: colors.primary,
    backgroundColor: colors.primary,
  },
  savedMethodTitle: {
    ...typography.body,
    fontSize: 16,
    marginVertical: spacing.large,
    textAlign: 'center',
    color: '#888888',
  },
  nextButton: {
    position: 'absolute',
    bottom: spacing.large,
    left: '20%', // Adjusted to make it 60% of the screen width
    right: '20%', // Adjusted to make it 60% of the screen width
    backgroundColor: colors.primary,
    padding: spacing.medium,
    borderRadius: 15,
    alignItems: 'center',
    marginBottom: 70,
  },
  nextButtonText: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 20,
  },
});

export default PaymentMethodScreen;
