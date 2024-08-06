import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Import useNavigation hook
import { colors } from '../theme/theme'; // Update with your actual path

const { width: screenWidth } = Dimensions.get('window');

const HomeCategories = ({ categories }) => {
  const navigation = useNavigation();

  const handleCategoryPress = (category) => {
    navigation.navigate('CategoryScreen', {
      category: category.name,
      items: category.items, // Pass items to the CategoryScreen
    });
  };

  return (
    <View style={styles.categoriesContainer}>
      <ScrollView 
        horizontal 
        showsHorizontalScrollIndicator={false} 
        contentContainerStyle={styles.categoriesRow}
      >
        {categories.map((category) => (
          <TouchableOpacity 
            key={category.name} 
            style={styles.categoryCard}
            onPress={() => handleCategoryPress(category)} // Pass the category object
          >
            <Image source={category.image} style={styles.categoryImage} />
            <Text style={styles.categoryText}>{category.name}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  categoriesContainer: {
    paddingHorizontal: 10,
    marginBottom: 15,
    backgroundColor: colors.background,
  },
  categoriesRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center', // Center items horizontally
  },
  categoryCard: {
    alignItems: 'center',
    width: screenWidth * 0.2, // 20% of screen width
    marginHorizontal: screenWidth * 0.02, // Dynamic margin for spacing
    padding: 10,
    height: screenWidth * 0.2, // Height equal to width
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 5,
  },
  categoryImage: {
    width: '100%', // Full width of the card
    height: '100%', // Adjust to fit within card
    borderRadius: screenWidth / 2,
    marginBottom: 5,
  },
  categoryText: {
    fontSize: 14,
    color: colors.black,
  },
});

export default HomeCategories;
