import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView, Image } from 'react-native';
import { colors, typography, spacing } from '../theme/theme';
import LinearGradient from 'react-native-linear-gradient';

const OrderSuccessScreen = ({ navigation }) => {
  const handleTrackOrderPress = () => {
    navigation.reset({
      index: 0,
      routes: [
        { name: 'OrdersStack', params: { screen: 'TrackOrder' } },
      ],
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={require('../../assets/delivery.png')} // Adjust the path accordingly
          style={styles.image}
        />
      </View>
      <Text style={styles.title}>Hooray! Payment Successful!</Text>
      <Text style={styles.description}>
        Your delicious meal is being prepared and will be on its way shortly.
      </Text>
      <Text style={styles.estimatedTime}>Estimated Delivery: 24 mins</Text>
      <TouchableOpacity onPress={handleTrackOrderPress}>
        <LinearGradient
          colors={[colors.primary, colors.primary]}
          style={styles.trackButton}
        >
          <Text style={styles.trackButtonText}>Track Your Feast</Text>
        </LinearGradient>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: spacing.large,
    backgroundColor: colors.background, // Use a theme-appropriate background
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -50,
  },
  imageContainer: {
    marginBottom: spacing.extraLarge,
    borderRadius: spacing.extraLarge,
    overflow: 'hidden',
  
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },
  title: {
    ...typography.header,
    textAlign: 'center',
    color: 'green',
    fontSize: 24, // Adjusted for emphasis
    marginBottom: spacing.medium,
  },
  description: {
    ...typography.body,
    textAlign: 'center',
    color: colors.darkGray,
    fontSize: 16,
    marginBottom: spacing.medium,
  },
  estimatedTime: {
    ...typography.subHeader,
    textAlign: 'center',
    color: colors.primary,
    marginBottom: spacing.large,
  },
  trackButton: {
    padding: spacing.large,
    borderRadius: 30,
    alignItems: 'center',
    width: '80%', // Suitable for finger tapping
    shadowColor: colors.black,
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.3,
    shadowRadius: 20,
    elevation: 10,
  },
  trackButtonText: {
    ...typography.button,
    color: colors.white,
  },
});

export default OrderSuccessScreen;
