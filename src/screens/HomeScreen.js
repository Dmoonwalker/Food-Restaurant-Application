import React, { useState } from 'react';
import { View, StyleSheet, ScrollView, SafeAreaView, Dimensions, Modal, TextInput, TouchableOpacity } from 'react-native';
import HomeCard from '../components/HomeCard';
import HomeHeader from '../components/HomeHeader';
import HomeCategories from '../components/HomeCategories';
import SectionHeader from '../components/SectionHeader';
import SpecialItems from '../components/SpecialItems';
import PromotionSection from '../components/PromotionSection';
import { colors ,spacing,typography} from '../theme/theme';
import FoodDetailScreen from './FoodDetailScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');
const isSmallScreen = screenWidth < 480; // Define small screen threshold


const HomeScreen = ({ navigation }) => {
  const [activeCard, setActiveCard] = useState(null);
  const [selectedAddress, setSelectedAddress] = useState('Home');
  const [showDropdown, setShowDropdown] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [activeSlide, setActiveSlide] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');

  const addresses = ['Home', 'Office', 'Work'];
  const categories = [
    { name: 'Dessert', image: require('../../assets/dessert.png') },
    { name: 'Pizza', image: require('../../assets/pizza.png') },
    { name: 'Grills', image: require('../../assets/suya.jpg') },
    { name: 'Beef Burger', image: require('../../assets/beef_burger.jpg') },
  ];

  const trendingItems = [
    {
      name: 'Cheeseburger',
      image: require('../../assets/beef_burger.png'),
      title: 'Cheese Burger',
      price: '4.99',
      rating: '4.9',
      isFavorite: false,
    },
    {
      name: 'Pizza Balognese',
      image: require('../../assets/pizza.png'),
      title: 'Piszzaa',
      price: '4.99',
      rating: '4.9',
      isFavorite: false,
    }, {
      name: 'Pizza Bzalognese',
      image: require('../../assets/pizza.png'),
      title: 'Piszzaaa',
      price: '4.99',
      rating: '4.9',
      isFavorite: false,
    }, {
      name: 'Pizsza Balognese',
      image: require('../../assets/pizza.png'),
      title: 'Piszza',
      price: '4.99',
      rating: '4.9',
      isFavorite: false,
    },
    // ... other items
  ];

  const todaysSpecialItems = [
    {
      name: 'Special Buzrger',
      image: require('../../assets/beef_burger.png'),
      title: 'Special Burger',
      price: '5.99',
      rating: '5.0',
      description: 'A delicious special burger with all the fixings.',
      isFavorite: true,
    },
    {
      name: 'Special Cheese sandwich',
      image: require('../../assets/cheese_sandwich.jpg'),
      title: 'Special Cheese sandwich',
      price: '5.99',
      rating: '5.0',
      description: 'Cheesy crispy sandwich',
      isFavorite: true,
    },
    // ... other items
  ];

  const promotions = [
    {
      heading: 'Exclusive Offer',
      promoPercentage: 'Today’s Best Deal!',
      promoSubtitle: 'Only for You',
      promoDescription: 'Homemade Fries',
      imageSource: require('../../assets/promotion_image.png'),
      backgroundColor: '#FF7043',
    },
    {
      heading: 'Special Discount',
      promoPercentage: 'Save 30%',
      promoSubtitle: 'Limited Time Offer',
      promoDescription: 'Delicious Pizza',
      imageSource: require('../../assets/promotion_image.png'),
      backgroundColor: '#FFA726',
    },
    {
      heading: 'Limited Time Offer',
      promoPercentage: 'Buy 1 Get 1 Free',
      promoSubtitle: 'Hurry Up!',
      promoDescription: 'Tasty Burger',
      imageSource: require('../../assets/promotion_image.png'),
      backgroundColor: '#FFB74D',
    },
  ];

  const handleCardPress = (item) => {
    setActiveCard(item);
    setIsModalVisible(true);
  };

  const handleCloseModal = () => {
    setIsModalVisible(false);
    setActiveCard(null);
  };

  const handleSearch = () => {
    navigation.navigate('HomeStack', { screen: 'SearchResults', params: { query: searchQuery } });
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        <ScrollView style={styles.container}>
          <HomeHeader
            selectedAddress={selectedAddress}
            handleAddressSelect={setSelectedAddress}
            showDropdown={showDropdown}
            setShowDropdown={setShowDropdown}
            addresses={addresses}
          />
          <View style={styles.searchContainer}>
            <TextInput
              style={styles.searchInput}
              placeholder="Search dishes, restaurants"
              placeholderTextColor="#A9A9A9"
              value={searchQuery}
              onChangeText={setSearchQuery}
            />
            <TouchableOpacity style={styles.searchButton} onPress={handleSearch}>
              <Ionicons name="search" size={24} color="#ffffff" />
            </TouchableOpacity>
          </View>
          <PromotionSection
            promotions={promotions}
            activeSlide={activeSlide}
            onSnapToItem={setActiveSlide}
            width={screenWidth * 0.8} // 80% of screen width
            height={screenHeight * 0.2} // 20% of screen height
          />
        
          <HomeCategories categories={categories} navigation={navigation} />
          <View style={styles.lowerPart}>
    
            <HomeCard
              header={'Trending'}
              data={trendingItems}
              onCardPress={handleCardPress}
              activeCard={activeCard}
            />
            <SpecialItems data={todaysSpecialItems} />
          </View>
        </ScrollView>
        
        <Modal
          visible={isModalVisible}
          animationType="slide"
          transparent={true}
          onRequestClose={handleCloseModal}
        >
          <View style={styles.modalContent}>
            {activeCard && (
              <FoodDetailScreen
                item={activeCard}
                closeModal={handleCloseModal}
                navigation={ navigation}
              />
            )}
          </View>
        </Modal>
      </View>
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
    paddingHorizontal: spacing.medium,
  
    backgroundColor: colors.background, // Ensuring background is consistent
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: isSmallScreen ? screenWidth * 0.7 : screenWidth * 0.6,
    height: isSmallScreen ? 40 : 60,
    marginHorizontal: isSmallScreen ? screenWidth * 0.15 : screenWidth * 0.2,
    marginVertical: 15,
    backgroundColor: colors.white,
    borderRadius: 25,
    shadowColor: colors.black,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 5,
  },
  searchInput: {
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 15,
    fontSize: 16,
    color: colors.darkGray,
    fontFamily: typography.body.fontFamily,
  },
  searchButton: {
    backgroundColor: colors.primary,
    borderTopRightRadius: 25,
    borderBottomRightRadius: 25,
    padding: 10,
    height: '100%', // This will make the button's height equal to the search container's height
    width: isSmallScreen ? 40 : 60, // Adjust the width based on the screen size
    justifyContent: 'center',
    alignItems: 'center',
  },
  lowerPart: {
    flex: 1.2,
    paddingBottom: 80,
  },
  modalContent: {
    flex: 1,
    backgroundColor: colors.white,
    marginTop: 10,
    marginLeft: 5,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    shadowColor: colors.black,
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 10,
  },
});

export default HomeScreen;
