import React from "react";
import { StyleSheet, Text, View } from "react-native";
import HomeScreen from "./screens/HomeScreen";
import DetailsScreen from "./screens/DetailsScreen";
import ScheduleScreen from "./screens/ScheduleScreen";
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

HomeScreen.navigationOptions = () => ({
  title: "RNCONF HOME"
});

HomeScreen.navigationOptions = () => ({
  headerShown: false
});

ScheduleScreen.navigationOptions = () => ({
  headerLeft: () => null,
  gestureEnabled: false,
});

const AppNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    Schedule: ScheduleScreen,
    Details: DetailsScreen
  },
  {
    initialRouteName: "Home"
  }
);

export default createAppContainer(AppNavigator);
