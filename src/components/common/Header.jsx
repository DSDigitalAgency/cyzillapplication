import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { useSelector } from "react-redux";

const Header = ({ navigation }) => {
  const currentUser = useSelector((state) => state.user.currentUser);

  const profilePress = () => {
    if (currentUser) {
      // User is logged in, navigate to the profile screen
      navigation.navigate("Profile");
    } else {
      // User is not logged in, navigate to the login screen
      navigation.navigate("Login");
    }
  };

  return (
    <View className="flex-row items-center justify-between p-4">
      <View>
        <Text className="text-lg font-bold">Welcome to Cyzill</Text>
      </View>
      <View>
        <TouchableOpacity onPress={profilePress}>
          {currentUser ? (
            // User is logged in, show the user's photo
            <Image
              source={{ uri: currentUser.photo }}
              style={{ width: 48, height: 48, borderRadius: 24 }}
            />
          ) : (
            // User is not logged in, show the default photo
            <Image
              source={require("../../../assets/images/defaultuser.png")}
              style={{ width: 48, height: 48 }}
            />
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;
