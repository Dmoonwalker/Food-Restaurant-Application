import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SearchScreen from '../screens/SearchScreen'; // Import your SearchScreen component
import SearchResultScreen from '../screens/SearchResultsScreen';
const Stack = createStackNavigator();

const SearchStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
     
{/* 
      <Stack.Screen name="Search" component={SearchScreen} /> */}
      <Stack.Screen name="SearchResults" component={SearchResultScreen} />
    </Stack.Navigator>
  );
};

export default SearchStack;
