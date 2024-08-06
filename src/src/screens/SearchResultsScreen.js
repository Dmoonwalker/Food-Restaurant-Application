import React, { useState, useCallback } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView, TextInput } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { colors } from '../theme/theme'; // Update with your actual path
import FilterModal from '../components/FilterModal'; // Update with the actual path to FilterModal
import NoItemsFound from '../components/NoItemsFound'; // Update with the actual path to NoItemsFound
import ItemsFound from '../components/ItemsFound'; // Update with the actual path to ItemsFound
import Header from '../components/Header';
const dummyItems = [
  // Add your dummy items here
];

const SearchResultScreen = ({ route }) => {
  const navigation = useNavigation();
  const [data, setData] = useState([]); // Initially no items found
  const [searchQuery, setSearchQuery] = useState('');
  const [message, setMessage] = useState('No items found'); // Initially no items found message
  const [isFilterModalVisible, setIsFilterModalVisible] = useState(false);
  const [minPrice, setMinPrice] = useState(20);
  const [maxPrice, setMaxPrice] = useState(115);
  const [searchPerformed, setSearchPerformed] = useState(false); // Track if search was performed

  const handleFavoritePress = useCallback((index) => {
    const newData = [...data];
    newData[index].isFavorite = !newData[index].isFavorite;
    setData(newData);
  }, [data]);

  const handleCardPress = useCallback((item) => {
    navigation.navigate('FoodDetail', { item });
  }, [navigation]);

  const handleSearchPress = useCallback(() => {
    setSearchPerformed(true); // Mark that a search has been performed
    const filteredData = dummyItems.filter(item => item.title.toLowerCase().includes(searchQuery.toLowerCase()));
    setData(filteredData);
    if (filteredData.length === 0) {
      setMessage('No items found');
    } else {
      setMessage(`Search Results (${filteredData.length} items)`);
    }
  }, [searchQuery]);

  const toggleFilterModal = () => {
    setIsFilterModalVisible(!isFilterModalVisible);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
      <Header navigation={navigation} title="Search" />
      
     
        <View style={styles.searchSection}>
          <Ionicons name="search-outline" size={20} color={colors.gray} />
          <TextInput
            style={styles.searchInput}
            placeholder="Search"
            placeholderTextColor={colors.placeholder}
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
          <TouchableOpacity onPress={() => setSearchQuery('')} style={styles.clearButton}>
            <Ionicons name="close-circle-outline" size={20} color={colors.gray} />
          </TouchableOpacity>
          <TouchableOpacity onPress={handleSearchPress} style={styles.searchButton}>
            <Text style={styles.searchButtonText}>Search</Text>
          </TouchableOpacity>
        </View>
        {searchPerformed && data.length === 0 ? (
          <>
            <Text style={styles.resultsMessage}>No items found</Text>
            <NoItemsFound />
          </>
        ) : data.length === 0 ? (
          <NoItemsFound />
        ) : (
          <ItemsFound data={data} onCardPress={handleCardPress} onFavoritePress={handleFavoritePress} />
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
    padding: 20,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 20,
  },
  backButton: {
    width: 40,
    height: 40,
    backgroundColor: colors.white,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 3,
  },
  backIcon: {},
  header: {
    fontSize: 24,
    color: colors.black,
    textAlign: 'center',
    flex: 1,
  },
  notificationContainer: {
    position: 'relative',
  },
  notificationBadge: {
    backgroundColor: colors.orange,
    borderRadius: 10,
    width: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: -5,
    right: -5,
  },
  notificationText: {
    color: colors.white,
    fontSize: 12,
    fontWeight: 'bold',
  },
  searchSection: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.lightGray,
    borderRadius: 20,
    paddingHorizontal: 15,
    padding: 10,
    marginVertical: 10,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: colors.gray,
    marginHorizontal: 10,
  },
  clearButton: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchButton: {
    backgroundColor: colors.primary,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginLeft: 10,
  },
  searchButtonText: {
    color: colors.white,
    fontSize: 16,
  },
  resultsMessage: {
    color: 'red',
    fontSize: 18, // Make the text larger
    textAlign: 'right', // Align text to the right
    marginTop: 10, // Space between search section and message
  },
});

export default SearchResultScreen;
