import { View, Text } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Menu from "../../screens/Menu";
import About from "../../screens/About";
import FairUse from "../../screens/FairUse";
import PrivacyPolicy from "../../screens/PrivacyPolicy";
import Contact from "../../screens/Contact";
import Faq from "../../screens/Faq";
import Saved from "../../screens/Saved";
import Profile from "../../screens/Profile";
import TremsOfServices from "../../screens/TermsOfServices";
import Login from "../../screens/Login";
import SignUp from "../../screens/SignUp";

const MenuNavigation = () => {
  isAndroid = true;
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="MenuScreen"
        component={Menu}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Saved" component={Saved} />
      <Stack.Screen name="FAQ's" component={Faq} />
      <Stack.Screen name="Terms Of Services" component={TremsOfServices} />
      <Stack.Screen name="Privacy Policy" component={PrivacyPolicy} />
      <Stack.Screen name="Fair Use" component={FairUse} />
      <Stack.Screen name="Contact" component={Contact} />
      <Stack.Screen name="About" component={About} />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUp}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default MenuNavigation;
