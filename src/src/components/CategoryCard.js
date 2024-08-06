// CategoryCard.js
import React, { useCallback } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { colors } from '../theme/theme'; // Update with your actual path

const CategoryCard = ({ item, index, handleCardPress, handleFavoritePress }) => {
  const getCardBackgroundColor = (index) => {
    const colors = ['#FFF8DC', '#E6F2FF', '#E6FFE6', '#F0E6FF'];
    return colors[index % colors.length];
  };

  return (
    <View style={styles.cardWrapper}>
      <TouchableOpacity onPress={() => handleCardPress(item)} style={styles.card}>
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
  );
};

const styles = StyleSheet.create({
  cardWrapper: {
    width: '48%', // Adjust width to fit two items per row
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
  plate: {
    width: 140,
    height: 140,
    borderRadius: 70,
    borderWidth: 2,
    borderColor: '#D3D3D3',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
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
});

export default CategoryCard;
