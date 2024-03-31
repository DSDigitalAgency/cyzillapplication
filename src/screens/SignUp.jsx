import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import SignUpSection from "../components/auth/SignupSection";

const SignUp = ({ navigation }) => {
  return (
    <SafeAreaView className="flex-1">
      <SignUpSection navigation={navigation} />
    </SafeAreaView>
  );
};

export default SignUp;
