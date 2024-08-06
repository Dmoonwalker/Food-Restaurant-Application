import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView, Image } from 'react-native';
import { colors, typography, spacing } from '../theme/theme';
import { CommonActions } from '@react-navigation/native';

const OrderTrackingScreen = ({ navigation }) => {
  const handleTrackOrderPress = () => {
    navigation.reset({
      index: 0,
      routes: [

        { name: 'OrdersStack', params: { screen: 'TrackOrder' } },
    ]});
   
  
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.imageContainer}>
        <Image 
          source={require('../../assets/delivery.png')} // Adjust the path accordingly
          style={styles.image} 
        />
      </View>
      <Text style={styles.title}>Your food is on the way.</Text>
      <Text style={styles.description}>
        Thank you for your order! you can track the delivery in “order” section.
      </Text>
      <Text style={styles.estimatedTime}>Est. Delivery Time: 24 min</Text>
      <TouchableOpacity style={styles.trackButton} onPress={handleTrackOrderPress}>
        <Text style={styles.trackButtonText}>Track My Order</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: spacing.large,
    backgroundColor: '#f0f0f0',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    marginBottom: spacing.large,
  },
  image: {
    width: 200, // Adjust the size as necessary
    height: 200,
    resizeMode: 'contain',
  },
  title: {
    ...typography.header,
    textAlign: 'center',
    fontWeight: 'bold',
    marginBottom: spacing.large,
    color: colors.primary, // Red color
    fontSize: 30, // A little smaller
  },
  description: {
    ...typography.header,
    textAlign: 'center',
    color: '#888888',
    fontSize: 16, // Bigger text size
    marginBottom: spacing.large, // Adjusted spacing
  },
  estimatedTime: {
    ...typography.body,
    textAlign: 'center',
    color: '#000', // Black color
    marginBottom: 70,
    fontSize: 20, // Adjusted text size
  },
  trackButton: {
    backgroundColor: colors.primary,
    padding: spacing.medium,
    borderRadius: 10, // Enough radius
    alignItems: 'center',
    width: '100%', // Full width
  },
  trackButtonText: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default OrderTrackingScreen;
