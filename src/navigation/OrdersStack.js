import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import MyOrdersScreen from '../screens/MyOrdersScreen';
import TrackOrderScreen from '../screens/TrackOrderScreen';
const Stack = createStackNavigator();

const OrdersStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="MyOrders" component={MyOrdersScreen} />
      <Stack.Screen name="TrackOrder" component={TrackOrderScreen} />
    </Stack.Navigator>
  );
};

export default OrdersStack
;
