import React, { useState , useEffect} from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, SafeAreaView, Image } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { colors, typography, spacing } from '../theme/theme';
import Header from '../components/Header';

const AddAddressScreen = ({ navigation }) => {
  const [addressAlias, setAddressAlias] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [selectedArea, setSelectedArea] = useState('');
  const [streetName, setStreetName] = useState('');
  const [houseNumber, setHouseNumber] = useState('');
  const [label, setLabel] = useState('Home');

  const areasInAbuja = [
    "Asokoro",
    "Garki",
    "Gwarinpa",
    "Jabi",
    "Kubwa",
    "Lugbe",
    "Maitama",
    "Utako",
    "Wuse",
    // Add more areas as needed
  ];

  const handleSave = () => {
    // Handle save logic here
    navigation.goBack();
  };
  
  useEffect(() => {
    navigation.getParent()?.setOptions({
      tabBarStyle: {
        display: 'none'
      }
    });
    return () => navigation.getParent()?.setOptions({
      tabBarStyle: undefined
    });
  }, [navigation]);


  return (
    <SafeAreaView style={styles.container}>
        <Header navigation={navigation} title="Address" />
      
      <Image source={require('../../assets/map_placeholder.png')} style={styles.mapPlaceholder} />

      <View style={styles.card}>
        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Address</Text>
          <View style={styles.inputWithIcon}>
            <Ionicons name="location-outline" size={20} color={colors.black} style={styles.inputIcon} />
            <TextInput
              style={styles.input}
              placeholder="Enter your address"
              value={addressAlias}
              onChangeText={setAddressAlias}
            />
          </View>
        </View>

        <View style={styles.row}>
          <View style={[styles.inputContainer, styles.flex]}>
            <Text style={styles.inputLabel}>Street</Text>
            <View style={styles.inputWithIcon}>
              <Ionicons name="business-outline" size={20} color={colors.black} style={styles.inputIcon} />
              <TextInput
                style={styles.input}
                placeholder="Enter street name"
                value={streetName}
                onChangeText={setStreetName}
              />
            </View>
          </View>
          <View style={[styles.inputContainer, styles.flex]}>
            <Text style={styles.inputLabel}>Post Code</Text>
            <View style={styles.inputWithIcon}>
              <Ionicons name="call-outline" size={20} color={colors.black} style={styles.inputIcon} />
              <TextInput
                style={styles.input}
                placeholder="Enter post code"
                value={phoneNumber}
                onChangeText={setPhoneNumber}
              />
            </View>
          </View>
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Apartment</Text>
          <View style={styles.inputWithIcon}>
            <Ionicons name="home-outline" size={20} color={colors.black} style={styles.inputIcon} />
            <TextInput
              style={styles.input}
              placeholder="Enter apartment number"
              value={houseNumber}
              onChangeText={setHouseNumber}
            />
          </View>
        </View>

        <Text style={styles.sectionTitle}>Label as</Text>
        <View style={styles.labelContainer}>
          <TouchableOpacity
            style={[styles.labelButton, label === 'Home' && styles.selectedLabelButton]}
            onPress={() => setLabel('Home')}
          >
            <Text style={[styles.labelButtonText, label === 'Home' && styles.selectedLabelButtonText]}>Home</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.labelButton, label === 'Work' && styles.selectedLabelButton]}
            onPress={() => setLabel('Work')}
          >
            <Text style={[styles.labelButtonText, label === 'Work' && styles.selectedLabelButtonText]}>Work</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.labelButton, label === 'Other' && styles.selectedLabelButton]}
            onPress={() => setLabel('Other')}
          >
            <Text style={[styles.labelButtonText, label === 'Other' && styles.selectedLabelButtonText]}>Other</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
          <Text style={styles.saveButtonText}>Save Location</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: spacing.medium,
    backgroundColor: '#FFF',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
  
    justifyContent: 'space-between',
    zIndex: 100,
    padding:30
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

   
  },
  backIcon: {
    transform: [{ rotate: '-45deg' }],
  },
  headerTitle: {
    ...typography.header,
    color: colors.black,
    fontSize: 24,
    flex: 1,
    textAlign: 'center',
    marginRight: 40,
  },
  mapPlaceholder: {
    width: '100%',
    height: 550,
    borderRadius: 10,
    marginBottom: -150,
    marginTop : -150,
  },
  card: {
    backgroundColor: '#FFF',
    borderRadius: 25,
    padding: spacing.medium,

    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  sectionTitle: {
    ...typography.header,
    fontSize: 16,
    marginBottom: spacing.small,
  },
  inputContainer: {
    marginBottom: spacing.medium,
  },
  inputLabel: {
    ...typography.header,
    fontSize: 16,
    color: colors.black,
    marginBottom: spacing.small,
  },
  inputWithIcon: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f0f5f5', // Very light blue
    padding: spacing.small,
    borderRadius: 10,
  },
  inputIcon: {
    marginRight: spacing.small,
  },
  input: {
    flex: 1,
    paddingVertical: spacing.small,
    paddingHorizontal: spacing.small,
    fontSize: 16,
    backgroundColor: '#f0f5f5',
    borderRadius: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  flex: {
    flex: 1,
    marginRight: spacing.small,
  },
  labelContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: spacing.large,
  },
  labelButton: {
    flex: 1,
    padding: spacing.medium,
    borderRadius: 20, // Rounded
    borderWidth: 1,
    borderColor: '#ccc',
    alignItems: 'center',
    marginHorizontal: spacing.small,
  },
  selectedLabelButton: {
    backgroundColor: colors.primary,
    borderColor: colors.primary,
  },
  labelButtonText: {
    color: '#000',
    fontWeight: 'bold',
  },
  selectedLabelButtonText: {
    color: '#FFF',
  },
  saveButton: {
    backgroundColor: colors.primary,
    padding: spacing.medium,
    borderRadius: 20, // Rounded
    alignItems: 'center',
  },
  saveButtonText: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default AddAddressScreen;
