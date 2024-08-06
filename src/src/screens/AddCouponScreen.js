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
      <View style={styles.line} />
      
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Enter Coupon Code"
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
 
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: spacing.large,
    justifyContent: 'space-between',
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
    fontSize: 24,
    flex: 1,
    textAlign: 'center',
    marginRight: 40,
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
    marginTop: '20%',
  },
  input: {
    height: 50,
    padding: spacing.small,
    backgroundColor: colors.lightGray,
    borderRadius: 10,
    fontSize: 16,
    textAlign: 'left',
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
