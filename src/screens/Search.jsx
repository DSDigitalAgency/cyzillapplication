import React, { useState, useEffect } from "react";
import { View, FlatList, Text } from "react-native";
import SearchBar from "../components/search/SearchBar";
import BASE_URL from "../config";
import PropertyCard from "../components/property/PropertyCard";
import SearchLoader from "../components/loaders/SearchLoader";

const Search = ({ navigation }) => {
  const apiUrl = "https://api.cyzill.com/api/property/properties/search";
  const [propertyData, setPropertyData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchProperties();
  }, [searchQuery]);

  const fetchProperties = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(
        `${apiUrl}?keyword=${encodeURIComponent(searchQuery)}`
      );
      if (!response.ok) {
        throw new Error(
          `Network response was not ok. Status: ${response.status}`
        );
      }
      const responseData = await response.json();

      setPropertyData(responseData);

      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      setError(`Error fetching properties. ${error.message}`);
      console.error("Error fetching data:", error);
    }
  };

  const renderPropertyCard = ({ item }) => (
    <PropertyCard key={item.id} property={item} navigation={navigation} />
  );

  const handleSearchChange = (query) => {
    setSearchQuery(query);
  };

  return (
    <View className="bg-sky-100 flex-1 px-2">
      <SearchBar onSearchChange={handleSearchChange} />
      <FlatList
        showsVerticalScrollIndicator={false}
        className="flex-1"
        data={propertyData}
        keyExtractor={(item, index) =>
          item.id ? item.id.toString() : index.toString()
        }
        renderItem={renderPropertyCard}
        ListEmptyComponent={() =>
          isLoading ? (
            <SearchLoader />
          ) : (
            <View className="flex-1 justify-center items-center">
              <Text>No properties found</Text>
            </View>
          )
        }
      />
    </View>
  );
};

export default Search;
