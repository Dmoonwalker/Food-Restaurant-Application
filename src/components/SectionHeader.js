import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {colors} from '../theme/theme'
const SectionHeader = ({ title, icon }) => {
  return (
    <View style={styles.container}>
    
      <Text style={styles.title}>{title}</Text>
     
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    backgroundColor: 'red ',

  },
  iconContainer: {
    width: 24,
    height: 24,
    borderRadius: 12,
   
  
    alignItems: 'center',
    marginRight: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.text,
    paddingHorizontal: 20,
  },
  sectionIcon: {
    marginLeft: 10,
  },
});

export default SectionHeader;
