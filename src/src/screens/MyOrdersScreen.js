import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView, Image, ScrollView } from 'react-native';
import { colors, typography, spacing } from '../theme/theme';
import Ionicons from 'react-native-vector-icons/Ionicons';

const orders = [
  {
    id: 1,
    name: 'Pizza Hut',
    description: '29 JAN, 12:30',
    price: 35.25,
    quantity: 3,
    status: 'Completed',
    image: require('../../assets/fried_chicken.png'),
    orderNumber: '#162432',
    type: 'Food',
  },
  {
    id: 2,
    name: 'McDonald',
    description: '30 JAN, 12:30',
    price: 40.15,
    quantity: 2,
    status: 'Completed',
    image: require('../../assets/cheese_sandwich.jpg'),
    orderNumber: '#242432',
    type: 'Drink',
  },
  {
    id: 3,
    name: 'Spicy Chicken Pasta',
    description: '31 JAN, 12:30',
    price: 15.00,
    quantity: 1,
    status: 'Cancelled',
    image: require('../../assets/egg_pasta.jpg'),
    orderNumber: '#353453',
    type: 'Food',
  },
  {
    id: 4,
    name: 'Juicy grilled beef burger',
    description: '1 FEB, 12:30',
    price: 25.00,
    quantity: 1,
    status: 'Current',
    image: require('../../assets/beef_burger.jpg'),
    orderNumber: '#464564',
    type: 'Food',
  },
  {
    id: 5,
    name: 'Delicious veggie pizza',
    description: '2 FEB, 12:30',
    price: 22.00,
    quantity: 2,
    status: 'Completed',
    image: require('../../assets/veggie_pizza.jpg'),
    orderNumber: '#575675',
    type: 'Drink',
  },
];

