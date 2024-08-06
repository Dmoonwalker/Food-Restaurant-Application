// index.js
import 'react-native-gesture-handler'; // Add this line at the very top
import { AppRegistry } from 'react-native';
import App from './App'; // Adjust the import path as necessary
import { name as appName } from './app.json';

AppRegistry.registerComponent(appName, () => App);
