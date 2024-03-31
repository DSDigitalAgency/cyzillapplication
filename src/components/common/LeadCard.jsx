import React, { useState } from "react";
import { View, Text, TextInput, Button, ImageBackground } from "react-native";

const LeadCard = () => {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleNameChange = (text) => {
    setName(text);
  };

  const handlePhoneNumberChange = (text) => {
    setPhoneNumber(text);
  };

  const handleSubmit = () => {
    // Handle submission logic here
    console.log("Name:", name);
    console.log("Phone Number:", phoneNumber);

    setName("");
    setPhoneNumber("");
  };

  return (
    <View className="flex-1 justify-center w-[350] h-48 rounded-lg overflow-hidden">
      <ImageBackground
        source={require("../../../assets/images/bgLead.jpg")}
        resizeMode="cover"
      >
        <View className="p-5">
          <Text className="text-xl font-bold mb-3">
            Get Best deals on Properties
          </Text>
          <TextInput
            className="h-10 border border-gray-700 mb-2 px-2 rounded text-white"
            placeholder="Name"
            onChangeText={handleNameChange}
            value={name}
          />
          <TextInput
            className="h-10 border border-gray-700 mb-2 px-2 rounded text-white"
            placeholder="Phone Number"
            onChangeText={handlePhoneNumberChange}
            value={phoneNumber}
            keyboardType="phone-pad"
          />
          <Button title="Get Best Deals" onPress={handleSubmit} />
        </View>
      </ImageBackground>
    </View>
  );
};

export default LeadCard;
