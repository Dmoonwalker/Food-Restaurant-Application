import React, { useRef, useState, useCallback, useEffect } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView, Dimensions } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { colors } from '../theme/theme'; // Update with your actual path

const { width: screenWidth } = Dimensions.get('window');

const HomeCard = ({ header, data, onCardPress, activeCard, setData, onCheckout }) => {
  const scrollViewRef = useRef(null);
  const [currentActiveCard, setCurrentActiveCard] = useState(activeCard);
  const navigation = useNavigation();

  const cardWidth = screenWidth > 768 ? screenWidth * 0.30 : screenWidth * 0.35; // Larger screens use a smaller percentage
  const cardMargin = 10; // Card margin
  const centerOffset = (screenWidth - cardWidth) / 2;
  

  useEffect(() => {
    setCurrentActiveCard(activeCard);
  }, [activeCard]);

  useEffect(() => {
    if (scrollViewRef.current) {
      scrollViewRef.current.scrollTo({
        x: currentActiveCard * (cardWidth + cardMargin) - centerOffset,
        animated: true,
      });
    }
  }, [currentActiveCard, cardWidth, cardMargin, centerOffset]);

  const scrollToNextCard = useCallback(() => {
    if (currentActiveCard < data.length - 1) {
      setCurrentActiveCard((prev) => prev + 1);
    }
  }, [currentActiveCard, data.length]);

  const scrollToPreviousCard = useCallback(() => {
    if (currentActiveCard > 0) {
      setCurrentActiveCard((prev) => prev - 1);
    }
  }, [currentActiveCard]);

  const handleFavoritePress = useCallback((index) => {
    const newData = [...data];
    newData[index].isFavorite = !newData[index].isFavorite;
    setData(newData);
  }, [data, setData]);

  const handleAddPress = useCallback((item) => {
    console.log('Added item:', item);
  }, []);

  const getCardBackgroundColor = (index) => {
    const colors = ['#FFF8DC', '#E6F2FF', '#E6FFE6', '#F0E6FF'];
    return colors[index % colors.length];
  };

  const getCardScale = (index) => {
    return currentActiveCard === index ? 1.1 : 1;
  };

  return (
    <View style={styles.container}>
      {header && <View ><Text style={styles.title}>{header}</Text></View>}
      <TouchableOpacity style={styles.arrowButtonBack} onPress={scrollToPreviousCard}>
        <Ionicons name="chevron-back" size={24} color={colors.primary} />
      </TouchableOpacity>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        ref={scrollViewRef}
        contentContainerStyle={styles.cardsContainer}
        snapToInterval={cardWidth + cardMargin}
        decelerationRate="fast"
      >
        {data.map((item, index) => (
          <View key={item.name} style={styles.cardWrapper}>
            <TouchableOpacity
              onPress={() => onCardPress(item)}
              style={[
                styles.card,
                { width: cardWidth, transform: [{ scale: getCardScale(index) }] },
              ]}
            >
              <View style={[styles.imageContainer, { backgroundColor: getCardBackgroundColor(index) }]}>
                <View style={styles.plate}>
                  <Image source={item.image} style={styles.cardImage} />
                </View>
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
        ))}
      </ScrollView>
      <TouchableOpacity style={styles.arrowButton} onPress={scrollToNextCard}>
        <Ionicons name="chevron-forward" size={24} color={colors.primary} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    backgroundColor: colors.backgroundColor,
  },
  cardsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: screenWidth * 0.05,
  },
  cardWrapper: {
    marginHorizontal: 10,
    justifyContent: 'center',
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
    padding: 50,
    paddingBottom: 10,
    position: 'relative',
  },
  plate: {
    width: screenWidth * 0.22,
    height: screenWidth * 0.22,
    borderRadius: screenWidth * 0.11,
    borderWidth: 2,
    borderColor: '#D3D3D3',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
   
  },
  cardImage: {
    width: screenWidth * 0.2,
    height: screenWidth * 0.2,
    resizeMode: 'cover',
    borderRadius: screenWidth * 0.1,
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
    shadowOffset: { width: 0, height :2 ,},
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
    color: colors.text,
  },
  priceRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 5,
  },
  cardPrice: {
    fontSize: 18,
    color: colors.primary,
    fontWeight: 'bold',
  },
  discountContainer: {
    backgroundColor: '#90EE90',
    borderRadius: 5,
    paddingHorizontal: 5,
    paddingVertical: 2,
  },
  discount: {
    fontSize: 14,
    color: 'green',
    fontWeight: 'bold',
  },
  addButton: {
    position: 'absolute',
    bottom: 3,
    right: 3,
    backgroundColor: '#2b2b47',
    borderRadius: 25,
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 3,
  },
  addButtonText: {
    color: '#FFF',
    fontSize: 24,
    fontWeight: 'bold',
  },
  arrowButton: {
    position: 'absolute',
    right: 10,
    top: '50%',
    transform: [{ translateY: -24 }],
    borderRadius: 50,
    padding: 5,
    zIndex: 1,
  },
  arrowButtonBack: {
    position: 'absolute',
    left: 10,
    top: '50%',
    transform: [{ translateY: -24 }],
    borderRadius: 50,
    padding: 1,
    zIndex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.text,
    paddingHorizontal: 20,
  },
});

export default HomeCard;
