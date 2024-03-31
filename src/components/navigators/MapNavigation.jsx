import { View, Text } from "react-native";
import React from "react";
import {
  TransitionPresets,
  createStackNavigator,
} from "@react-navigation/stack";
import Map from "../../screens/Map";
import PropertyDetails from "../../screens/PropertyDetails";

const MapNavigation = () => {
  isAndroid = true;
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="MapScreen" component={Map} />
      <Stack.Screen name="PropertyDetails" component={PropertyDetails} />
    </Stack.Navigator>
  );
};

export default MapNavigation;
