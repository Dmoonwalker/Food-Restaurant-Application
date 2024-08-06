import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, SafeAreaView, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { colors, typography, spacing } from '../theme/theme'; // Assuming theme is correctly imported

import Header from '../components/Header';

const AddCouponScreen = ({ navigation }) => {
  const [couponCode, setCouponCode] = useState('');

  const handleSubmit = () => {
    console.log('Coupon Code:', couponCode);
    // Add logic to handle coupon code submission
  };

  return (
    <SafeAreaView style={styles.container}>
       <Header navigation={navigation} title="Coupons" />

      <View style={styles.couponIconContainer}>
        <Image source={require('../../assets/coupon_icon.png')} style={styles.couponIcon} />
      </View>
   
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Enter Coupon Code"
          placeholderTextColor={colors.text} // Set placeholder text color
          value={couponCode}
          onChangeText={setCouponCode}
        />
      </View>

      <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
        <Text style={styles.submitButtonText}>Submit</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    alignItems: 'center',
    padding: spacing.medium,
  },
  couponIconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '20%',
  },
  couponIcon: {
    width: 150,
    height: 250,
  },
  line: {
    width: '80%',
    height: 1,
    backgroundColor: colors.gray,
    marginVertical: 0,
  },
  inputContainer: {
    width: '80%',
    marginTop: '0%',
  },
  input: {
    height: 50,
    padding: spacing.small,
    backgroundColor: colors.lightGray,
    color: colors.text, // Text color for the input
    borderRadius: 10,
    fontSize: 16,
    textAlign: 'left',
    borderWidth : 1,
    borderColor: colors.primary,
  },
  submitButton: {
    backgroundColor: colors.primary,
    paddingVertical: spacing.medium,
    paddingHorizontal: spacing.large,
    borderRadius: 10,
    alignItems: 'center',
    width: '50%',
    marginTop: spacing.large,
  },
  submitButtonText: {
    ...typography.button,
    color: colors.white,
  },
});

export default AddCouponScreen;
