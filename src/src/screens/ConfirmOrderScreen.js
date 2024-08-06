import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView, ScrollView, Image } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { colors, typography, spacing } from '../theme/theme';
import Header from '../components/Header';
import { useActiveOrder } from '../context/ActiveOrderContext';

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

const paymentMethods = [
  { id: 1, label: 'Cash', icon: require('../../assets/cash.png') },
  { id: 2, label: 'Visa', icon: require('../../assets/visa.png') },
  { id: 3, label: 'Mastercard', icon: require('../../assets/mastercard.png') },
  { id: 4, label: 'Paypal', icon: require('../../assets/paypal.png') },
];

const ConfirmOrderScreen = ({ navigation }) => {
  const [selectedMethod, setSelectedMethod] = useState(null);
  const [cartItems, setCartItems] = useState(cartItemsData);
  const [saveCardDetails, setSaveCardDetails] = useState(false);
  const { setActiveOrder } = useActiveOrder();
  const totalPrice = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  const handleIncreaseQuantity = (id) => {
    const newItems = cartItems.map(item => {
      if (item.id === id) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });
    setCartItems(newItems);
  };

  const handleDecreaseQuantity = (id) => {
    const newItems = cartItems.map(item => {
      if (item.id === id && item.quantity > 1) {
        return { ...item, quantity: item.quantity - 1 };
      }
      return item;
    });
    setCartItems(newItems);
  };

  const handlePlaceOrder = () => {
    setActiveOrder({
      id: 1, // Example ID, replace with actual data
      items: cartItems,
      total: totalPrice,
    });
    navigation.navigate('OrderSuccess');
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container}>
        <Header navigation={navigation} title="Checkout" />
        <View style={styles.addressHeader}>
          <Text style={styles.deliveryLabel}>Shipping Address</Text>
          <TouchableOpacity onPress={() => navigation.navigate('ChooseAddress')}>
            <Text style={styles.editLabel}>Change</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.addressContainer}>
          <Text style={styles.addressText}>778 Locust View Drive Oaklanda, CA</Text>
        </View>

        <Text style={styles.sectionTitle}>Order Summary</Text>
        <View style={styles.divider} />
        {cartItems.map((item, index) => (
          <View key={item.id}>
            <View style={styles.cartItem}>
              <Image source={item.image} style={styles.cartItemImage} />
              <View style={styles.cartItemDetails}>
                <Text style={styles.cartItemName}>{item.name}</Text>
                <Text style={styles.cartItemDescription}>{item.description}</Text>
                <View style={styles.cartItemPriceContainer}>
                  <Text style={styles.cartItemPrice}>
                    <Text style={styles.dollarSign}>$</Text>
                    {item.price.toFixed(2)}
                  </Text>
                  <View style={styles.quantityContainer}>
                    <TouchableOpacity style={styles.quantityButton} onPress={() => handleDecreaseQuantity(item.id)}>
                      <Ionicons name="remove-outline" size={20} color={colors.primary} />
                    </TouchableOpacity>
                    <Text style={styles.cartItemQuantity}>{item.quantity}</Text>
                    <TouchableOpacity style={styles.quantityButton} onPress={() => handleIncreaseQuantity(item.id)}>
                      <Ionicons name="add-outline" size={20} color={colors.primary} />
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </View>
            {index < cartItems.length - 1 && <View style={styles.divider} />}
          </View>
        ))}

        <View style={styles.summaryContainer}>
          <Text style={styles.summaryText}>Subtotal</Text>
          <Text style={styles.summaryValue}>${totalPrice.toFixed(2)}</Text>
        </View>
        <View style={styles.summaryContainer}>
          <Text style={styles.summaryText}>Tax and Fees</Text>
          <Text style={styles.summaryValue}>$5.00</Text>
        </View>
        <View style={styles.summaryContainer}>
          <Text style={styles.summaryText}>Delivery</Text>
          <Text style={styles.summaryValue}>$3.00</Text>
        </View>
        <View style={[styles.summaryContainer, styles.totalContainer]}>
          <Text style={styles.totalText}>Total</Text>
          <Text style={styles.totalValue}>${(totalPrice + 5 + 3).toFixed(2)}</Text>
        </View>

        <Text style={styles.sectionTitle}>Payment Method</Text>
        <ScrollView horizontal contentContainerStyle={styles.paymentMethodsContainer} showsHorizontalScrollIndicator={false}>
          {paymentMethods.map((method) => (
            <View key={method.id} style={styles.paymentMethodContainer}>
              <TouchableOpacity 
                style={[
                  styles.paymentMethod, 
                  selectedMethod === method.id && styles.selectedPaymentMethod
                ]}
                onPress={() => setSelectedMethod(method.id)}
              >
                <Image source={method.icon} style={styles.paymentMethodIcon} />
              </TouchableOpacity>
              <Text style={styles.paymentMethodLabel}>{method.label}</Text>
            </View>
          ))}
        </ScrollView>

        <View style={styles.saveCardContainer}>
          <TouchableOpacity onPress={() => setSaveCardDetails(!saveCardDetails)} style={styles.checkboxContainer}>
            <Ionicons 
              name={saveCardDetails ? "checkbox" : "square-outline"} 
              size={24} 
              color={colors.primary} 
            />
            <Text style={styles.checkboxLabel}>Save card details for future payments</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.confirmButton} onPress={handlePlaceOrder}>
          <Text style={styles.confirmButtonText}>Place Order</Text>
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
    padding: spacing.large,
    paddingBottom: 0,
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
  sectionTitle: {
    ...typography.header,
    fontSize: 20,
    marginBottom: spacing.medium,
  },
  addressContainer: {
    backgroundColor: '#ffeecf',
    padding: spacing.medium,
    borderRadius: 10,
    marginBottom: spacing.large,
  },
  addressText: {
    color: colors.black,
    fontSize: 16,
  },
  addressHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: spacing.large,
  },
  deliveryLabel: {
    ...typography.header,
    fontSize: 20,
    marginBottom: spacing.medium,
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
  divider: {
    height: 1,
    backgroundColor: '#ccc',
    marginVertical: spacing.medium,
  },
  cartItem: {
    flexDirection: 'row',
    padding: spacing.medium,
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
    marginBottom: spacing.small,
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
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: spacing.small,
  },
  cartItemQuantity: {
    marginHorizontal: spacing.small,
    fontSize: 16,
  },
  summaryContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: spacing.small,
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
    backgroundColor: colors.primary,
    padding: spacing.medium,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: spacing.small,
  },
  confirmButtonText: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 18,
  },
  paymentMethodsContainer: {
    flexDirection: 'row',
    marginVertical: spacing.large,
  },
  paymentMethodContainer: {
    alignItems: 'center',
    marginRight: spacing.medium,
  },
  paymentMethod: {
    width: 80,
    height: 80,
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: spacing.small,
  },
  selectedPaymentMethod: {
    borderColor: colors.primary,
    borderWidth: 2,
  },
  paymentMethodIcon: {
    width: 40,
    height: 40,
  },
  paymentMethodLabel: {
    fontSize: 14,
    fontWeight: 'bold',
    color: colors.black,
  },
  saveCardContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: spacing.large,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkboxLabel: {
    marginLeft: spacing.small,
    fontSize: 16,
    color: colors.black,
  },
});

export default ConfirmOrderScreen;