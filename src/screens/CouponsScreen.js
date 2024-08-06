import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native';
import { colors, typography, spacing } from '../theme/theme';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Header from '../components/Header';

const CouponsScreen = ({ navigation }) => {
  const coupons = [
    {
      name: 'Restaurant Name',
      description: 'Enjoy a 20% discount on your next visit! Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      discount: '20%',
    },
    {
      name: 'Cafe Delight',
      description: 'Get 10% off on all beverages. Valid until the end of this month.',
      discount: '10%',
    },
  ];

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container}>
        <Header navigation={navigation} title="Checkout" />
        {coupons.map((coupon, index) => (
          <View key={index} style={styles.couponCard}>
            <View style={styles.couponContent}>
              <Text style={styles.couponName}>{coupon.name}</Text>
              <Text style={styles.couponDescription}>{coupon.description}</Text>
            </View>
            <View style={styles.couponDiscountContainer}>
              <Text style={styles.couponDiscount}>{coupon.discount}</Text>
            </View>
          </View>
        ))}
        <TouchableOpacity style={styles.addCouponButton} onPress={() => navigation.navigate('AddCoupon')}>
          <Text style={styles.addCouponButtonText}>+ Add Coupon</Text>
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
  couponCard: {
    backgroundColor: colors.lightAccent, // Use a light accent color from your theme
    borderRadius: 10,
    padding: spacing.medium,
    marginBottom: spacing.medium,
    flexDirection: 'row',
    alignItems: 'center',
    // Remove shadow properties for a cleaner look
  },
  couponContent: {
    flex: 3,  // Increase flex to accommodate more text
  },
  couponName: {
    ...typography.header,
    fontSize: 16,
    marginBottom: spacing.small,
  },
  couponDescription: {
    color: colors.text,
    fontSize: 14,
  },
  couponDiscountContainer: {
    flex: 1, // Make sure the discount container does not take too much space
    alignItems: 'center',
    justifyContent: 'center',
  },
  couponDiscount: {
    color: colors.error, // use your theme's error or accent color for discounts
    fontSize: 20,
    fontWeight: 'bold',
  },
  addCouponButton: {
    backgroundColor: 'transparent',
    borderColor: colors.primary,
    borderWidth: 1,
    paddingVertical: spacing.medium,
    paddingHorizontal: spacing.large,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: spacing.large,
  },
  addCouponButtonText: {
    color: colors.primary,
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default CouponsScreen;
