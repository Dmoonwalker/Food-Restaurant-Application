import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView, Image, ScrollView } from 'react-native';
import { colors, typography, spacing } from '../theme/theme';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Header from '../components/Header';
const favorites = [
  {
    id: 1,
    name: 'Fried Chicken',
    description: 'Golden brown fried chicken',
    price: 20.00,
    rating: 4.5,
    image: require('../../assets/fried_chicken.png'),
  },
  {
    id: 2,
    name: 'Cheese Sandwich',
    description: 'Grilled Cheese Sandwich',
    price: 18.00,
    rating: 4.0,
    image: require('../../assets/cheese_sandwich.jpg'),
  },
  {
    id: 3,
    name: 'Egg Pasta',
    description: 'Spicy Chicken Pasta',
    price: 15.00,
    rating: 5.0,
    image: require('../../assets/egg_pasta.jpg'),
  },
];

const FavoritesScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
   
<Header navigation={navigation} title="Favorites" />
        {favorites.map((item) => (
          <View key={item.id} style={styles.orderContainer}>
            <View style={styles.orderContent}>
              <Image source={item.image} style={styles.orderImage} />
              <View style={styles.orderDetails}>
                <View style={styles.orderTitleContainer}>
                  <Text style={styles.orderName}>{item.name}</Text>
                  <View style={styles.ratingContainer}>
                    <Ionicons name="star" size={20} color="#FFD700" />
                    <Text style={styles.ratingText}>{item.rating}</Text>
                  </View>
                </View>
                <Text style={styles.orderDescription}>{item.description}</Text>
                <View style={styles.orderInfoContainer}>
                  <Text style={styles.orderPrice}>
                    <Text style={styles.dollarSign}>$</Text>
                    {item.price.toFixed(2)}
                  </Text>
                </View>
                <TouchableOpacity style={styles.orderButton} onPress={() => console.log(`Ordered ${item.name}`)}>
                  <Text style={styles.orderButtonText}>Order Now</Text>
                </TouchableOpacity>
              </View>
            </View>
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
  orderContainer: {
    marginBottom: spacing.medium,
  
  },
  orderContent: {
    flexDirection: 'row',
    marginTop: spacing.medium,
    backgroundColor: '#FFF',
    borderRadius: 10,
    padding: spacing.large,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  orderImage: {
    width: 80,
    height: 80,
    borderRadius: 10,
    marginRight: spacing.medium,
  },
  orderDetails: {
    flex: 1,
  },
  orderTitleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: spacing.small,
  },
  orderName: {
    ...typography.header,
    fontSize: 16,
    fontWeight: 'bold',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ratingText: {
    marginLeft: spacing.small,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFD700',
  },
  orderDescription: {
    color: '#888888',
    fontSize: 14,
    marginBottom: spacing.small,
  },
  orderInfoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: spacing.small,
  },
  orderPrice: {
    color: colors.black,
    fontSize: 18,
    fontWeight: 'bold',
  },
  dollarSign: {
    fontSize: 18,
    color: 'red',
  },
  orderButton: {
    backgroundColor: colors.primary,
    paddingVertical: spacing.small,
    paddingHorizontal: spacing.medium,
    borderRadius: 5,
    marginTop: spacing.small,
    alignSelf: 'flex-end',
  },
  orderButtonText: {
    color: '#FFF',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default FavoritesScreen;
