import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView, ScrollView, Image, TextInput } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { colors, typography, spacing } from '../theme/theme';
import Header from '../components/Header';
const cartItemsData = [
  {
    id: 1,
    name: 'Strawberry Shake',
    description: 'Fresh strawberries blended with milk',
    price: 20.00,
    quantity: 2,
    image: require('../../assets/beef_burger.jpg'),
  },
  {
    id: 2,
    name: 'Broccoli Lasagna',
    description: 'Delicious lasagna with broccoli',
    price: 12.99,
    quantity: 1,
    image: require('../../assets/cheese_sandwich.jpg'),
  },
];

const availableCoupons = [
  'SAVE10',
  'DISCOUNT20',
  'FREESHIP',
];

const CartScreen = ({ navigation }) => {
  const [cartItems, setCartItems] = useState(cartItemsData);
  const [orderInstructions, setOrderInstructions] = useState('');
  const [couponCode, setCouponCode] = useState('');
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  const totalPrice = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  const applyCoupon = () => {
    console.log('Coupon Applied:', couponCode);
    setIsDropdownVisible(false);
  };

  const selectCoupon = (code) => {
    setCouponCode(code);
    setIsDropdownVisible(false);
  };

  const increaseQuantity = (itemId) => {
    setCartItems(cartItems.map(item => 
      item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item
    ));
  };

  const decreaseQuantity = (itemId) => {
    setCartItems(cartItems.map(item => 
      item.id === itemId && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
    ));
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container}>
      <Header navigation={navigation} title="Cart" />
      
        {cartItems.map((item, index) => (
          <View key={item.id} style={styles.cartItem}>
            <Image source={item.image} style={styles.cartItemImage} />
            <View style={styles.cartItemDetails}>
              <Text style={styles.cartItemName}>{item.name}</Text>
              <Text style={styles.cartItemDescription}>{item.description}</Text>
              <View style={styles.cartItemPriceContainer}>
                <Text style={styles.cartItemPrice}>${item.price.toFixed(2)}</Text>
                <View style={styles.quantityContainer}>
                  <TouchableOpacity onPress={() => decreaseQuantity(item.id)} style={styles.quantityButton}>
                    <Ionicons name="remove-circle-outline" size={24} color={colors.primary} />
                  </TouchableOpacity>
                  <Text style={styles.cartItemQuantity}>{item.quantity}</Text>
                  <TouchableOpacity onPress={() => increaseQuantity(item.id)} style={styles.quantityButton}>
                    <Ionicons name="add-circle-outline" size={24} color={colors.primary} />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        ))}

        <Text style={styles.sectionTitle}>Coupon Code</Text>
        {availableCoupons.length > 0 ? (
          <View style={styles.couponContainer}>
            <TouchableOpacity
              style={styles.couponInput}
              onPress={() => setIsDropdownVisible(!isDropdownVisible)}
            >
              <Text style={styles.couponInputText}>
                {couponCode || 'Select coupon code'}
              </Text>
              <Ionicons name={isDropdownVisible ? 'chevron-up' : 'chevron-down'} size={20} color={colors.black} />
            </TouchableOpacity>
            {isDropdownVisible && (
              <View style={styles.dropdown}>
                {availableCoupons.map((code) => (
                  <TouchableOpacity
                    key={code}
                    style={styles.dropdownItem}
                    onPress={() => selectCoupon(code)}
                  >
                    <Text style={styles.dropdownItemText}>{code}</Text>
                  </TouchableOpacity>
                ))}
              </View>
            )}
            <TouchableOpacity style={styles.applyButton} onPress={applyCoupon}>
              <Text style={styles.applyButtonText}>Apply</Text>
            </TouchableOpacity>
          </View>
        ) : (
          <Text style={styles.noCouponsText}>No available coupons</Text>
        )}

        <Text style={styles.sectionTitle}>Order Summary</Text>
        <View style={styles.summaryContainer}>
          <Text style={styles.summaryText}>Subtotal</Text>
          <Text style={styles.summaryValue}>${totalPrice.toFixed(2)}</Text>
        </View>
        <View style={styles.summaryContainer}>
          <Text style={styles.summaryText}>Tax and Fees</Text>
          <Text style={styles.summaryValue}>$5.00</Text>
        </View>

        <View style={[styles.summaryContainer, styles.totalContainer]}>
          <Text style={styles.totalText}>Total</Text>
          <Text style={styles.totalValue}>${(totalPrice + 5 + 3).toFixed(2)}</Text>
        </View>

        <TouchableOpacity style={styles.confirmButton} onPress={() => navigation.navigate('ConfirmOrder')}>
          <Ionicons name="cart-outline" size={24} color="#FFF" style={{ marginRight: 10 }} />
          <Text style={styles.confirmButtonText}>Proceed to Checkout</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  container: {
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
  cartItem: {
    flexDirection: 'row',
    padding: spacing.medium,
    marginBottom: spacing.small,
  },
  cartItemImage: {
    width: 80,
    height: 80,
    borderRadius: 10,
    marginRight: spacing.medium,
  },
  cartItemDetails: {
    flex: 1,
  },
  cartItemName: {
    ...typography.subHeader,
    fontSize: 18,
    fontWeight: 'bold',
  },
  cartItemDescription: {
    color: '#888',
    fontSize: 14,
    marginBottom: spacing.small,
  },
  cartItemPriceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cartItemPrice: {
    color: colors.black,
    fontSize: 16,
    fontWeight: 'bold',
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  quantityButton: {
    marginHorizontal: spacing.small,
  },
  cartItemQuantity: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  instructionsInput: {
    fontSize: 16,
    color: '#000',
    paddingHorizontal: spacing.medium,
    paddingVertical: spacing.small,
    borderRadius: 10,
    backgroundColor: '#f0f0f0',
    marginBottom: spacing.large,
    minHeight: 80,  // Allows for multiline input
    borderWidth: 1,
    borderColor: 'grey',
    backgroundColor: '#FFFFFF'
  },
  sectionTitle: {
    ...typography.header,
    fontSize: 20,
    marginBottom: spacing.medium,
  },
  couponContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: spacing.large,
  },
  couponInput: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: spacing.medium,
    paddingVertical: spacing.small,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    backgroundColor: '#f0f0f0',
    marginRight: spacing.medium,
  },
  couponInputText: {
    fontSize: 16,
    color: '#000',
  },
  applyButton: {
    backgroundColor: colors.primary,
    paddingHorizontal: spacing.medium,
    paddingVertical: spacing.small,
    borderRadius: 10,
  },
  applyButtonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  dropdown: {
    position: 'absolute',
    top: 45,
    left: 0,
    right: 0,
    backgroundColor: '#fff',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 10,
    zIndex: 1000,
    elevation: 5,
  },
  dropdownItem: {
    padding: spacing.medium,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  dropdownItemText: {
    fontSize: 16,
    color: '#000',
  },
  noCouponsText: {
    fontSize: 16,
    color: '#888',
    textAlign: 'center',
    marginBottom: spacing.large,
  },
  summaryContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: spacing.small,
  },
  summaryText: {
    fontSize: 16,
    color: '#888',
  },
  summaryValue: {
    fontSize: 16,
    color: colors.black,
  },
  totalContainer: {
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    paddingTop: spacing.small,
  },
  totalText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  totalValue: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  confirmButton: {
    flexDirection: 'row',
    backgroundColor: colors.primary,
    padding: spacing.medium,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: spacing.large,
  },
  confirmButtonText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default CartScreen;
