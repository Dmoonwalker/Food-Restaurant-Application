import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, SafeAreaView, ScrollView, Image, Dimensions,Animated } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { colors, spacing,typography } from '../theme/theme';
import FoodDetailsCard from '../components/FoodDetails/FoodDetailsCard';
import Toast from 'react-native-toast-message';
const { width: screenWidth } = Dimensions.get('window');
const isSmallScreen = screenWidth < 480;

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
      }, 4000);
    });
  };

  const handleCheckout = () => {
    // Close the modal first
   closeModal();
 
    // Wait for the modal to close before navigating
    setTimeout(() => {
        navigation.navigate('CartStack', {screen: 'Cart'});
    }, 100); // Adjust timing based on your modal's closing animation
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
          <Ionicons name="close" size={24} color={colors.primary} style={styles.icon} />
        </TouchableOpacity>
        <View style={styles.headerRightIcons}>
          <TouchableOpacity style={styles.rhombus}>
            <Ionicons name="heart" size={28} color={colors.primary} style={styles.icon} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.rhombus}>
            <Ionicons name="share-outline" size={28} color={colors.primary} style={styles.icon} />
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
          <Text style={styles.messageText}>Item added to basket</Text>
        </Animated.View>
      )}
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.background,
  },
  container: {
    flexGrow: 1,
    paddingBottom: 50,
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
    margin: spacing.medium,
  },
  rhombus: {
    width: 50,
    height: 50,
    backgroundColor: colors.white,
    borderRadius: spacing.small,
    alignItems: 'center',
    justifyContent: 'center',
    transform: [{ rotate: '45deg' }],
    shadowColor: colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: spacing.small,
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
    backgroundColor: colors.accentDark,
    padding: spacing.large,
    height: '40%',
  },
  plateContainer: {
    width: 250,
    height: 250,
    borderRadius: 125, // Fully rounded
    backgroundColor: colors.white,
    shadowColor: colors.black,
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.3,
    shadowRadius: 20,
    elevation: 10,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    marginTop: spacing.large,
  },
  imageContainer: {
    width: '80%',
    height: '80%',
    borderRadius: 140, // Rounded image
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
  },
  foodImage: {
    width: '100%',
    height: '100%',
    borderRadius: 140,
    resizeMode: 'contain',
  },
  detailsCardWrapper: {
    flex: 1,
    backgroundColor: colors.accentDark,
    position: 'relative',
   
  },
  cartCard: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: 80,
    backgroundColor: colors.white,
  
    shadowColor: colors.black,
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cartRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },

quantityContainer: {
  flexDirection: 'row',
  alignItems: 'center',
  backgroundColor: colors.white,
  borderRadius: spacing.small,
  margin: 10,
  shadowColor: colors.black,
  shadowOffset: { width: 0, height: -2 },
  shadowOpacity: 0.2,
  shadowRadius: 5,
  elevation: 10,
  paddingVertical: isSmallScreen ? spacing.small * 0.75 : spacing.small,  // Reduce padding
  paddingHorizontal: isSmallScreen ? spacing.medium * 0.75 : spacing.medium,  // Reduce padding
},
quantityButton: {
  backgroundColor: colors.white,
  width: isSmallScreen ? 35 : 50,  // Reduce width
  height: isSmallScreen ? 30 : 50,  // Reduce height
  justifyContent: 'center',
  alignItems: 'center',
  margin: spacing.small,
  borderRadius: 5,
},
quantity: {
  fontSize: isSmallScreen ? 16 : 20,  // Reduce font size
  color: colors.primary,
  marginHorizontal: spacing.small,
},
cartButton: {
  flexDirection: 'row',
  alignItems: 'center',
  backgroundColor: colors.primary,
  paddingVertical: isSmallScreen ? spacing.small * 0.75 : spacing.small,  // Reduce padding
  paddingHorizontal: isSmallScreen ? spacing.large * 0.75 : spacing.large,  // Reduce padding
  justifyContent: 'center',
  width: '100%',
  height: isSmallScreen ? 60 : 80,  // Reduce height
},
cartButtonText: {
  color: colors.white,
  fontSize: isSmallScreen ? 14 : 16,  // Reduce font size
  fontWeight: 'bold',
  marginRight: spacing.small,
},
cartButtonPrice: {
  color: colors.white,
  fontSize: isSmallScreen ? 16 : 20,  // Reduce font size
  fontWeight: 'bold',
},
checkoutButton: {
  flexDirection: 'row',
  alignItems: 'center',
  backgroundColor: colors.primary,
  paddingVertical: isSmallScreen ? spacing.small * 0.75 : spacing.small,  // Reduce padding
  paddingHorizontal: isSmallScreen ? spacing.large * 0.75 : spacing.large,  // Reduce padding
  borderRadius: 15,
  height: isSmallScreen ? 52.5 : 70,  // Reduce height by 25%
  justifyContent: 'center',
  marginHorizontal: spacing.medium,
},
checkoutButtonText: {
  color: colors.white,
  fontSize: isSmallScreen ? 15 : 20,  // Reduce font size
  fontWeight: 'bold',
  marginRight: spacing.small,
},
checkoutButtonPrice: {
  color: colors.white,
  fontSize: isSmallScreen ? 20 : 25,  // Reduce font size
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
    zIndex: 20,
  },
  messageText: {
    color: colors.white,
    fontSize: 16,
    fontWeight: 'bold',
  },
});



export default FoodDetailScreen;
