import React from 'react';
import { View, Text, StyleSheet, Image, Dimensions } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import { colors } from '../theme/theme';

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

const PromotionSection = ({ promotions, activeSlide, onSnapToItem }) => {
  const promoWidth = screenWidth * 0.95; // 90% of screen width
  const promoHeight = screenHeight * 0.2; // 20% of screen height

  const renderPromotion = ({ item }) => (
    <View style={[styles.promoCard, { backgroundColor: item.backgroundColor, width: promoWidth, height: promoHeight }]}>
      <View style={styles.promoTextContainer}>
        <Text style={styles.sectionTitle}>{item.heading}</Text>
        <Text style={styles.promoTitle}>{item.promoPercentage}</Text>
        <Text style={styles.promoSubtitle}>{item.promoSubtitle}</Text>
        <Text style={styles.promoDescription}>{item.promoDescription}</Text>
      </View>
      <Image source={item.imageSource} style={styles.promoImage} />
    </View>
  );

  return (
    <View style={[styles.promoSection, { width: promoWidth }]}>
      <Carousel
        loop
        width={promoWidth}
        height={promoHeight}
        autoPlay={true}
        autoPlayInterval={5000}
        data={promotions}
        scrollAnimationDuration={1000}
        onSnapToItem={onSnapToItem}
        renderItem={renderPromotion}
      />
      <View style={styles.paginationContainer}>
        {promotions.map((_, index) => (
          <View
            key={index}
            style={[
              styles.dot,
              { backgroundColor: index === activeSlide ? colors.primary : '#C4C4C4' },
            ]}
          />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  promoSection: {
    alignSelf: 'center', // Center the entire promo section
   
    marginVertical: 20,
  },
  promoCard: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 15,
    padding: 15,
    justifyContent: 'center', // Center the content horizontally
  },
  promoTextContainer: {
    flex: 1,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 5,
  },
  promoTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 5,
  },
  promoSubtitle: {
    fontSize: 18,
    color: '#FFFFFF',
    marginBottom: 5,
  },
  promoDescription: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  promoImage: {
    width: 120,
    height: 120,
    borderRadius: 10,
    marginLeft: 15,
    resizeMode: 'cover',
    alignSelf: 'center', // Center the image
  },
  paginationContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10, // Adjust based on spacing needs
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 4,
  },
});

export default PromotionSection;
