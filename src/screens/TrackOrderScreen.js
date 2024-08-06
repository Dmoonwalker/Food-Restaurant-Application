import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, SafeAreaView, Dimensions } from 'react-native';
import { colors, typography, spacing } from '../theme/theme';
import Ionicons from 'react-native-vector-icons/Ionicons';

const TrackOrderScreen = ({ navigation }) => {
  const windowHeight = Dimensions.get('window').height;

  const handleBackPress = () => {
    navigation.navigate('MyOrders');
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.mapContainer}>
        <TouchableOpacity style={styles.backButton} onPress={handleBackPress}>
          <Ionicons name="chevron-back-outline" size={24} color={colors.black} style={styles.backIcon}  />
        </TouchableOpacity>
        {/* Replace with actual map view */}
        <Image source={require('../../assets/map_placeholder.png')} style={styles.mapImage} />
      </View>
      <View style={[styles.detailsContainer, { maxHeight: windowHeight * 0.4 }]}>
        <View style={styles.card}>
          <View style={styles.deliveryPersonInfo}>
            <Image source={require('../../assets/profile.jpg')} style={styles.deliveryPersonImage} />
            <View style={styles.deliveryPersonDetails}>
              <Text style={styles.deliveryPersonName}>Eric Hardy</Text>
              <Text style={styles.deliveryPersonRole}>Your Delivery Partner</Text>
            </View>
            <TouchableOpacity style={styles.callButton}>
              <Ionicons name="call-outline" size={24} color='green' />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.card}>
          <View style={styles.detailRow}>
            <Ionicons name="time-outline" size={24} color={colors.primary} />
            <Text style={styles.detailLabel}>Est. Delivery Time:</Text>
            <Text style={styles.detailValue}>15 min</Text>
          </View>
        </View>
        <View style={styles.card}>
          <View style={styles.detailRow}>
            <Ionicons name="location-outline" size={24} color={colors.primary} />
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
    backgroundColor: colors.background,
  },
  mapContainer: {
    flex: 3,
    width: '100%',
    position: 'relative',
  },
  backButton: {
    position: 'absolute',
    top: spacing.large,
    left: spacing.large,
    backgroundColor: colors.white,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    transform: [{ rotate: '45deg' }],
    margin: 10,
    zIndex: 10,
    shadowColor: colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
    width: 50,
    height: 50,
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
    flex: 2,
    backgroundColor: colors.white,
    borderTopEndRadius: 30,
    borderTopStartRadius: 30,
    padding: spacing.large,
    shadowColor: colors.black,
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  card: {
    backgroundColor: colors.white,
    borderRadius: 10,
    padding: spacing.medium,
    marginBottom: spacing.medium,
    shadowColor: colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  deliveryPersonInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  deliveryPersonDetails: {
    flex: 1,
  },
  deliveryPersonImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: spacing.medium,
  },
  deliveryPersonName: {
    ...typography.subHeader,
    color: colors.text

  },
  deliveryPersonRole: {
    ...typography.body,
    color: colors.text,
  },
  callButton: {
    padding: spacing.small,
    backgroundColor: 'white',
    borderRadius: 25,
    borderWidth: 2,
    borderColor: 'green'
  },
  detailRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: spacing.small,
  },
  detailIcon: {
    marginRight: spacing.small,
  },
  detailLabel: {
    ...typography.body,
    color: colors.text,
    marginHorizontal: 5
  },
  detailValue: {
    ...typography.body,
    fontWeight: 'bold',
    color: colors.text
  },
});

export default TrackOrderScreen;
