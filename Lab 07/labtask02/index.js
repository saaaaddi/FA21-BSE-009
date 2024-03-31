import {AppRegistry} from 'react-native';
import App from './App'; // Assuming your root component is named 'App'
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
