import React, { useState } from 'react';
import { View, StyleSheet, ScrollView, SafeAreaView, Dimensions, Modal } from 'react-native';
import HomeCard from '../components/HomeCard';
import HomeHeader from '../components/HomeHeader';
import HomeCategories from '../components/HomeCategories';
import SectionHeader from '../components/SectionHeader';
import SpecialItems from '../components/SpecialItems';
import PromotionSection from '../components/PromotionSection';
import { colors } from '../theme/theme';
import FoodDetailScreen from './FoodDetailScreen';
import { NavigationContainer } from '@react-navigation/native';

const { width: screenWidth } = Dimensions.get('window');

const HomeScreen = ({navigation}) => {
  const [activeCard, setActiveCard] = useState(null);
  const [selectedAddress, setSelectedAddress] = useState('Home');
  const [showDropdown, setShowDropdown] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [activeSlide, setActiveSlide] = useState(0);

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
      name: 'Pizza Balognease',
      image: require('../../assets/pizza.png'),
      title: 'Pizza',
      price: '4.99',
      rating: '4.9',
      isFavorite: false,
    },  {
      name: 'Pizza Baloagnese',
      image: require('../../assets/pizza.png'),
      title: 'Pizza',
      price: '4.99',
      rating: '4.9',
      isFavorite: false,
    },  {
      name: 'Pizza Baalognese',
      image: require('../../assets/pizza.png'),
      title: 'Pizza',
      price: '4.99',
      rating: '4.9',
      isFavorite: false,
    },
    // ... other items
  ];

  const todaysSpecialItems = [
    {
      name: 'Special Burger',
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
      title: 'Special Caheese sanadwich',
      price: '5.99',
      rating: '5.0',
      description: 'Cheesy crispy sandwich',
      isFavorite: true,
    },  {
      name: 'Special Cheese sandywich',
      image: require('../../assets/cheese_sandwich.jpg'),
      title: 'Special Cheese sandwich',
      price: '5.99',
      rating: '5.0',
      description: 'Cheesy crispy sandwich',
      isFavorite: true,
    },  {
      name: 'Special Cheese syandywich',
      image: require('../../assets/cheese_sandwich.jpg'),
      title: 'Special Cheese sanadwich',
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

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <ScrollView style={styles.scrollView}>
          <HomeHeader
            selectedAddress={selectedAddress}
            handleAddressSelect={setSelectedAddress}
            showDropdown={showDropdown}
            setShowDropdown={setShowDropdown}
            addresses={addresses}
          />
          <View style={styles.carouselContainer}>
            <PromotionSection
              promotions={promotions}
              activeSlide={activeSlide}
              onSnapToItem={setActiveSlide}
            />
          </View>
          <View style={styles.categories}>
          <HomeCategories  categories={categories} />
          </View>
          <View style={styles.lowerPart}>
            <SectionHeader title="Trending" />
            <HomeCard
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
                navigation = {navigation}
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
  },
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  categories:{
    width: '100%',
  },
  scrollView: {
    flex: 1,
    paddingBottom: 100, // Increase this value based on your bottom navigation height
  },
  carouselContainer: {
    marginVertical: 0,
  },
  lowerPart: {
    flex: 1.2,
  },
  modalContent: {
    flex: 1,
    backgroundColor: '#ffffff',
    marginTop: 10,
    marginLeft: 5,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 10,
  },
});

export default HomeScreen;
