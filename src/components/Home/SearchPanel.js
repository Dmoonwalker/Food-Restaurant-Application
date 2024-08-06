import React from 'react';
import { StyleSheet, View, TextInput, TouchableOpacity, Text } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'; // Updated icon library import
import { colors, spacing } from '../../theme/theme';

const SearchPanel = ({ searchQuery, setSearchQuery, onSearchPress, onFilterPress }) => {
  return (
    <View style={styles.searchPanelContainer}>
      <View style={styles.searchBar}>
        <Ionicons name="search" size={20} color="gray" />
        <TextInput
          style={styles.searchInput}
          value={searchQuery}
          onChangeText={setSearchQuery}
          placeholder="Search for Lunch"
          placeholderTextColor="gray"
        />
      </View>
      <TouchableOpacity style={styles.searchButton} onPress={onSearchPress}>
        <Ionicons name="md-send" size={20} color="gray" />
      </TouchableOpacity>
      {onFilterPress && (
        <TouchableOpacity style={styles.filterButton} onPress={onFilterPress}>
          <Ionicons name="filter" size={20} color="gray" />
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  searchPanelContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: spacing.large,
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    height: 60,
    paddingHorizontal: 10,
    flex: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 3,
  },
  searchInput: {
    marginLeft: 10,
    fontSize: 16,
    color: 'gray',
    flex: 1,
  },
  searchButton: {
    marginLeft: 10,
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    height: 60,
    width: 60,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 3,
  },
  filterButton: {
    marginLeft: 10,
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    height: 60,
    width: 60,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 3,
  },
});

export default SearchPanel;
