import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { colors } from '../theme/theme';

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
            style={styles.categoryCardContainer}
            onPress={() => handleCategoryPress(category)} // Pass the category object
          >
            <View style={styles.categoryCard}>
              <Image source={category.image} style={styles.categoryImage} />
            </View>
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
  },
  categoryCardContainer: {
    alignItems: 'center',
    marginHorizontal: screenWidth * 0.02, // Dynamic margin for spacing
  },
  categoryCard: {
    alignItems: 'center',
    width: screenWidth * 0.2, // 20% of screen width
    height: screenWidth * 0.2, // Height equal to width
  // Added borderRadius for rounded card corners
  },
  categoryImage: {
    width: '100%', // Full width of the card
    height: '100%', // Adjust to fit within card
    borderRadius: screenWidth / 2,
  },
  categoryText: {
    fontSize: 14,
    color: colors.text,
    marginTop: 5, // Space between the image and the label
    textAlign: 'center', // Center the text
  },
});

export default HomeCategories;
