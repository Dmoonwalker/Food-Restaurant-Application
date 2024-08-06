import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeStack from './HomeStack';
import CartStack from './CartStack';
import SearchStack from './SearchStack';
import ProfileStack from './ProfileStack';
import OrdersStack from './OrdersStack'; // Import OrdersStack
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { colors } from '../theme/theme';
import CustomTabBarBackground from '../components/CustomTabBarBackground';
import { View, StyleSheet, Text } from 'react-native';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          let label;

          if (route.name === 'HomeStack') {
            iconName = focused ? 'home' : 'home-outline';
            label = 'Home';
          } else if (route.name === 'CartStack') {
            iconName = focused ? 'cart' : 'cart-outline';
            label = 'Cart';
          } else if (route.name === 'SearchStack') {
            iconName = focused ? 'magnify' : 'magnify';
            label = 'Search';
          } else if (route.name === 'ProfileStack') {
            iconName = focused ? 'account' : 'account-outline';
            label = 'Account';
          } else if (route.name === 'OrdersStack') {
            iconName = focused ? 'clipboard-list' : 'clipboard-list-outline';
            label = 'Orders';
          }

          const iconColor = focused ? colors.primary : '#333'; // Darker color for unfocused state

          return (
            <View style={styles.tabContainer}>
              <Icon name={iconName} size={24} color={iconColor} />
              <Text style={[styles.tabLabel, { color }]} numberOfLines={1}>{label}</Text>
            </View>
          );
        },
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: 'gray',
        tabBarShowLabel: false,
        tabBarStyle: {
          height: 80, // Increase height if needed
          borderTopLeftRadius: 40,
          borderTopRightRadius: 40,
          position: 'absolute',
          shadowColor: '#FF0000',
          shadowOffset: { width: -20, height: -10 },
          shadowOpacity: 0.9,
          shadowRadius: 15,
          elevation: 30,
          backgroundColor: 'white',
        },
        headerShown: false,
      })}
      tabBarBackground={() => <CustomTabBarBackground />} // Use the custom background
    >
      <Tab.Screen name="HomeStack" component={HomeStack} />
      <Tab.Screen name="SearchStack" component={SearchStack} />
      <Tab.Screen name="CartStack" component={CartStack} />
      <Tab.Screen name="OrdersStack" component={OrdersStack} />
      <Tab.Screen name="ProfileStack" component={ProfileStack} />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column', // Stack icon and text vertically
    width: 60, // Adjust width to fit content
  },
  tabLabel: {
    fontSize: 10, // Smaller font size
    lineHeight: 12, // Adjust line height to fit one row
    marginTop: 4,
    textAlign: 'center',
    overflow: 'hidden', // Ensure text does not overflow
    textOverflow: 'ellipsis', // Handle text overflow
  },
  activeTab: {
    backgroundColor: colors.primary,
    borderRadius: 30,
    padding: 10,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.7,
    shadowRadius: 10,
    elevation: 20,
  },
});

export default BottomTabNavigator;
