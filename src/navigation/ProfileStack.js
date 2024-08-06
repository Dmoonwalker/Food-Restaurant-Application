import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ProfileScreen from '../screens/ProfileScreen';
import AccountScreen from '../screens/AccountScreen';
import MyFavouritesScreen from '../screens/MyFavouritesScreen';
import MyOrdersScreen from '../screens/MyOrdersScreen';
import MyAddressesScreen from '../screens/MyAddressesScreen';
import AddAddressScreen from '../screens/AddAddressScreen';
import CouponsScreen from '../screens/CouponsScreen';
import AddCouponScreen from '../screens/AddCouponScreen';
import TrackOrderScreen from '../screens/TrackOrderScreen';
const Stack = createStackNavigator();

const ProfileStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="AccountScreen" component={AccountScreen} />
      <Stack.Screen name="Profile" component={ProfileScreen} />
    <Stack.Screen name="MyAddresses" component={MyAddressesScreen}/>
    <Stack.Screen name="AddNewAddress" component={AddAddressScreen}/>
    <Stack.Screen name="MyFavourites" component={MyFavouritesScreen} />
    <Stack.Screen name="MyOrders" component={MyOrdersScreen} />
    <Stack.Screen name="TrackOrder" component={TrackOrderScreen} />
    <Stack.Screen name="Coupons" component={CouponsScreen} />
    <Stack.Screen name="AddCoupon" component={AddCouponScreen} />
    </Stack.Navigator>
  );
};

export default ProfileStack;
