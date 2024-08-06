import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { colors } from '../theme/theme'; // Update with your actual path

const SpecialItems = ({ data }) => {
  const navigation = useNavigation();
  
  // State to track quantities and notification visibility
  const [quantities, setQuantities] = useState(
    data.reduce((acc, item) => ({ ...acc, [item.name]: 0 }), {})
  );
  const [showNotification, setShowNotification] = useState({});

  // Handler to update quantity and show notification
  const updateQuantity = (itemName, delta) => {
    setQuantities((prevQuantities) => {
      const newQuantity = Math.max(0, prevQuantities[itemName] + delta);
      if (delta > 0) {
        setShowNotification((prev) => ({ ...prev, [itemName]: true }));
        setTimeout(() => {
          setShowNotification((prev) => ({ ...prev, [itemName]: false }));
        }, 1500); // Notification will disappear after 1.5 seconds
      }
      return { ...prevQuantities, [itemName]: newQuantity };
    });
  };

  // Handler to navigate to details page
  const handlePress = (item) => {
    navigation.navigate('FoodDetail', { item });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>Recommended</Text>
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.contentContainer}
      >
        {data.map((item) => (
          <View key={item.name} style={styles.itemContainer}>
            <View style={styles.imageContainer}>
              <Image source={item.image} style={styles.image} />
              {showNotification[item.name] && (
                <View style={styles.notification}>
                  <Text style={styles.notificationText}>Successfully Added</Text>
                </View>
              )}
              <View style={styles.ratingOverlay}>
                <View style={styles.ratingContainer}>
                  <Ionicons name="star" size={15} color="#FFD700" />
                  <Text style={styles.ratingText}>{item.rating}</Text>
                </View>
              </View>
            </View>
            <View style={styles.detailsContainer}>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.description}>{item.description}</Text>
              <View style={styles.bottomRow}>
                <Text style={styles.price}>${item.price}</Text>
                {/* {quantities[item.name] === 0 ? (
                  <TouchableOpacity
                    style={styles.addButton}
                    onPress={() => updateQuantity(item.name, 1)}
                  >
                    <Ionicons name="add" size={20} color="#fff" />
                  </TouchableOpacity>
                ) : (
                  <View style={styles.quantityActions}>
                    <TouchableOpacity
                      style={styles.quantityButton}
                      onPress={() => updateQuantity(item.name, -1)}
                    >
                      {quantities[item.name] === 1 ? (
                        <Ionicons name="trash" size={16} color="#fff" />
                      ) : (
                        <Ionicons name="remove" size={16} color="#fff" />
                      )}
                    </TouchableOpacity>
                    <Text style={styles.quantityText}>{quantities[item.name]}</Text>
                    <TouchableOpacity
                      style={styles.quantityButton}
                      onPress={() => updateQuantity(item.name, 1)}
                    >
                      <Ionicons name="add" size={16} color="#fff" />
                    </TouchableOpacity>
                  </View>
                )} */}
              </View>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    backgroundColor: colors.background,
    borderRadius: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.black,
    margin: 7,
    marginBottom: 10,
  },
  scrollView: {
    flexGrow: 1,
  },
  contentContainer: {
    paddingBottom: 20,
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    paddingRight: 15, // Reduced padding
    paddingVertical: 10,
    margin: 7,
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
    position: 'relative', // Needed for positioning notification
  },
  imageContainer: {
    position: 'relative',
  },
  image: {
    width: 120,
    height: 120,
    borderRadius: 10,
    marginRight: 15,
  },
  notification: {
    position: 'absolute',
    bottom: 0, // Position below the image
    left: 0,
    width: '95%', // Cover the image width
    backgroundColor: 'green',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1,
  },
  notificationText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
  ratingOverlay: {
    position: 'absolute',
    top: 0,
    left: 0, // Align to the start of the image
    width: 80, // Adjust to fit the rating
    height: 30, // Adjust to fit the rating
    alignItems: 'flex-start', // Align items to the start (left side)
    justifyContent: 'center',
  },
  ratingContainer: {
    backgroundColor: '#FFFFE0', // Very light yellow
    borderTopRightRadius: 15, // Rounded right side
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 15,
    borderWidth: 1,
    borderColor: '#FFD700', // Darker yellow border
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  ratingText: {
    fontSize: 13,
    color: '#000000', // Black text for rating
    marginLeft: 3, // Adjusted for star and text spacing
  },
  detailsContainer: {
    flex: 1,
    justifyContent: 'space-between', // Ensure bottomRow is pushed to the bottom
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.black,
  },
  description: {
    fontSize: 14, // Increased description text size
    color: 'grey',
    marginVertical: 10,
  },
  bottomRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  price: {
    fontSize: 18,
    color: 'black',
    fontWeight: 'bold',
  },
  addButton: {
    width: 40,
    height: 40,
    borderRadius: 20, // Fully rounded button
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  quantityActions: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  quantityButton: {
    backgroundColor: colors.primary,
    borderRadius: 5,
    padding: 5,
    marginHorizontal: 5,
  },
  quantityText: {
    fontSize: 16,
    color: colors.primary,
    fontWeight: 'bold',
    marginHorizontal: 10,
  },
});

export default SpecialItems;
