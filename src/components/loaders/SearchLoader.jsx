import { View, Text } from "react-native";
import React from "react";
import PropertyCardLoader from "./PropertyCardLoader";

const SearchLoader = () => {
  return (
    <View>
      <PropertyCardLoader />
      <PropertyCardLoader />
      <PropertyCardLoader />
      <PropertyCardLoader />
    </View>
  );
};

export default SearchLoader;
