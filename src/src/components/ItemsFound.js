import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { colors } from '../theme/theme'; // Update with your actual path
import CardItem from '../components/CategoryCard'; // Update with the actual path to CardItem

const ItemsFound = ({ data, onCardPress, onFavoritePress }) => {
  return (
    <FlatList
      data={data}
      renderItem={({ item, index }) => (
        <CardItem
          item={item}
          index={index}
          onCardPress={onCardPress}
          onFavoritePress={onFavoritePress}
        />
      )}
      keyExtractor={(item) => item.name}
      numColumns={2}
      columnWrapperStyle={styles.row}
      showsVerticalScrollIndicator={false}
    />
  );
};

const styles = StyleSheet.create({
  row: {
    justifyContent: 'space-between',
  },
});

export default ItemsFound;
