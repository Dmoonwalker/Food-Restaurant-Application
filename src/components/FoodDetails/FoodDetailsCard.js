import React, { useRef, useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image, Dimensions, Animated } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { colors, spacing } from '../../theme/theme';

const { width } = Dimensions.get('window');

const FoodDetailsCard = ({
  title,
  description,
  addOns,
  selectedAddOns,
  toggleAddOn,
  handleAddToCart,
  quantity,
  increaseQuantity,
  decreaseQuantity,
}) => {
  const slideAnim = useRef(new Animated.Value(-50)).current;
  const [slideUpMessageVisible, setSlideUpMessageVisible] = useState(false);
  const [selectedDrinks, setSelectedDrinks] = useState({});

  const showSlideUpMessage = () => {
    setSlideUpMessageVisible(true);
    Animated.sequence([
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }),
      Animated.delay(1500),
      Animated.timing(slideAnim, {
        toValue: -50,
        duration: 300,
        useNativeDriver: true,
      }),
    ]).start(() => setSlideUpMessageVisible(false));
  };

  const handleAddToCartWithAnimation = () => {
    handleAddToCart();
    showSlideUpMessage();
  };

  const handleAddDrink = (drinkId) => {
    setSelectedDrinks((prevState) => ({
      ...prevState,
      [drinkId]: (prevState[drinkId] || 0) + 1,
    }));
  };

  const handleRemoveDrink = (drinkId) => {
    setSelectedDrinks((prevState) => {
      const newState = { ...prevState };
      if (newState[drinkId] > 1) {
        newState[drinkId] -= 1;
      } else {
        delete newState[drinkId];
      }
      return newState;
    });
  };
  const handleCheckout = () => {
    navigation.navigate('CartStack', { screen: 'Cart' });
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.topRatedContainer}>
          <Ionicons name="star" size={18} color="#FFF" />
          <Text style={styles.topRatedText}>Top Rated</Text>
        </View>
       
      </View>

      <View style={styles.titleRow}>
        <Text style={styles.title}>{title}</Text>
      </View>

      <Text style={styles.description}>{description}</Text>

      <Text style={styles.addOnsTitle}>Add Ons</Text>
      <View style={styles.addOnsContainer}>
        {addOns.map((addOn) => (
          <TouchableOpacity
            key={addOn.id}
            style={[
              styles.addOnButton,
              selectedAddOns.includes(addOn.id) && styles.selectedAddOnButton,
            ]}
            onPress={() => toggleAddOn(addOn.id)}
          >
            <Image source={addOn.image} style={styles.addOnImage} />
            <Ionicons
              name="add-circle-outline"
              size={24}
              color={selectedAddOns.includes(addOn.id) ? '#FFF' : colors.primary}
              style={styles.addOnIcon}
            />
          </TouchableOpacity>
        ))}
      </View>

      <Text style={styles.addOnsTitle}>Choose Drink</Text>
      <View style={styles.drinksContainer}>
        {[
          { id: 'fanta', name: 'Fanta', price: '₦100', image: require('../../../assets/fanta.jpg') },
          { id: 'coke', name: 'Coke', price: '₦120', image: require('../../../assets/coke.jpg') },
        ].map((drink) => (
          <View key={drink.id} style={styles.drinkCard}>
            <Image source={drink.image} style={styles.drinkImage} />
            <Text style={styles.drinkName}>{drink.name}</Text>
            <Text style={styles.drinkPrice}>{drink.price}</Text>
            {selectedDrinks[drink.id] ? (
              <View style={styles.drinkQuantityContainer}>
                <TouchableOpacity style={styles.quantityButton} onPress={() => handleRemoveDrink(drink.id)}>
                  <Ionicons name={selectedDrinks[drink.id] === 1 ? "trash-outline" : "remove"} size={24} color={colors.primary} />
                </TouchableOpacity>
                <Text style={styles.drinkQuantity}>{selectedDrinks[drink.id]}</Text>
                <TouchableOpacity style={styles.quantityButton} onPress={() => handleAddDrink(drink.id)}>
                  <Ionicons name="add" size={24} color={colors.primary} />
                </TouchableOpacity>
              </View>
            ) : (
              <TouchableOpacity style={styles.addDrinkButton} onPress={() => handleAddDrink(drink.id)}>
                <Text style={styles.addDrinkButtonText}>Add</Text>
              </TouchableOpacity>
            )}
          </View>
        ))}
      </View>

      {slideUpMessageVisible && (
        <Animated.View
          style={[
            styles.slideUpMessage,
            {
              transform: [
                {
                  translateY: slideAnim,
                },
              ],
            },
          ]}
        >
          <Text style={styles.slideUpText}>Added to basket</Text>
        </Animated.View>
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: spacing.large,
    backgroundColor: colors.lightGray,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    position: 'relative',
    overflow: 'hidden',
    paddingBottom: 80,
  },
  slideUpMessage: {
    position: 'absolute',
    top: -50,
    left: 0,
    right: 0,
    backgroundColor: colors.accent,
    padding: spacing.medium,
    borderRadius: spacing.small,
    zIndex: 10,
  },
  slideUpText: {
    color: colors.text,
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: spacing.large,
  },
  topRatedContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.primary,
    borderRadius: 20,
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  topRatedText: {
    color: colors.white,
    fontSize: 14,
    fontWeight: 'bold',
    marginLeft: 5,
  },
  titleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: spacing.small,
  },
  title: {
    fontSize: 20,
    color: colors.text,
    fontWeight: 'bold',
  },
  description: {
    marginBottom: spacing.medium,
    color: colors.darkGray,
    fontSize: 16,
    textAlign: 'left',
    lineHeight: 24,
  },
  addOnsTitle: {
    fontSize: 20,
    color: colors.black,
    fontWeight: 'bold',
    marginBottom: spacing.medium,
  },
  addOnsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: spacing.large,
    justifyContent: 'flex-start',
  },
  addOnButton: {
    backgroundColor: colors.white,
    borderRadius: 10,
    padding: spacing.small,
    margin: spacing.small / 2,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    width: 100,
    height: 100,
  },
  selectedAddOnButton: {
    backgroundColor: colors.primary,
  },
  addOnImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  addOnIcon: {
    position: 'absolute',
    bottom: 5,
    right: 5,
  },
  drinksContainer: {
    flexDirection: 'row',

    marginBottom: spacing.large,
  },
  drinkCard: {
    backgroundColor: colors.white,
    borderRadius: 10,
    padding: spacing.small,
    marginRight: 20,
    alignItems: 'center',
    justifyContent: 'center',
    width: width / 3 - spacing.large,
  },
  drinkImage: {
    width: 50,
    height: 50,
    marginBottom: spacing.small,
  },
  drinkName: {
    fontSize: 16,
    color: colors.text,
    fontWeight: 'bold',
  },
  drinkPrice: {
    fontSize: 14,
    color: colors.text,
    marginBottom: spacing.small,
  },
  drinkQuantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.white,
    padding: spacing.small,
  },
  drinkQuantity: {
    marginHorizontal: spacing.small,
    fontSize: 16,
    color: colors.black,
    fontWeight: 'bold',
  },
  quantityButton: {
    padding: spacing.small,
  },
  addDrinkButton: {
    backgroundColor: colors.primary,
    paddingVertical: spacing.small,
    paddingHorizontal: spacing.large,
    borderRadius: 15,
  },
  addDrinkButtonText: {
    color: colors.white,
    fontSize: 14,
    fontWeight: 'bold',
  },
  cartButton: {
    backgroundColor: colors.primary,
    paddingVertical: spacing.medium,
    paddingHorizontal: spacing.large,
    borderRadius: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: spacing.large,
  },
  cartButtonText: {
    color: colors.white,
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default FoodDetailsCard;

