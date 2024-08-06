import 'react-native-gesture-handler';
import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Toast from 'react-native-toast-message';

import BottomTabNavigator from './src/navigation/BottomTabNavigator';
import AuthStack from './src/navigation/AuthStack'; // Import your AuthStack

const Stack = createStackNavigator();

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Simulating authentication check with a timeout
    const checkAuth = async () => {
      setTimeout(() => {
        setIsAuthenticated(true); // Set this to true after successful login
      }, 2000); // Display splash screen for 2 seconds
    };

    checkAuth();
  }, []);

  return (
    <>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          {isAuthenticated ? (
            <Stack.Screen name="Main" component={BottomTabNavigator} />
            
          ) : (
            <>
              <Stack.Screen name="Auth" component={AuthStack} />
              <Stack.Screen name="Main" component={BottomTabNavigator} />
            </>
          )}
        </Stack.Navigator>
      </NavigationContainer>
      <Toast ref={(ref) => Toast.setRef(ref)} />
    </>
  );
};

export default App;
