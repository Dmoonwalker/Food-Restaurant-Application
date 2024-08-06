import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView, ScrollView, Image } from 'react-native';
import { colors, typography, spacing } from '../theme/theme';
import Ionicons from 'react-native-vector-icons/Ionicons';

const cards = [
  {
    id: 1,
    bankName: 'Random Bank Name 1',
    cardNumber: '1234 5678 9010 7890',
    expiry: '12/23',
    cardholderName: 'Julia Edwards',
    brand: 'Visa',
    brandImage: require('../../assets/visa.png'), // Adjust the path accordingly
    simImage: require('../../assets/sim.jpg'), // Adjust the path accordingly
  },
  {
    id: 2,
    bankName: 'Random Bank Name 2',
    cardNumber: '1234 5678 9010 7890',
    expiry: '12/23',
    cardholderName: 'Julia Edwards',
    brand: 'MasterCard',
    brandImage: require('../../assets/mastercard.png'), // Adjust the path accordingly
    simImage: require('../../assets/sim.jpg'), // Adjust the path accordingly
  },
];

const SelectCardScreen = ({ navigation }) => {
  const [selectedCard, setSelectedCard] = useState(null);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.header}>
          <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
            <Ionicons name="chevron-back-outline" size={24} color={colors.black} style={styles.backIcon} />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Select Card</Text>
        </View>
        {cards.map((card) => (
          <TouchableOpacity
            key={card.id}
            style={[
              styles.cardContainer,
              selectedCard === card.id && styles.selectedCard,
            ]}
            onPress={() => setSelectedCard(card.id)}
          >
            <View style={styles.cardTop}>
              <Image source={card.simImage} style={styles.simImage} />
              <Text style={styles.bankName}>{card.bankName}</Text>
              <View
                style={[
                  styles.radioCircle,
                  selectedCard === card.id && styles.selectedRadioCircle,
                ]}
              />
            </View>
            <Text style={styles.cardNumber}>{card.cardNumber}</Text>
            <View style={styles.cardBottom}>
              <Text style={styles.cardholderName}>{card.cardholderName}</Text>
              <View style={styles.expiryAndBrand}>
                <Text style={styles.expiry}>Expiry: {card.expiry}</Text>
                <Image source={card.brandImage} style={styles.brandImage} />
              </View>
            </View>
          </TouchableOpacity>
        ))}
        <TouchableOpacity style={styles.addCardButton} onPress={() => navigation.navigate('AddCard')}>
          <Text style={styles.addCardText}>+ Add New Card</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.doneButton} onPress={() => navigation.navigate('OrderTracking')}>
          <Text style={styles.doneButtonText}>Done</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: spacing.large,
    backgroundColor: '#fcfcfc',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: spacing.large,
    justifyContent: 'space-between',
    marginBottom: 50,
  },
  backButton: {
    width: 40,
    height: 40,
    backgroundColor: '#FFF',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    transform: [{ rotate: '45deg' }],
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 3,
  },
  backIcon: {
    transform: [{ rotate: '-45deg' }],
  },
  headerTitle: {
    ...typography.header,
    color : colors.black,
    fontSize: 24,
    flex: 1,
    textAlign: 'center',
    marginRight: 40,
  },
  cardContainer: {
    padding: spacing.medium,
    backgroundColor: '#E53935',
    borderRadius: 10,
    marginBottom: spacing.medium,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    height: 200,
    elevation: 5,
    marginHorizontal: spacing.small,
  },
  selectedCard: {
    borderColor: colors.primary,
    borderWidth: 2,
  },
  cardTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  simImage: {
    width: 30,
    height: 30,
  },
  bankName: {
    ...typography.body,
    fontWeight: 'bold',
    fontSize: 14,
    color: '#FFF',
  },
  radioCircle: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#888888',
  },
  selectedRadioCircle: {
    borderColor: colors.primary,
    backgroundColor: colors.primary,
  },
  cardNumber: {
    ...typography.body,
    fontSize: 24,
    color: '#FFF',
    textAlign: 'center',
    marginVertical: spacing.medium,
  },
  cardBottom: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cardholderName: {
    ...typography.body,
    fontSize: 16,
    color: '#FFF',
  },
  expiryAndBrand: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  expiry: {
    ...typography.body,
    fontSize: 14,
    color: '#FFF',
    marginRight: spacing.small,
  },
  brandImage: {
    width: 40,
    height: 40,
  },
  addCardButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: spacing.medium,
    borderColor: colors.primary,
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: spacing.medium,
    marginTop: spacing.large,
    alignSelf: 'center',
    paddingHorizontal: spacing.large,
  },
  addCardText: {
    color: colors.primary,
    ...typography.body,
    fontSize: 16,
  },
  doneButton: {
    backgroundColor: colors.primary,
    padding: spacing.medium,
    borderRadius: 20,
    alignItems: 'center',
    marginTop: spacing.large,
  },
  doneButtonText: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default SelectCardScreen;
