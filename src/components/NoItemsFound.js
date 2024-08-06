import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { colors } from '../theme/theme'; // Update with your actual path

const NoItemsFound = () => {
  const data = [
    { name: 'Pansi Restaurant', rating: '4.7', description: 'A cozy place for delicious meals', image: require('../../assets/cheese_sandwich.jpg') },
    { name: 'American Spicy Burger Shop', rating: '4.3', description: 'Best burgers in town with a spicy twist', image: require('../../assets/beef_burger.png') },
    { name: 'Cafenio Coffee Club', rating: '4.0', description: 'Perfect spot for coffee lovers', image: require('../../assets/pizza.png') },
  ];

  return (
    <ScrollView style={styles.noItemsContainer}>
      <Text style={styles.subHeader}>Recent Keywords</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.keywordsScroll}>
        <View style={styles.keywordsContainer}>
          {['Burger', 'Sandwich', 'Pizza', 'Pasta'].map((keyword, index) => (
            <TouchableOpacity key={index} style={styles.keyword}>
              <Text style={styles.keywordText}>{keyword}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
      <Text style={styles.subHeader}>Suggested Restaurants</Text>
      <View style={styles.suggestedContainer}>
        {data.map((restaurant, index) => (
          <View key={index} style={styles.restaurantCard}>
            <View style={styles.imageContainer}>
              <Image source={restaurant.image} style={styles.restaurantImage} />
              <View style={styles.ratingOverlay}>
                <View style={styles.ratingContainer}>
                  <Ionicons name="star" size={15} color="#FFD700" />
                  <Text style={styles.ratingText}>{restaurant.rating}</Text>
                </View>
              </View>
            </View>
            <View style={styles.detailsContainer}>
              <Text style={styles.restaurantName}>{restaurant.name}</Text>
              <Text style={styles.restaurantDescription}>{restaurant.description}</Text>
            </View>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  noItemsContainer: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: colors.white,
  },
  subHeader: {
    fontSize: 16,
    fontWeight: 'bold',
    marginVertical: 10,
    color: colors.black,
  },
  keywordsScroll: {
    marginVertical: 10,
  },
  keywordsContainer: {
    flexDirection: 'row',
    flexWrap: 'nowrap',
  },
  keyword: {
    backgroundColor: colors.lightGray,
    borderRadius: 20,
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginRight: 10,
  },
  keywordText: {
    fontSize: 20,
    color: colors.black,
  },
  suggestedContainer: {
    marginTop: 0,
  },
  restaurantCard: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    padding: 15,
    marginVertical: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  imageContainer: {
    position: 'relative',
  },
  restaurantImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
    marginRight: 15,
  },
  ratingOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: 50,
    height: 25,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  ratingContainer: {
    backgroundColor: '#FFFFE0',
    borderTopRightRadius: 15,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 15,
    borderWidth: 1,
    borderColor: '#FFD700',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  ratingText: {
    fontSize: 13,
    color: '#000000',
    marginLeft: 3,
  },
  detailsContainer: {
    flex: 1,
    justifyContent: 'space-between',
  },
  restaurantName: {
    fontSize: 18,
    color: colors.black,
  },
  restaurantDescription: {
    fontSize: 16,
    color: 'grey',
    marginVertical: 5,
  },
});

export default NoItemsFound;
