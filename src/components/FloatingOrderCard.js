import React, { useEffect, useRef } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions, Animated, Easing } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useActiveOrder } from '../context/ActiveOrderContext';
import { colors, spacing } from '../theme/theme';

const FloatingOrderCard = () => {
  const navigation = useNavigation();
  const { activeOrder } = useActiveOrder();
  const swingAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (activeOrder) {
      Animated.loop(
        Animated.sequence([
          Animated.timing(swingAnim, {
            toValue: 1,
            duration: 1000,
            easing: Easing.linear,
            useNativeDriver: true,
          }),
          Animated.timing(swingAnim, {
            toValue: -1,
            duration: 1000,
            easing: Easing.linear,
            useNativeDriver: true,
          }),
        ])
      ).start();
    }
  }, [activeOrder]);

  if (!activeOrder) return null;

  const handlePress = () => {
    navigation.navigate('OrdersStack', { screen: 'TrackOrder' });
  };

  const swing = swingAnim.interpolate({
    inputRange: [-1, 1],
    outputRange: ['-5deg', '5deg'],
  });

  return (
    <View style={styles.wrapper}>
      <View style={styles.lineContainer}>
        <View style={styles.line} />
        <View style={styles.line} />
      </View>
      <View style={styles.lineContainer2}>
        <View style={styles.line} />
        <View style={styles.line} />
      </View>
      <Animated.View style={[styles.cardContainer, { transform: [{ rotate: swing }] }]}>
        <TouchableOpacity style={styles.card} onPress={handlePress}>
          <Text style={styles.text}>You have an active order</Text>
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
};

const screenWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  wrapper: {
    position: 'absolute',
    top: 50,
    left: '60%', // Adjust this value to move the card horizontally
    zIndex: 1000,
    alignItems: 'center',
  },
  lineContainer: {
    position: 'absolute',
    top: -50,
    left: '70%',
    transform: [{ translateX: -1 }],
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  lineContainer2: {
    position: 'absolute',
    top: -50,
    left: '30%',
    transform: [{ translateX: -1 }],
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  line: {
    width: 2,
    height: 50, // Adjust this value to change the length of the lines
    backgroundColor: colors.primary,
  },
  card: {
    backgroundColor: colors.primary,
    padding: spacing.medium,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
    width: screenWidth * 0.3, // Adjust width as necessary
    alignItems: 'center',
    marginTop: 5, // Adjust margin to position below the lines
  },
  text: {
    color: '#FFF',
    fontWeight: 'bold',
  },
});

export default FloatingOrderCard;
