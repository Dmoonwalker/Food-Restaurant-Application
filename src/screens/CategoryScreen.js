import React, { useState, useCallback, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList, SafeAreaView, Modal } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import CategoryCard from '../components/CategoryCard';
import Header from '../components/Header';
import { colors, spacing } from '../theme/theme';
import FoodDetailScreen from './FoodDetailScreen';

const CategoryScreen = ({ route, navigation }) => {
  const { category } = route.params;
  const [data, setData] = useState(route.params.items);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const dummyData = [
    {
      name: 'Pizza Margherita',
      image: require('../../assets/pizza.png'),
      title: 'Pizza Margherita',
      price: '15.99',
      rating: '4.5',
      isFavorite: false,
    },
    {
      name: 'Vegan Burger',
      image: require('../../assets/beef_burger.jpg'),
      title: 'Vegan Burger',
      price: '12.99',
      rating: '4.7',
      isFavorite: true,
    },
    {
      name: 'Caesar Salad',
      image: require('../../assets/cheese_sandwich.jpg'),
      title: 'Caesar Salad',
      price: '10.99',
      rating: '4.2',
      isFavorite: false,
    },
    {
      name: 'Chocolate Cake',
      image: require('../../assets/suya.jpg'),
      title: 'Chocolate Cake',
      price: '8.99',
      rating: '4.8',
      isFavorite: true,
    },
  ];

  useEffect(() => {
    navigation.getParent()?.setOptions({ tabBarStyle: { display: 'none' } });
    return () => navigation.getParent()?.setOptions({ tabBarStyle: undefined });
  }, [navigation]);

  const handleCardPress = useCallback((item) => {
    setSelectedItem(item);
    setIsModalVisible(true);
  }, []);

  const handleCloseModal = () => {
    setIsModalVisible(false);
    setSelectedItem(null);
  };

  const renderItem = ({ item, index }) => (
    <View style={styles.cardContainer}>
      <CategoryCard
        item={item}
        index={index}
        handleCardPress={handleCardPress}
      />
    </View>
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <Header navigation={navigation} title={category} />
          <FlatList
            data={dummyData}
            renderItem={renderItem}
            keyExtractor={(item) => item.name}
            numColumns={1}
            showsVerticalScrollIndicator={false}
            ListHeaderComponent={
              <View style={styles.catchPhraseContainer}>
                <Text style={styles.catchPhrase}>Dive into the World of {category} Delights!</Text>
              </View>
            }
          />
        </View>
        {selectedItem && (
          <Modal
            visible={isModalVisible}
            animationType="slide"
            transparent={true}
            onRequestClose={handleCloseModal}
          >
            <View style={styles.modalContent}>
              <FoodDetailScreen item={selectedItem} closeModal={handleCloseModal} navigation={navigation} />
            </View>
          </Modal>
        )}
        <View style={styles.bodyContainer}>
          <TouchableOpacity style={styles.fab} onPress={() => console.log('Checkout Pressed')}>
            <Text style={styles.fabItemCount}>2</Text>
            <Text style={styles.fabText}>Items in your basket</Text>
            <Icon name="shopping-cart" size={24} color="white" style={styles.fabIcon} />
          </TouchableOpacity>
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
  container: {
    flex: 1,
  },
  headerContainer: {
    paddingVertical: spacing.large,
    paddingHorizontal: spacing.medium,
    marginBottom: 70,
  },
  bodyContainer: {
    flex: 1,
    justifyContent: 'flex-end', // Ensure FAB is at the bottom
  },
  catchPhraseContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
  },
  catchPhrase: {
    fontSize: 20,
    color: colors.primary,
    fontWeight: 'bold',
  },
  cardContainer: {
    flex: 1,
    alignItems: 'center',
    marginVertical: spacing.small,
    width: '100%', // Ensures CategoryCard takes full width
  },
  fab: {
    position: 'absolute',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: 60,
    backgroundColor: colors.primary,
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
    bottom: 0,
    paddingHorizontal: 30,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    zIndex: 1000, // Ensure the FAB appears on top
  },
  fabText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    marginRight: 10,
  },
  fabIcon: {
    fontSize: 24,
  },
  fabItemCount: {
    borderRadius: 10,
    paddingHorizontal: 8,
    paddingVertical: 2,
    marginRight: 10,
    fontWeight: 'bold',
    fontSize: 16,
    borderColor: '#FFFFFF',
    borderWidth: 1,
    color: colors.white,
    backgroundColor: colors.primary, // Ensure visibility
  },
  modalContent: {
    flex: 1,
    backgroundColor: colors.white,
    marginTop: 10,
    marginLeft: 5,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    shadowColor: colors.black,
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 10,
  },
});

export default CategoryScreen;
