// ./src/components/Home/FilterModal.js
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Modal, TouchableWithoutFeedback } from 'react-native';
import Slider from '@react-native-community/slider';
import { colors, typography, spacing } from '../theme/theme';

const FilterModal = ({ isVisible, onClose, minPrice, setMinPrice, maxPrice, setMaxPrice }) => {
  return (
    <Modal
      visible={isVisible}
      transparent
      animationType="slide"
      onRequestClose={onClose}
    >
      <TouchableWithoutFeedback onPress={onClose}>
        <View style={styles.modalContainer}>
          <TouchableWithoutFeedback>
            <View style={styles.modalContent}>
              <Text style={styles.filterTitle}>Filters</Text>
              <Text style={styles.priceRangeText}>Price Range</Text>
              <View style={styles.sliderContainer}>
                <Text style={styles.priceLabel}>${minPrice}</Text>
                <Slider
                  style={styles.slider}
                  minimumValue={20}
                  maximumValue={115}
                  step={1}
                  value={minPrice}
                  onValueChange={setMinPrice}
                  minimumTrackTintColor="#FF5A5F"
                  maximumTrackTintColor="#000000"
                  thumbTintColor="#FF5A5F"
                />
                <Text style={styles.priceLabel}>${maxPrice}</Text>
                <Slider
                  style={styles.slider}
                  minimumValue={20}
                  maximumValue={115}
                  step={1}
                  value={maxPrice}
                  onValueChange={setMaxPrice}
                  minimumTrackTintColor="#FF5A5F"
                  maximumTrackTintColor="#000000"
                  thumbTintColor="#FF5A5F"
                />
              </View>
              <Text style={styles.categoryText}>Category</Text>
              <View style={styles.categories}>
                <TouchableOpacity style={[styles.categoryButton, styles.selectedCategoryButton]}>
                  <Text style={[styles.categoryButtonText, styles.selectedCategoryButtonText]}>All</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.categoryButton}>
                  <Text style={styles.categoryButtonText}>Fast Food</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.categoryButton}>
                  <Text style={styles.categoryButtonText}>Drink</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.categoryButton}>
                  <Text style={styles.categoryButtonText}>Snacks</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.modalButtons}>
                <TouchableOpacity style={styles.clearButton} onPress={onClose}>
                  <Text style={styles.clearButtonText}>Clear All</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.applyButton} onPress={onClose}>
                  <Text style={styles.applyButtonText}>Apply</Text>
                </TouchableOpacity>
              </View>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background
  },
  modalContent: {
    backgroundColor: '#FFF',
    padding: spacing.large,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
  },
  filterTitle: {
    ...typography.header,
    textAlign: 'center',
    marginBottom: spacing.large,
  },
  priceRangeText: {
    ...typography.subHeader,
    marginBottom: spacing.small,
  },
  sliderContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: spacing.large,
  },
  priceLabel: {
    ...typography.body,
    textAlign: 'right',
  },
  slider: {
    flex: 1,
    marginHorizontal: spacing.small,
  },
  categoryText: {
    ...typography.subHeader,
    marginBottom: spacing.small,
  },
  categories: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: spacing.large,
  },
  categoryButton: {
    backgroundColor: '#F0F0F0',
    paddingVertical: spacing.small,
    paddingHorizontal: spacing.medium,
    borderRadius: 5,
    marginBottom: spacing.small,
  },
  selectedCategoryButton: {
    backgroundColor: '#FF5A5F',
  },
  categoryButtonText: {
    color: '#000',
  },
  selectedCategoryButtonText: {
    color: '#FFF',
  },
  modalButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  clearButton: {
    flex: 1,
    backgroundColor: '#FFF',
    borderWidth: 1,
    borderColor: '#FF5A5F',
    padding: spacing.medium,
    borderRadius: 5,
    alignItems: 'center',
    marginRight: spacing.small,
  },
  clearButtonText: {
    color: '#FF5A5F',
    fontWeight: 'bold',
  },
  applyButton: {
    flex: 1,
    backgroundColor: '#FF5A5F',
    padding: spacing.medium,
    borderRadius: 5,
    alignItems: 'center',
    marginLeft: spacing.small,
  },
  applyButtonText: {
    color: '#FFF',
    fontWeight: 'bold',
  },
});

export default FilterModal;
