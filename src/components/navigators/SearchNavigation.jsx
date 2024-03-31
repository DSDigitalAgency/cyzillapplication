import { View, Text } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Search from "../../screens/Search";
import PropertyDetails from "../../screens/PropertyDetails";

const SearchNavigation = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator
      initialRouteName="Searcg Screen"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Search Screen" component={Search} />
      <Stack.Screen name="PropertyDetails" component={PropertyDetails} />
    </Stack.Navigator>
  );
};

export default SearchNavigation;
