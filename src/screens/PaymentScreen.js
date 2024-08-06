import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';
import { colors, typography, spacing } from '../theme/theme';
import Ionicons from 'react-native-vector-icons/Ionicons';

const PaymentScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <Ionicons name="chevron-back-outline" size={24} color={colors.black} style={styles.backIcon} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Payment</Text>
      </View>
      <TouchableOpacity style={styles.optionButton} onPress={() => navigation.navigate('ChooseAddress')}>
        <Text style={styles.optionText}>Choose Address</Text>
        <Ionicons name="chevron-forward-outline" size={24} color={colors.black} style={styles.arrowIcon} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.optionButton} onPress={() => navigation.navigate('PaymentMethod')}>
        <Text style={styles.optionText}>Payment Method</Text>
        <Ionicons name="chevron-forward-outline" size={24} color={colors.black} style={styles.arrowIcon} />
      </TouchableOpacity>
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
    width: 50,
    height: 50,
    backgroundColor: '#FFF',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    transform: [{ rotate: '45deg' }],
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 3,
    margin: 10,
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
  optionButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: spacing.medium,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    marginBottom: spacing.medium,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    height: 65,
    elevation: 5,
    marginHorizontal: spacing.small,
  },
  optionText: {
    ...typography.body,
    color: '#000',
    fontSize: 18,
  },
  arrowIcon: {
    fontSize: 24,
  },
});

export default PaymentScreen;
