import React, { useState, useEffect } from "react";
import { SafeAreaView, View, Text, FlatList, ScrollView } from "react-native";
import Header from "../components/common/Header";
import Hero from "../components/common/Hero";
import BASE_URL from "../config";
import PropertyCard from "../components/property/PropertyCard";
import LeadCard from "../components/common/LeadCard";
import BecomePartnerCard from "../components/common/BecomePartnerCard";
import PropertyCardLoader from "../components/loaders/PropertyCardLoader";

const Home = ({ navigation }) => {
  const apiUrl = `${BASE_URL}/api/property/properties`;
  const [propertyData, setPropertyData] = useState([]);
  const [propertyRentData, setPropertyRentData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchProperties();
  }, []);

  const fetchProperties = async () => {
    try {
      const response = await fetch(apiUrl);
      if (!response.ok) {
        throw new Error(
          `Network response was not ok. Status: ${response.status}`
        );
      }
      const responseData = await response.json();

      if (!responseData.hasOwnProperty("properties")) {
        throw new Error(`'properties' key not found in API response`);
      }

      const propertiesData = responseData.properties;

      const propertiesForSale = propertiesData.filter(
        (property) => property.forDetails === "sell"
      );
      setPropertyData(propertiesForSale);

      const propertiesForRent = propertiesData.filter(
        (property) => property.forDetails === "rent"
      );
      setPropertyRentData(propertiesForRent);

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

  return (
    <SafeAreaView className="flex-1 bg-sky-100">
      <ScrollView>
        <Header navigation={navigation} />
        <Hero />
        <View style={{ flex: 1, marginTop: 10 }}>
          <Text
            style={{
              fontSize: 18,
              fontWeight: "bold",
              marginBottom: 10,
              marginLeft: 10,
            }}
          >
            Properties for Rent
          </Text>
          <FlatList
            horizontal
            className="mx-1 flex-1"
            data={propertyRentData}
            keyExtractor={(item, index) =>
              item.id ? item.id.toString() : index.toString()
            }
            renderItem={renderPropertyCard}
            ListEmptyComponent={() =>
              isLoading ? <PropertyCardLoader /> : null
            }
          />
        </View>
        <View style={{ flex: 1, marginVertical: 5 }}>
          <Text
            style={{
              fontSize: 18,
              fontWeight: "bold",
              marginBottom: 10,
              marginLeft: 10,
            }}
          >
            Properties for Sell
          </Text>
          <FlatList
            horizontal
            className="mx-1 flex-1"
            data={propertyData}
            keyExtractor={(item, index) =>
              item.id ? item.id.toString() : index.toString()
            }
            renderItem={renderPropertyCard}
            ListEmptyComponent={() =>
              isLoading ? <PropertyCardLoader /> : null
            }
          />
        </View>
        <View className="items-center mb-4">
          <LeadCard />
          <BecomePartnerCard />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
