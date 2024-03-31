import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Search from "../../screens/Search";

import { MaterialIcons } from "@expo/vector-icons";
import HomeNavigation from "./HomeNavigation";
import MapNavigation from "./MapNavigation";
import MenuNavigation from "./MenuNavigation";
import SearchNavigation from "./SearchNavigation";

const TabNavigation = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: { backgroundColor: "#b8d7f2" },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeNavigation}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="home" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchNavigation}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="search" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Map"
        component={MapNavigation}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="map" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="More"
        component={MenuNavigation}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="menu" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigation;
