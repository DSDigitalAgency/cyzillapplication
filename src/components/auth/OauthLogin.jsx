import React from "react";
import { View, TouchableOpacity, Image } from "react-native";

const OauthLogin = () => {
  const handleLoginGoogle = async () => {
    console.log("Google Login Pressed");
  };

  const handleLoginFacebook = () => {
    console.log("FaceBook Login Pressed");
  };

  const handleLoginApple = () => {
    console.log("Apple Login Pressed");
  };

  return (
    <View className="flex-row justify-between my-3">
      <TouchableOpacity
        onPress={handleLoginGoogle}
        className="flex-1 justify-center items-center py-3 rounded-md border-x border-y border-gray-500 mx-1"
      >
        <Image
          source={require("../../../assets/images/googleicon.png")}
          className="w-5 h-5"
        />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={handleLoginFacebook}
        className="flex-1 justify-center items-center px-3 rounded-md border-x border-y border-gray-500 mx-1"
      >
        <Image
          source={require("../../../assets/images/facebookicon.png")}
          className="w-5 h-5"
        />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={handleLoginApple}
        className="flex-1 justify-center items-center px-3 rounded-md border-x border-y border-gray-500 mx-1"
      >
        <Image
          source={require("../../../assets/images/appleicon.png")}
          className="w-5 h-5"
        />
      </TouchableOpacity>
    </View>
  );
};

export default OauthLogin;