const MyOrdersScreen = ({ navigation }) => {
  const [selectedCategory, setSelectedCategory] = useState('Ongoing');

  const handleCancelOrder = (orderId) => {
    console.log(`Order ${orderId} cancelled`);
  };

  const handleReorder = (orderId) => {
    console.log(`Order ${orderId} re-ordered`);
  };

  const handleTrackOrder = (orderId) => {
    console.log(`Track order ${orderId}`);
    navigation.navigate('TrackOrder');
  };

  const getStatusColor = (status) => {
    if (status === 'Completed') return styles.completed;
    if (status === 'Cancelled') return styles.cancelled;
    return styles.current;
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.header}>
          <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
            <Ionicons name="arrow-back" size={24} color="#000" style={styles.backIcon} />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>My Orders</Text>
        </View>
        <View style={styles.tabContainer}>
          <TouchableOpacity
            style={styles.tabButton}
            onPress={() => setSelectedCategory('Ongoing')}
          >
            <Text style={[styles.tabButtonText, selectedCategory === 'Ongoing' && styles.selectedTabButtonText]}>
              Ongoing
            </Text>
            {selectedCategory === 'Ongoing' && <View style={styles.tabIndicator} />}
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.tabButton}
            onPress={() => setSelectedCategory('History')}
          >
            <Text style={[styles.tabButtonText, selectedCategory === 'History' && styles.selectedTabButtonText]}>
              History
            </Text>
            {selectedCategory === 'History' && <View style={styles.tabIndicator} />}
          </TouchableOpacity>
        </View>
        {orders
          .filter((order) => (selectedCategory === 'Ongoing' ? order.status === 'Current' : order.status !== 'Current'))
          .map((item, index) => (
            <View key={item.id}>
              <View style={styles.orderContainer}>
                <View style={styles.orderHeader}>
                  <Text style={styles.orderType}>{item.type}</Text>
                  <Text style={[styles.orderStatus, getStatusColor(item.status)]}>
                    {item.status}
                  </Text>
                </View>
                <View style={styles.divider} />
                <View style={styles.orderContent}>
                  <Image source={item.image} style={styles.orderImage} />
                  <View style={styles.orderDetails}>
                    <View style={styles.orderTitleContainer}>
                      <Text style={styles.orderName}>{item.name}</Text>
                      <Text style={styles.orderNumber}>{item.orderNumber}</Text>
                    </View>
                   
                    <View style={styles.orderInfoContainer}>
                      <Text style={styles.orderPrice}>${item.price.toFixed(2)}</Text>
                      <Text style={styles.orderQuantity}>
                      <Text style={styles.orderDescription}>
                      {item.description}
                  </Text>
                      </Text>
                    </View>
                  </View>
                </View>
                <View style={styles.actionButtonContainer}>
                  {item.status === 'Current' && (
                    <>
                      <TouchableOpacity
                        style={[styles.actionButton, styles.outlineActionButton]}
                        onPress={() => handleCancelOrder(item.id)}
                      >
                        <Text style={styles.outlineActionButtonText}>Cancel Order</Text>
                      </TouchableOpacity>
                      <TouchableOpacity
                        style={[styles.actionButton, styles.filledActionButton]}
                        onPress={() => handleTrackOrder(item.id)}
                      >
                        <Text style={styles.filledActionButtonText}>Track Order</Text>
                      </TouchableOpacity>
                    </>
                  )}
                  {item.status === 'Completed' && (
                    <>
                      <TouchableOpacity
                        style={[styles.actionButton, styles.outlineActionButton]}
                        onPress={() => handleReorder(item.id)}
                      >
                        <Text style={styles.outlineActionButtonText}>Rate</Text>
                      </TouchableOpacity>
                      <TouchableOpacity
                        style={[styles.actionButton, styles.filledActionButton]}
                        onPress={() => handleReorder(item.id)}
                      >
                        <Text style={styles.filledActionButtonText}>Re-order</Text>
                      </TouchableOpacity>
                    </>
                  )}
                </View>
              </View>
              {index !== orders.length - 1 && <View style={styles.divider} />}
            </View>
          ))}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  scrollContainer: {
    padding: spacing.large,
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
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: spacing.large,
  },
  tabButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: spacing.small,
  },
  tabButtonText: {
    color: '#000',
    fontSize: 16,
    fontWeight: 'bold',
  },
  selectedTabButtonText: {
    color: colors.primary,
  },
  tabIndicator: {
    height: 3,
    backgroundColor: colors.primary,
    width: '100%',
    marginTop: spacing.small,
  },
  orderContainer: {
    marginBottom: spacing.large,
  },
  orderHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  orderType: {
    ...typography.subHeader,
    fontSize: 16,
  },
  orderStatus: {
    ...typography.subHeader,
    fontSize: 16,
  },
  completed: {
    color: 'green',
  },
  cancelled: {
    color: 'red',
  },
  current: {
    color: colors.primary,
  },
  orderContent: {
    flexDirection: 'row',
    marginTop: spacing.medium,
  },
  orderImage: {
    width: 80,
    height: 80,
    borderRadius: 10,
    marginRight: spacing.medium,
  },
  orderDetails: {
    flex: 1,
    justifyContent: 'space-between',
  },
  orderTitleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  orderName: {
    ...typography.header,
    fontSize: 14,
    fontWeight: 'bold',
  },
  orderNumber: {
    color: '#888888',
    fontSize: 12,
    textDecorationLine: 'underline',
  },
  orderDescription: {
    color: '#888888',
    fontSize: 12,
    marginBottom: spacing.small,
  },
  orderInfoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: spacing.medium,
  },
  orderPrice: {
    color: colors.black,
    fontSize: 14,
    fontWeight: 'bold',
  },
  orderQuantity: {
    color: '#888888',
    fontSize: 12,
  },
  actionButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: spacing.medium,
  },
  actionButton: {
    paddingVertical: spacing.small * 1.5,
    paddingHorizontal: spacing.medium,
    borderRadius: 5,
  },
  outlineActionButton: {
    borderColor: colors.primary,
    borderWidth: 1,
    backgroundColor: '#FFF',
    flex: 1,
    marginHorizontal: spacing.small,
  },
  outlineActionButtonText: {
    color: colors.primary,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  filledActionButton: {
    backgroundColor: colors.primary,
    flex: 1,
    marginHorizontal: spacing.small,
  },
  filledActionButtonText: {
    color: '#FFF',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  divider: {
    height: 1,
    backgroundColor: '#EEE',
    marginVertical: spacing.medium,
  },
});

export default MyOrdersScreen;
