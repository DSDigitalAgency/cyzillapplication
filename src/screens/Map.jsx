import React, { useState, useEffect, useContext } from "react";
import { SafeAreaView, Text, View } from "react-native";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import BASE_URL from "../config";
import PropertyCard from "../components/property/PropertyCard";
import { UserLocationContext } from "../context/UserLocationContext";

const CustomMarker = ({
  coordinate,
  title,
  price,
  saleOrRent,
  onPress,
  formatPrice,
}) => {
  const markerStyle = {
    backgroundColor: saleOrRent === "sell" ? "green" : "red",
    padding: 4,
    borderRadius: 7,
  };

  return (
    <Marker coordinate={coordinate} title={title} onPress={onPress}>
      <View style={markerStyle}>
        <Text style={{ color: "white" }}>{formatPrice(price)}</Text>
      </View>
    </Marker>
  );
};

const Map = ({ navigation }) => {
  const apiUrl = `${BASE_URL}/api/property/properties`;
  const [propertyData, setPropertyData] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [mapRegion, setMapRegion] = useState([]);
  const { location, setLocation } = useContext(UserLocationContext);

  const fetchData = async () => {
    try {
      const response = await fetch(apiUrl);

      if (!response.ok) {
        throw new Error(
          `Network response was not ok. Status: ${response.status}`
        );
      }

      const responseData = await response.json();

      if (!responseData.properties || !Array.isArray(responseData.properties)) {
        throw new Error(`Invalid or missing 'properties' key in API response`);
      }

      const properties = responseData.properties.filter((property) => property);
      setPropertyData(properties);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    if (location) {
      setMapRegion({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        latitudeDelta: 0.0222,
        longitudeDelta: 0.0121,
      });
    }
  }, [location]);

  useEffect(() => {
    fetchData();
  }, []);

  const formatPrice = (price) => {
    if (price >= 10000000) {
      return `₹ ${(price / 10000000).toFixed(1)} cr`;
    } else if (price >= 100000) {
      return `₹ ${(price / 100000).toFixed(1)} lac`;
    } else {
      return `₹ ${(price / 1000).toFixed(1)} k`;
    }
  };

  const handleMarkerPress = (propertyId) => {
    navigation.navigate("PropertyDetails", { propertyId, sourceTab: "Map" });
  };

  return (
    <SafeAreaView className="flex-1">
      <MapView
        provider={PROVIDER_GOOGLE}
        style={{ flex: 1 }}
        region={mapRegion}
        showsUserLocation
      >
        {propertyData.map(({ _id, location, price, forDetails }) => (
          <CustomMarker
            key={_id}
            coordinate={{ latitude: location.lat, longitude: location.lng }}
            title={_id}
            price={price}
            saleOrRent={forDetails}
            onPress={() => handleMarkerPress(_id)}
            formatPrice={formatPrice}
          />
        ))}
      </MapView>
    </SafeAreaView>
  );
};

export default Map;
