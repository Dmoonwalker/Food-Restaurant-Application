import React, { useState, useCallback, useEffect } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, FlatList, SafeAreaView, TextInput } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { colors } from '../theme/theme'; // Update with your actual path
import Icon from 'react-native-vector-icons/MaterialIcons'; // Make sure to install this package

const dummyItems = [
  {
    name: 'Pizza Margherita',
    image: require('../../assets/beef_burger.png'), // Replace with your image path
    title: 'Pizza Margherita',
    price: '12.99',
    rating: '4.5',
    isFavorite: false,
  },
  // Add more items here or leave as is
];

const SearchResultScreen = ({ route }) => {
  const navigation = useNavigation();
  const [data, setData] = useState(dummyItems); // Use dummy data here
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    navigation.getParent()?.setOptions({
      tabBarStyle: {
        display: 'none',
      },
    });
    return () => navigation.getParent()?.setOptions({
      tabBarStyle: undefined,
    });
  }, [navigation]);

  const handleFavoritePress = useCallback((index) => {
    const newData = [...data];
    newData[index].isFavorite = !newData[index].isFavorite;
    setData(newData);
  }, [data]);

  const handleCardPress = useCallback((item) => {
    navigation.navigate('FoodDetail', { item });
  }, [navigation]);

  const handleSearchPress = useCallback(() => {
    // Implement search action here
    console.log('Search button pressed');
  }, []);

  const handleFilterPress = useCallback(() => {
    // Implement filter action here
    console.log('Filter button pressed');
  }, []);

  const renderItem = ({ item, index }) => (
    <View style={styles.cardWrapper}>
      <TouchableOpacity onPress={() => handleCardPress(item)} style={styles.card}>
        <View style={styles.imageContainer}>
          <Image source={item.image} style={styles.cardImage} />
          <View style={styles.iconContainer}>
            <TouchableOpacity onPress={() => handleFavoritePress(index)} style={styles.favoriteContainer}>
              <Ionicons
                name={item.isFavorite ? 'heart' : 'heart-outline'}
                size={24}
                color={item.isFavorite ? 'red' : 'black'}
                style={styles.favoriteIcon}
              />
            </TouchableOpacity>
            <View style={styles.ratingContainer}>
              <Text style={styles.ratingText}>{item.rating}</Text>
              <Ionicons name="star" size={20} color="#FFD700" />
            </View>
          </View>
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.cardTitle}>{item.title}</Text>
          <View style={styles.priceRow}>
            <Text style={styles.cardPrice}>${item.price}</Text>
            <View style={styles.discountContainer}>
              <Text style={styles.discount}>20% OFF</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
            <Ionicons name="arrow-back" size={24} color="#000000" style={styles.backIcon} />
          </TouchableOpacity>
          <Text style={styles.header}>Search</Text>
          <TouchableOpacity style={styles.notificationButton}>
            <Ionicons name="notifications-outline" size={24} color="black" />
            <View style={styles.notificationBadge}>
              <Text style={styles.notificationCount}>2</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.searchSection}>
          <TextInput
            style={styles.searchInput}
            placeholder="Pizza"
            placeholderTextColor={colors.placeholder}
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
          <TouchableOpacity onPress={handleSearchPress} style={styles.searchButton}>
            <Ionicons name="close" size={24} color="#FFFFFF" />
          </TouchableOpacity>
        </View>
        {data.length === 0 ? (
          <View style={styles.noItemsContainer}>
            <Text style={styles.subHeader}>Recent Keywords</Text>
            <View style={styles.keywordsContainer}>
              {['Burger', 'Sandwich', 'Pizza', 'Sandwich'].map((keyword, index) => (
                <TouchableOpacity key={index} style={styles.keyword}>
                  <Text style={styles.keywordText}>{keyword}</Text>
                </TouchableOpacity>
              ))}
            </View>
            <Text style={styles.subHeader}>Suggested Restaurants</Text>
            <View style={styles.suggestedContainer}>
              {[
                { name: 'Pansi Restaurant', rating: '4.7', image: require('../../assets/cheese_sandwich.jpg') },
                { name: 'American Spicy Burger Shop', rating: '4.3', image: require('../../assets/beef_burger.png') },
                { name: 'Cafenio Coffee Club', rating: '4.0', image: require('../../assets/pizza.png') },
              ].map((restaurant, index) => (
                <View key={index} style={styles.restaurantContainer}>
                  <Image source={restaurant.image} style={styles.restaurantImage} />
                  <View style={styles.restaurantInfo}>
                    <Text style={styles.restaurantName}>{restaurant.name}</Text>
                    <View style={styles.restaurantRating}>
                      <Text style={styles.restaurantRatingText}>{restaurant.rating}</Text>
                      <Ionicons name="star" size={16} color="#FFD700" />
                    </View>
                  </View>
                </View>
              ))}
            </View>
          </View>
        ) : (
          <FlatList
            data={data}
            renderItem={renderItem}
            keyExtractor={(item) => item.name}
            numColumns={2}
            columnWrapperStyle={styles.row}
            showsVerticalScrollIndicator={false}
          />
        )}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.backgroundColor,
  },
  container: {
    flex: 1,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginVertical: 20,
  },
  backButton: {
    width: 40,
    height: 40,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 3,
    marginRight: 10,
  },
  backIcon: {},
  header: {
    fontSize: 24,
    color: colors.black,
    textAlign: 'center',
    flex: 1,
  },
  notificationButton: {
    position: 'relative',
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  notificationBadge: {
    position: 'absolute',
    top: -5,
    right: -5,
    backgroundColor: 'red',
    borderRadius: 10,
    width: 20,
    height: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  notificationCount: {
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold',
  },
  searchSection: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginVertical: 10,
  },
  searchInput: {
    flex: 1,
    height: 50,
    backgroundColor: colors.white,
    borderRadius: 25,
    paddingHorizontal: 15,
    color: colors.text,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 2,
  },
  searchButton: {
    height: 50,
    width: 50,
    backgroundColor: colors.primary,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
  },
  noItemsContainer: {
    flex: 1,
    paddingHorizontal: 20,
  },
  subHeader: {
    fontSize: 18,
    color: colors.black,
    marginVertical: 10,
  },
  keywordsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 20,
  },
  keyword: {
    backgroundColor: colors.white,
    borderRadius: 20,
    paddingVertical: 8,
    paddingHorizontal: 15,
    marginRight: 10,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 2,
  },
  keywordText: {
    fontSize: 14,
    color: colors.black,
  },
  suggestedContainer: {
    marginBottom: 20,
  },
  restaurantContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  restaurantImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 10,
  },
  restaurantInfo: {
    flex: 1,
  },
  restaurantName: {
    fontSize: 16,
    color: colors.black,
  },
  restaurantRating: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  restaurantRatingText: {
    fontSize: 14,
    color: colors.primary,
    marginRight: 5,
  },
  row: {
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  cardWrapper: {
    width: '48%',
    marginBottom: 10,
  },
  card: {
    borderRadius: 10,
    padding: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  imageContainer: {
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 30,
    paddingBottom: 10,
    position: 'relative',
  },
  cardImage: {
    width: 120,
    height: 120,
    resizeMode: 'cover',
    borderRadius: 60,
  },
  iconContainer: {
    position: 'absolute',
    top: 10,
    left: 10,
    right: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  favoriteContainer: {
    backgroundColor: 'white',
    borderRadius: 15,
    padding: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  favoriteIcon: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 10,
    paddingHorizontal: 4,
    paddingVertical: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  ratingText: {
    fontSize: 13,
    marginRight: 3,
    color: colors.primary,
  },
  infoContainer: {
    backgroundColor: 'white',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    padding: 10,
  },
  cardTitle: {
    fontSize: 16,
    color: colors.black,
  },
  priceRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cardPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.primary,
  },
  discountContainer: {
    backgroundColor: '#D3F9D8',
    borderRadius: 15,
    paddingVertical: 2,
    paddingHorizontal: 8,
  },
  discount: {
    color: '#2F6F2A',
    fontSize: 12,
  },
});

export default SearchResultScreen;
