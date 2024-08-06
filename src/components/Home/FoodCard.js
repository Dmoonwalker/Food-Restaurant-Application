import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { colors, typography, spacing } from '../../theme/theme';

const FoodCard = ({ item, onPress, cardStyle, imageStyle, titleStyle, subtitleStyle, ratingStyle, priceStyle, activeCard, setData }) => {
  const navigation = useNavigation();

  const handleFavoritePress = () => {
    // Handle the favorite button press
    console.log('Favorite pressed for item:', item);
    // You can add your logic here to update favorite status
  };

  return (
    <View style={styles.cardWrapper}>
      <TouchableOpacity
        onPress={() => navigation.navigate('FoodDetail', { item })}
        style={[
          styles.card,
          cardStyle,
          activeCard && styles.activeCard,
        ]}
      >
        <View style={[styles.imageContainer, { backgroundColor: '#FFF8DC' }]}>
          <View style={styles.plate}>
            <Image source={item.image} style={[styles.cardImage, imageStyle]} />
          </View>
          <View style={styles.iconContainer}>
            <TouchableOpacity onPress={handleFavoritePress} style={styles.favoriteContainer}>
              <Ionicons
                name={item.isFavorite ? 'heart' : 'heart-outline'}
                size={24}
                color={item.isFavorite ? 'red' : 'black'}
                style={styles.favoriteIcon}
              />
            </TouchableOpacity>
            <View style={styles.ratingContainer}>
              <Text style={[styles.ratingText, ratingStyle]}>{item.rating}</Text>
              <Ionicons name="star" size={20} color="#FFD700" />
            </View>
          </View>
        </View>
        <View style={[styles.infoContainer, { backgroundColor: 'white' }]}>
          <Text style={[styles.cardTitle, titleStyle]}>{item.title}</Text>
          <Text style={[styles.foodSubtitle, subtitleStyle]}>{item.description}</Text>
          <View style={styles.priceRow}>
            <Text style={[styles.cardPrice, priceStyle]}>{item.price}</Text>
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
    position: 'relative',
    marginHorizontal: 10,
  },
  card: {
    width: 200,
    position: 'relative',
    borderRadius: 10,
    padding: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  activeCard: {
    transform: [{ scale: 1.05 }],
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
    fontWeight: 'bold',
    marginBottom: 5,
  },
  foodSubtitle: {
    color: '#888888',
    marginBottom: spacing.small,
    fontSize: 18,
    fontWeight: 'normal',
  },
  priceRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cardPrice: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.primary,
  },
  discountContainer: {
    backgroundColor: '#FFD700',
    borderRadius: 5,
    paddingVertical: 2,
    paddingHorizontal: 6,
  },
  discount: {
    fontSize: 12,
    color: '#FFF',
  },
});

export default FoodCard;
