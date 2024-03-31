import {
  View,
  ImageBackground,
  Text,
  TouchableOpacity,
  Linking,
} from "react-native";
import React from "react";

const BecomePartnerCard = () => {
  const site = "https://cyzill.com/";

  const listingpressed = () => {
    Linking.openURL(site);
  };

  return (
    <View className="flex-1 justify-center w-[350] h-48 rounded-lg overflow-hidden mt-4">
      <ImageBackground
        source={require("../../../assets/images/bgLead.jpg")}
        resizeMode="cover"
      >
        <View className="h-48 flex justify-around items-center">
          <View className="bg-black/25 rounded-lg p-1">
            <Text className="text-lg text-white">
              List your Property on Cyzill Now
            </Text>
          </View>
          <View>
            <TouchableOpacity
              onPress={listingpressed}
              className="p-2 bg-sky-400 rounded-xl shadow-md"
            >
              <Text>Start Listing</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default BecomePartnerCard;
