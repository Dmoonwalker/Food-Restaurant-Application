import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import CartScreen from '../screens/CartScreen';
import PaymentScreen from '../screens/PaymentScreen';
import AddAddressScreen from '../screens/AddAddressScreen';
import ChooseAddressScreen from '../screens/ChooseAddressScreen';
import PaymentMethodScreen from '../screens/PaymentMethodScreen';
import SelectCardScreen from '../screens/SelectCardScreen';
import OrderSuccessScreen from '../screens/OrderSuccessScreen';
import ConfirmOrderScreen from '../screens/ConfirmOrderScreen';
import CheckoutScreen from '../screens/CheckoutScreen';
const Stack = createStackNavigator();

const CartStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Cart" component={CartScreen} />
      <Stack.Screen name="Payment" component={PaymentScreen} />
      <Stack.Screen name="AddAddress" component={AddAddressScreen} />
      <Stack.Screen name="Checkout" component={CheckoutScreen} />
      <Stack.Screen name="ChooseAddress" component={ChooseAddressScreen} />
      <Stack.Screen name="PaymentMethod" component={PaymentMethodScreen} />
      <Stack.Screen name="SelectCard" component={SelectCardScreen} />
      <Stack.Screen name="OrderSuccess" component={OrderSuccessScreen} />

      <Stack.Screen name="ConfirmOrder" component={ConfirmOrderScreen} />
    </Stack.Navigator>
  );
};

export default CartStack;
