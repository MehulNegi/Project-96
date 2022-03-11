import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';

import HomeScreen from './screens/HomeScreen';
import BuzzerScreen from './screens/BuzzerScreen';
import TeamScreen from './screens/TeamScreen';
import ResultScreen from './screens/ResultScreen';

export default function App() {
  return (
    <View>
      <AppContainer/>
    </View>
  );
}

var AppNavigator = createSwitchNavigator({
  HomeScreen: HomeScreen,
  TeamScreen: TeamScreen,
  BuzzerScreen: BuzzerScreen,
  ResultScreen: ResultScreen
})

const AppContainer = createAppContainer(AppNavigator);