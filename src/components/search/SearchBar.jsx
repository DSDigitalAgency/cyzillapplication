import React, { useState } from "react";
import { View, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

const SearchBar = ({ onSearchChange }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const clearSearch = () => {
    setSearchQuery("");
    onSearchChange(""); // Notify parent component that search query is cleared
  };

  const handleInputChange = (text) => {
    setSearchQuery(text);
    onSearchChange(text);
  };

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.input}
          placeholder="Search area you want to see"
          value={searchQuery}
          onChangeText={handleInputChange}
        />
        {searchQuery !== "" && (
          <TouchableOpacity style={styles.clearButton} onPress={clearSearch}>
            <MaterialIcons name="close" size={20} color="black" />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#D1D5DB",
    borderRadius: 10,
    flex: 1,
  },
  input: {
    flex: 1,
    height: 40,
    paddingHorizontal: 10,
  },
  clearButton: {
    marginRight: 5,
    padding: 5,
  },
});

export default SearchBar;
