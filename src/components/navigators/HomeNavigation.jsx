import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../../screens/Home";
import PropertyDetails from "../../screens/PropertyDetails";

const HomeNavigation = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator
      initialRouteName="HomeScreen"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="HomeScreen" component={Home} />
      <Stack.Screen name="PropertyDetails" component={PropertyDetails} />
    </Stack.Navigator>
  );
};

export default HomeNavigation;
