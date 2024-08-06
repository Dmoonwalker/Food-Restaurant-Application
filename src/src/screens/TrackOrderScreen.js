import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, SafeAreaView, Dimensions } from 'react-native';
import { colors, typography, spacing } from '../theme/theme';
import Ionicons from 'react-native-vector-icons/Ionicons';

const TrackOrderScreen = ({ navigation }) => {
  const windowHeight = Dimensions.get('window').height;

  // useEffect(() => {
  //   navigation.getParent()?.setOptions({
  //     tabBarStyle: {
  //       display: 'none',
  //     },
  //   });
  //   return () => navigation.getParent()?.setOptions({
  //     tabBarStyle: undefined,
  //   });
  // }, [navigation]);

  const handleBackPress = () => {
    
    navigation.navigate('MyOrders');
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.mapContainer}>
        <TouchableOpacity style={styles.backButton} onPress={handleBackPress}>
          <Ionicons name="chevron-back-outline" size={24} color={colors.black} style={styles.backIcon} />
        </TouchableOpacity>
        {/* Replace with actual map view */}
        <Image source={require('../../assets/map_placeholder.png')} style={styles.mapImage} />
      </View>
      <View style={[styles.detailsContainer, { maxHeight: windowHeight * 0.4 }]}>
        <View style={styles.card}>
          <View style={styles.deliveryPersonInfo}>
            <Image source={require('../../assets/profile.jpg')} style={styles.deliveryPersonImage} />
            <View>
              <Text style={styles.deliveryPersonName}>Eric Hardy</Text>
              <Text style={styles.deliveryPersonRole}>Your food boy</Text>
            </View>
            <TouchableOpacity style={styles.callButton}>
              <Ionicons name="call-outline" size={24} color={colors.primary} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.card}>
          <View style={styles.detailRow}>
            <Ionicons name="time-outline" size={24} color={colors.primary} style={styles.detailIcon} />
            <Text style={styles.detailLabel}>Est. Delivery Time:</Text>
            <Text style={styles.detailValue}>15 min</Text>
          </View>
        </View>
        <View style={styles.card}>
          <View style={styles.detailRow}>
            <Ionicons name="location-outline" size={24} color={colors.primary} style={styles.detailIcon} />
            <Text style={styles.detailLabel}>Address:</Text>
            <Text style={styles.detailValue}>123 Golden Street, Miami</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  mapContainer: {
    height: '70%',
    width: '100%',
    position: 'relative',
  },
  backButton: {
    position: 'absolute',
    top: spacing.medium,
    left: spacing.large,
    transform: [{ rotate: '45deg' }],
    width: 50,
    height: 50,
    margin: 14,
    backgroundColor: '#FFF',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 3,
  },
  backIcon: {
    transform: [{ rotate: '-45deg' }],
  },
  mapImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  detailsContainer: {
    backgroundColor: '#FFF',
    borderTopEndRadius: 30,
    borderTopStartRadius: 30,
    padding: spacing.large,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  card: {
    backgroundColor: '#FFF',
    borderRadius: 10,
    padding: spacing.medium,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
    marginBottom: spacing.medium,
  },
  deliveryPersonInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  deliveryPersonImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: spacing.medium,
  },
  deliveryPersonName: {
    ...typography.subHeader,
    color: '#000',
  },
  deliveryPersonRole: {
    color: '#000',
  },
  callButton: {
    marginLeft: 'auto',
    backgroundColor: '#FFF0F0',
    padding: spacing.small,
    borderRadius: 25,
  },
  detailRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  detailIcon: {
    marginRight: spacing.small,
  },
  detailLabel: {
    ...typography.body,
    color: '#000',
    marginRight: spacing.small,
  },
  detailValue: {
    ...typography.body,
    fontWeight: 'bold',
    color: '#000',
  },
});

export default TrackOrderScreen;
