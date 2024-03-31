import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import React from "react";
import { MaterialIcons } from "@expo/vector-icons";
import Header from "../components/common/Header";
import { useSelector } from "react-redux";

const Menu = ({ navigation }) => {
  const currentUser = useSelector((state) => state.user.currentUser);
  const ProfileDetailsPress = () => {
    if (currentUser) {
      navigation.navigate("Profile");
    } else {
      navigation.navigate("Login");
    }
  };

  const SavedPress = () => {
    if (currentUser) {
      navigation.navigate("Saved");
    } else {
      navigation.navigate("Login");
    }
  };

  const FaqPress = () => {
    navigation.navigate("FAQ's");
  };

  const TermsofServicesPress = () => {
    navigation.navigate("Terms Of Services");
  };

  const PrivacyPolicyPress = () => {
    navigation.navigate("Privacy Policy");
  };

  const FairUsePress = () => {
    navigation.navigate("Fair Use");
  };

  const ContactUsPress = () => {
    navigation.navigate("Contact");
  };

  const AboutUsPress = () => {
    navigation.navigate("About");
  };

  return (
    <ScrollView className="flex-1 bg-sky-100">
      <Header navigation={navigation} />
      <View className="flex-1 my-1 p-2">
        <View className="rounded-2xl my-2 p-2 border-2 border-gray-400">
          <TouchableOpacity
            onPress={ProfileDetailsPress}
            className="flex-row items-center justify-between rounded-2xl"
          >
            <View className="flex-row items-center">
              <MaterialIcons name="person" size={24} />
              <Text className=" text-lg ml-2">Profile Details</Text>
            </View>
            <MaterialIcons name="chevron-right" size={24} />
          </TouchableOpacity>
        </View>
        <View className="rounded-2xl my-2 p-2 border-2 border-gray-400">
          <TouchableOpacity
            onPress={SavedPress}
            className="flex-row items-center justify-between rounded-2xl"
          >
            <View className="flex-row items-center">
              <MaterialIcons name="favorite" size={24} />
              <Text className=" text-lg ml-2">Saved</Text>
            </View>
            <MaterialIcons name="chevron-right" size={24} />
          </TouchableOpacity>
        </View>
        <View className="rounded-2xl my-2 p-2 border-2 border-gray-400">
          <TouchableOpacity
            onPress={FaqPress}
            className="flex-row items-center justify-between rounded-2xl"
          >
            <View className="flex-row items-center">
              <MaterialIcons name="forum" size={24} />
              <Text className=" text-lg ml-2">FAQ's</Text>
            </View>
            <MaterialIcons name="chevron-right" size={24} />
          </TouchableOpacity>
        </View>
        <View className="rounded-2xl my-2 p-2 border-2 border-gray-400">
          <TouchableOpacity
            onPress={TermsofServicesPress}
            className="flex-row items-center justify-between rounded-2xl"
          >
            <View className="flex-row items-center">
              <MaterialIcons name="privacy-tip" size={24} />
              <Text className=" text-lg ml-2">Terms of Services</Text>
            </View>
            <MaterialIcons name="chevron-right" size={24} />
          </TouchableOpacity>
        </View>
        <View className="rounded-2xl my-2 p-2 border-2 border-gray-400">
          <TouchableOpacity
            onPress={PrivacyPolicyPress}
            className="flex-row items-center justify-between rounded-2xl"
          >
            <View className="flex-row items-center">
              <MaterialIcons name="privacy-tip" size={24} />
              <Text className="text-lg ml-2">Privacy Policy</Text>
            </View>
            <MaterialIcons name="chevron-right" size={24} />
          </TouchableOpacity>
        </View>
        <View className="rounded-2xl my-2 p-2 border-2 border-gray-400">
          <TouchableOpacity
            onPress={FairUsePress}
            className="flex-row items-center justify-between rounded-2xl"
          >
            <View className="flex-row items-center">
              <MaterialIcons name="privacy-tip" size={24} />
              <Text className="text-lg ml-2">Fair Use</Text>
            </View>
            <MaterialIcons name="chevron-right" size={24} />
          </TouchableOpacity>
        </View>
        <View className="rounded-2xl my-2 p-2 border-2 border-gray-400">
          <TouchableOpacity
            onPress={ContactUsPress}
            className="flex-row items-center justify-between rounded-2xl"
          >
            <View className="flex-row items-center">
              <MaterialIcons name="contact-phone" size={24} />
              <Text className="text-lg ml-2">Contact Us</Text>
            </View>
            <MaterialIcons name="chevron-right" size={24} />
          </TouchableOpacity>
        </View>
        <View className="rounded-2xl my-2 p-2 border-2 border-gray-400">
          <TouchableOpacity
            onPress={AboutUsPress}
            className="flex-row items-center justify-between rounded-2xl"
          >
            <View className="flex-row items-center">
              <MaterialIcons name="info" size={24} />
              <Text className="text-lg ml-2">About Us</Text>
            </View>
            <MaterialIcons name="chevron-right" size={24} />
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default Menu;
