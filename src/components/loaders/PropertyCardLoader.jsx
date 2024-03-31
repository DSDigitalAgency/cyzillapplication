import { View, Text } from "react-native";
import React from "react";

const PropertyCardLoader = () => {
  return (
    <View className="w-[350] h-48 bg-white rounded-lg flex-row overflow-hidden mb-3">
      <View className="w-1/3 overflow-hidden bg-slate-200"></View>
      <View className="p-4">
        <View className="bg-slate-200 w-48 h-6 mb-2" />
        <View className="bg-slate-200 w-48 h-6 mb-2" />
        <View className="bg-slate-200 w-48 h-6 mb-2" />
        <View className="bg-slate-200 w-48 h-6 mb-2" />
        <View className="bg-slate-200 w-48 h-6 mb-2" />
      </View>
    </View>
  );
};

export default PropertyCardLoader;
