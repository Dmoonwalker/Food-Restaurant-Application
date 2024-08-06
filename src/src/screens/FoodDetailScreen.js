import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, SafeAreaView, ScrollView, Image, Animated } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { colors, spacing } from '../theme/theme';
import FoodDetailsCard from '../components/FoodDetails/FoodDetailsCard';
import Toast from 'react-native-toast-message';

const FoodDetailScreen = ({ item, closeModal,navigation }) => {
  const [quantity, setQuantity] = useState(1);
  const [selectedAddOns, setSelectedAddOns] = useState([]);
  const [itemAdded, setItemAdded] = useState(false); // Use this to toggle visibility
  const [checkoutClicked, setCheckoutClicked] = useState(false); // State to manage message visibility
  const slideAnim = useRef(new Animated.Value(0)).current;
  const scrollY = useRef(new Animated.Value(0)).current;

  const increaseQuantity = () => setQuantity(quantity + 1);
  const decreaseQuantity = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  const handleAddToCart = () => {
    setItemAdded(true);
    setCheckoutClicked(true);
    Animated.timing(slideAnim, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start(() => {
      setTimeout(() => {
        Animated.timing(slideAnim, {
          toValue: 100,
          duration: 300,
          useNativeDriver: true,
        }).start(() => setCheckoutClicked(false));
      }, 2000);
    });
  };

  const handleCheckout = () => {
   navigation.navigate('CartStack', {screen: 'ConfirmOrder'})
  };

  const toggleAddOn = (addOn) => {
    setSelectedAddOns((prevAddOns) =>
      prevAddOns.includes(addOn)
        ? prevAddOns.filter((item) => item !== addOn)
        : [...prevAddOns, addOn]
    );
  };

  const addOns = [
    { id: 1, name: 'Sauce', image: require('../../assets/tomato_sauce.png') },
    { id: 2, name: 'Bread', image: require('../../assets/sour_cream.png') },
  ];

  const plateTranslateY = scrollY.interpolate({
    inputRange: [0, 100],
    outputRange: [0, -100],
    extrapolate: 'clamp',
  });

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.rhombus} onPress={closeModal}>
          <Ionicons name="close" size={24} color="#ee905d" style={styles.icon} />
        </TouchableOpacity>
        <View style={styles.headerRightIcons}>
          <TouchableOpacity style={styles.rhombus}>
            <Ionicons name="heart" size={28} color="#ee905d" style={styles.icon} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.rhombus}>
            <Ionicons name="share-outline" size={28} color="#ee905d" style={styles.icon} />
          </TouchableOpacity>
        </View>
      </View>
      <Animated.ScrollView
        contentContainerStyle={styles.container}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: true }
        )}
        scrollEventThrottle={16}
      >
        <View style={styles.plateWrapper}>
          <View style={styles.plateContainer}>
            <View style={styles.imageContainer}>
              <Image source={item.image} style={styles.foodImage} />
            </View>
          </View>
        </View>
        <View style={styles.detailsCardWrapper}>
          <FoodDetailsCard
            title={item.title}
            description={item.description || 'No description available'}
            quantity={quantity}
            addOns={addOns}
            selectedAddOns={selectedAddOns}
            toggleAddOn={toggleAddOn}
            handleAddToCart={handleAddToCart}
            increaseQuantity={increaseQuantity}
            decreaseQuantity={decreaseQuantity}
          />
        </View>
      </Animated.ScrollView>
      <View style={styles.cartCard}>
        <View style={styles.cartRow}>
          {itemAdded ? (
            <>
              <View style={styles.quantityContainer}>
                <TouchableOpacity onPress={decreaseQuantity} style={styles.quantityButton}>
                  <Ionicons name={quantity === 1 ? "trash-outline" : "remove"} size={20} color={colors.primary} />
                </TouchableOpacity>
                <Text style={styles.quantity}>{quantity}</Text>
                <TouchableOpacity onPress={increaseQuantity} style={styles.quantityButton}>
                  <Ionicons name="add" size={20} color={colors.primary} />
                </TouchableOpacity>
              </View>
              <TouchableOpacity
                style={styles.checkoutButton}
                onPress={handleCheckout}
              >
                <Text style={styles.checkoutButtonText}>Checkout</Text>
                <Text style={styles.checkoutButtonPrice}>₦{(item.price * quantity).toFixed(2)}</Text>
              </TouchableOpacity>
            </>
          ) : (
            <TouchableOpacity
              style={styles.cartButton}
              onPress={() => {
                handleAddToCart();
              }}
            >
              <Text style={styles.cartButtonText}>Add item</Text>
              <Text style={styles.cartButtonPrice}>₦{(item.price * quantity).toFixed(2)}</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
      {checkoutClicked && (
        <Animated.View
          style={[
            styles.messageContainer,
            {
              transform: [
                {
                  translateY: slideAnim.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, -100], // Adjust the range to slide up from the bottom
                  }),
                },
              ],
            },
          ]}
        >
          <Text style={styles.messageText}>Your order has been placed!</Text>
        </Animated.View>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
  container: {
    flexGrow: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    padding: spacing.medium,
    position: 'absolute',
    top: 0,
    zIndex: 10,
  },
  headerRightIcons: {
    flexDirection: 'row',
    margin: 20,
  },
  rhombus: {
    width: 50,
    height: 50,
    backgroundColor: '#FFF',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    transform: [{ rotate: '45deg' }],
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 3,
    marginLeft: spacing.large,
  },
  icon: {
    transform: [{ rotate: '-45deg' }],
  },
  plateWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    position: 'relative',
    zIndex: 1,
    backgroundColor: colors.background,
    padding: 50,
  },
  plateContainer: {
    width: 250,
    height: 250,
    borderRadius: 225, // Fully rounded plate
    backgroundColor: '#ffffff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.3,
    shadowRadius: 20,
    elevation: 10,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    position: 'relative',
    marginTop: 100,
  },
  imageContainer: {
    width: '80%',
    height: '80%',
    borderRadius: 180, // Rounded image
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
  },
  foodImage: {
    width: '100%',
    height: '100%',
    borderRadius: 180,
    resizeMode: 'contain',
  },
  detailsCardWrapper: {
    flex: 1,
    backgroundColor: colors.background,
    position: 'relative',
    marginTop: 0,
  },
  cartCard: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    padding: spacing.medium,
    paddingBottom: spacing.large,
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 10,
    justifyContent: 'center', // Center the content vertically
    alignItems: 'center', // Center the content horizontally
  },
  cartRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%', // Ensure full width for proper centering
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    paddingHorizontal: spacing.small,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 10,
  },
  quantityButton: {
    backgroundColor: colors.white,
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    margin: spacing.small,
    borderRadius: 5,
    color: '#FFFFFF',
  },
  quantity: {
    fontSize: 20,
    color: colors.primary,
    marginHorizontal: spacing.small,
  },
  cartButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.primary,
    paddingVertical: spacing.small,
    paddingHorizontal: spacing.large,
    borderRadius: 15,
    height: 50,
    justifyContent: 'center', // Center the content
    width: '100%', // Ensure full width for proper centering
  },
  cartButtonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
    marginRight: spacing.small,
  },
  cartButtonPrice: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  checkoutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.primary,
    paddingVertical: spacing.small,
    paddingHorizontal: spacing.large,
    borderRadius: 15,
    height: 50,
    justifyContent: 'center', // Center the content
    marginLeft: spacing.medium, // Space between quantity and checkout
  },
  checkoutButtonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
    marginRight: spacing.small,
  },
  checkoutButtonPrice: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  messageContainer: {
    position: 'absolute',
    left: 0,
    right: 0,
    backgroundColor: 'green',
    padding: spacing.medium,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 20, // Ensure it appears above other content
  },
  messageText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default FoodDetailScreen;
