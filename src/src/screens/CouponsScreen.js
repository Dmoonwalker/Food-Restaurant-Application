import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native';
import { colors, typography, spacing } from '../theme/theme';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Header from '../components/Header';

const CouponsScreen = ({ navigation }) => {
  const coupons = [
    {
      name: 'Restaurant Name',
      description: 'Lorem ipsum dolor sit amet,',
      discount: '20%',
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
        <TouchableOpacity style={styles.addCouponButton} onPress={() => {navigation.navigate('AddCoupon')}}>
          <Text style={styles.addCouponButtonText}>+ Add Coupon</Text>
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
  couponCard: {
    backgroundColor: '#FFF',
    borderRadius: 10,
    padding: spacing.medium,
    marginBottom: spacing.medium,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  couponContent: {
    flex: 1,
  },
  couponName: {
    ...typography.header,
    fontSize: 16,
    marginBottom: spacing.small,
  },
  couponDescription: {
    color: '#777777',
    fontSize: 14,
  },
  couponDiscountContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  couponDiscount: {
    color: '#FF0000',
    fontSize: 20,
    fontWeight: 'bold',
  },
  addCouponButton: {
    borderColor: '#FF0000',
    borderWidth: 1,
    paddingVertical: spacing.medium,
    paddingHorizontal: spacing.large,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: spacing.large,
  },
  addCouponButtonText: {
    color: '#FF0000',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default CouponsScreen;
