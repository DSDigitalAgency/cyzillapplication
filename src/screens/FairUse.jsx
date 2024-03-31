import { View, Text, Image, ScrollView } from "react-native";
import React from "react";

const FairUse = () => {
  return (
    <ScrollView className="flex-1 bg-sky-100">
      <View className="flex-1 justify-center items-center p-5">
        <Image
          source={require("../../assets/images/Logo.png")}
          className="w-28 h-28"
        />
        <Text className="text-lg font-bold text-center">Fair Use</Text>
        <Text className="text-xs text-center">
          At Cyzill, we are dedicated to helping you find the perfect home.
          Whether you are buying, selling, or renting, our platform is designed
          to make the real estate process seamless and enjoyable.
        </Text>
        <Text className="text-xl font-bold">Our Mission</Text>
        <Text className="text-xs text-center">
          Our mission is to provide a comprehensive and user-friendly platform
          that connects buyers, sellers, and renters. We strive to deliver
          accurate and up-to-date property information, empowering users to make
          informed decisions.
        </Text>
        <Text className="text-xl font-bold">Why Choose Us?</Text>
        <Text className="text-xs text-center">
          - Extensive Property Listings: Explore a wide range of properties
          based on your preferences.
          {"\n"}- User-Friendly Interface: Our app is designed with simplicity
          and ease of use in mind.
          {"\n"}- Reliable Information: We ensure that property details are
          accurate and updated regularly.
          {"\n"}- Dedicated Support: Our team is here to assist you throughout
          your real estate journey.
        </Text>
      </View>
    </ScrollView>
  );
};

export default FairUse;
