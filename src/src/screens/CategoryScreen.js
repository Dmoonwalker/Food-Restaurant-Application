// CategoryScreen.js
import React, { useState, useCallback, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList, SafeAreaView } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { colors, spacing } from '../theme/theme'; // Update with your actual path
import Icon from 'react-native-vector-icons/MaterialIcons'; // Make sure to install this package
import CategoryCard from '../components/CategoryCard'; // Import the new CategoryCard component
import Header from '../components/Header';
const CategoryScreen = ({ route }) => {
  const { category, items } = route.params; // Extract category and items from route params
  const navigation = useNavigation();
  const [data, setData] = useState(items);

  useEffect(() => {
    navigation.getParent()?.setOptions({
      tabBarStyle: {
        display: 'none',
      },
    });
    return () => navigation.getParent()?.setOptions({
      tabBarStyle: undefined,
    });
  }, [navigation]);

  const handleFavoritePress = useCallback((index) => {
    const newData = [...data];
    newData[index].isFavorite = !newData[index].isFavorite;
    setData(newData);
  }, [data]);

  const handleCardPress = useCallback((item) => {
    navigation.navigate('FoodDetail', { item });
  }, [navigation]);

  const renderItem = ({ item, index }) => (
    <CategoryCard
      item={item}
      index={index}
      handleCardPress={handleCardPress}
      handleFavoritePress={handleFavoritePress}
    />
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.bodyContainer}>
        <Header navigation={navigation} title={category} />

          <FlatList
            data={data}
            renderItem={renderItem}
            keyExtractor={(item) => item.name}
            numColumns={2}
            columnWrapperStyle={styles.row}
            showsVerticalScrollIndicator={false}
            ListHeaderComponent={
              <View style={styles.catchPhraseContainer}>
                <Text style={styles.catchPhrase}>Dive into the World of {category} Delights! </Text>
              
              </View>
            }
          />
        </View>
        <TouchableOpacity style={styles.fab} onPress={() => console.log('Checkout Pressed')}>
          <Text style={styles.fabItemCount}>2</Text>
          <Text style={styles.fabText}>Items in your basket</Text>
          <Icon name="shopping-cart" size={24} color="white" style={styles.fabIcon} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.backgroundColor,
  },
  container: {
    flex: 1,
    padding: spacing.medium,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginVertical: 20,
  },
  backButton: {
    width: 50,
    height: 50,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    transform: [{ rotate: '45deg' }],
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 3,
    marginRight: 10,
  },
  backIcon: {
    transform: [{ rotate: '-45deg' }],
  },
  header: {
    fontSize: 24,
    color: colors.black,
    textAlign: 'center',
    flex: 1,
  },
  bodyContainer: {
    flex: 1,
  },
  catchPhraseContainer: {
    flexDirection: 'row',
    justifyContent : 'center',
    alignItems: 'center',
    marginBottom: 20,
    paddingHorizontal: 20,
  },
  catchPhrase: {
    fontSize: 20,
    color: colors.primary,
    fontWeight : 'bold'
  },
  categoryIcon: {
    marginRight: 10,
  },
  row: {
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  fab: {
    position: 'absolute',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: 50,
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
  },
});

export default CategoryScreen;
