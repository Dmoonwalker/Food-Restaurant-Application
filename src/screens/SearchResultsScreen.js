import React, { useState, useCallback } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { colors } from '../theme/theme'; // Update with your actual path
import FilterModal from '../components/FilterModal'; // Update with the actual path to FilterModal
import NoItemsFound from '../components/NoItemsFound'; // Update with the actual path to NoItemsFound
import ItemsFound from '../components/ItemsFound'; // Update with the actual path to ItemsFound
import Header from '../components/Header';

const dummyItems = [
  {
    name: 'Cheeseburger',
    image: require('../../assets/beef_burger.png'),
    title: 'Cheese Burger',
    price: '4.99',
    rating: '4.9',
    isFavorite: false,
  },
  {
    name: 'Pizza Baslognese',
    image: require('../../assets/pizza.png'),
    title: 'Pizzaaa',
    price: '4.99',
    rating: '4.9',
    isFavorite: false,
  },
  {
    name: 'Pizza Balognesse',
    image: require('../../assets/pizza.png'),
    title: 'Pizzaaa',
    price: '4.99',
    rating: '4.9',
    isFavorite: false,
  },
  {
    name: 'Pizza Bsalognese',
    image: require('../../assets/pizza.png'),
    title: 'Pizza',
    price: '4.99',
    rating: '4.9',
    isFavorite: false,
  },
  // ... add more items to reach 10 or more
];

const SearchResultScreen = ({ route }) => {
  const navigation = useNavigation();
  const [data, setData] = useState(dummyItems); // Set dummy data
  const [isFilterModalVisible, setIsFilterModalVisible] = useState(false);
  const [minPrice, setMinPrice] = useState(20);
  const [maxPrice, setMaxPrice] = useState(115);

  const handleFavoritePress = useCallback((index) => {
    const newData = [...data];
    newData[index].isFavorite = !newData[index].isFavorite;
    setData(newData);
  }, [data]);

  const handleCardPress = useCallback((item) => {
    navigation.navigate('FoodDetail', { item });
  }, [navigation]);

  const toggleFilterModal = () => {
    setIsFilterModalVisible(!isFilterModalVisible);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.header}>
        <Header navigation={navigation} title="Search" />
        
        <View style={styles.filterContainer}>
          <TouchableOpacity onPress={toggleFilterModal} style={styles.filterButton}>
            <Text style={styles.filterButtonText}>Filter</Text>
          </TouchableOpacity>
        </View>
        </View>
        {data.length === 0 ? (
          <NoItemsFound />
        ) : (
          <>
            <Text style={styles.resultsMessage}>10 items found</Text>
            <ItemsFound data={data} onCardPress={handleCardPress} onFavoritePress={handleFavoritePress} />
          </>
        )}
      </View>
      <FilterModal
        isVisible={isFilterModalVisible}
        onClose={toggleFilterModal}
        minPrice={minPrice}
        setMinPrice={setMinPrice}
        maxPrice={maxPrice}
        setMaxPrice={setMaxPrice}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.background,
  },
  container: {
    flex: 1,
 
  },
  header: {
    padding: 20,
  },
  filterContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginBottom: 10,
    
  },
  filterButton: {
    backgroundColor: colors.primary,
    borderRadius: 20,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  filterButtonText: {
    color: colors.white,
    fontSize: 16,
  },
  resultsMessage: {
    color: 'black',
    fontSize: 18,
    textAlign: 'center',
    marginVertical: 10,
  },
});

export default SearchResultScreen;
