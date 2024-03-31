import {
  Image,
  SafeAreaView,
  Text,
  View,
  TouchableOpacity,
  Linking,
} from "react-native";
import React from "react";
import { MaterialIcons } from "@expo/vector-icons";

const Contact = () => {
  const phoneNumber = "+911234567890";
  const email = "support@cyzill.com";
  const mapsUrl = "https://maps.app.goo.gl/E1wba9B6khro1oKY7";

  const handleCall = () => {
    Linking.openURL(`tel:${phoneNumber}`);
  };
  const handleEmail = () => {
    Linking.openURL(`mailto:${email}`);
  };
  const handleLocation = () => {
    Linking.openURL(mapsUrl);
  };

  return (
    <SafeAreaView className="items-center bg-sky-100 flex-1">
      <View className="flex justify-center items-center w-4/5">
        <View>
          <Image source={require("../../assets/images/Logo.png")} />
        </View>
        <View>
          <Text className="text-2xl font-bold">Contact</Text>
          <View className="border-b-2 border-black" />
        </View>
        <View className="my-3">
          <Text className="text-lg">We are here to help you.</Text>
        </View>
        <View className="flex-row w-full my-2">
          <TouchableOpacity onPress={handleCall} className="mr-4">
            <MaterialIcons name="phone" size={36} color="black" />
          </TouchableOpacity>
          <View>
            <Text className="font-bold">Phone</Text>
            <TouchableOpacity onPress={handleCall}>
              <Text className="text-sky-600">{phoneNumber}</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View className="flex-row w-full my-2">
          <TouchableOpacity onPress={handleCall} className="mr-4">
            <MaterialIcons name="mail" size={36} color="black" />
          </TouchableOpacity>
          <View>
            <Text className="font-bold">Email</Text>
            <TouchableOpacity onPress={handleEmail}>
              <Text className="text-sky-600">{email}</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View className="flex-row w-full my-2">
          <TouchableOpacity onPress={handleCall} className="mr-4">
            <MaterialIcons name="location-pin" size={36} color="black" />
          </TouchableOpacity>
          <View>
            <Text className="font-bold">Address</Text>
            <TouchableOpacity onPress={handleLocation}>
              <Text className="text-sky-600">
                Hyderabad, telangana - 500055
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Contact;
