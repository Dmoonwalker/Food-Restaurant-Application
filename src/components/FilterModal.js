import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Modal, TouchableWithoutFeedback } from 'react-native';
import Slider from '@react-native-community/slider';
import { colors, typography, spacing } from '../theme/theme';  // Ensure paths are correct

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
                  minimumTrackTintColor={colors.primary}
                  maximumTrackTintColor={colors.lightGray}
                  thumbTintColor={colors.primary}
                />
                <Text style={styles.priceLabel}>${maxPrice}</Text>
                <Slider
                  style={styles.slider}
                  minimumValue={20}
                  maximumValue={115}
                  step={1}
                  value={maxPrice}
                  onValueChange={setMaxPrice}
                  minimumTrackTintColor={colors.primary}
                  maximumTrackTintColor={colors.lightGray}
                  thumbTintColor={colors.primary}
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
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: colors.background,
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
  },
  slider: {
    flex: 1,
    marginHorizontal: spacing.small,
  },
  categoryText: {
    ...typography.subHeader,
  },
  categories: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: spacing.large,
  },
  categoryButton: {
    backgroundColor: colors.lightGray,
    paddingVertical: spacing.small,
    paddingHorizontal: spacing.medium,
    borderRadius: 5,
    marginBottom: spacing.small,
  },
  selectedCategoryButton: {
    backgroundColor: colors.primary,
  },
  categoryButtonText: {
    ...typography.body,
    color: colors.text,
  },
  selectedCategoryButtonText: {
    color: colors.onPrimary,
  },
  modalButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  clearButton: {
    flex: 1,
    backgroundColor: colors.background,
    borderWidth: 1,
    borderColor: colors.primary,
    padding: spacing.medium,
    borderRadius: 5,
    alignItems: 'center',
    marginRight: spacing.small,
  },
  clearButtonText: {
    ...typography.button,
    color: colors.primary,
  },
  applyButton: {
    flex: 1,
    backgroundColor: colors.primary,
    padding: spacing.medium,
    borderRadius: 5,
    alignItems: 'center',
    marginLeft: spacing.small,
  },
  applyButtonText: {
    ...typography.button,
    color: colors.onPrimary,
  },
});

export default FilterModal;
