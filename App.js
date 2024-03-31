import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { View } from "react-native";
import "react-native-gesture-handler";
import TabNavigation from "./src/components/navigators/TabNavigation";
import * as Location from "expo-location";
import { UserLocationContext } from "./src/context/UserLocationContext";
import { Provider } from "react-redux";
import { store } from "./src/redux/store";

export default function App() {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);

  return (
    <Provider store={store}>
      <View className="flex-1">
        <UserLocationContext.Provider value={{ location, setLocation }}>
          <NavigationContainer>
            <TabNavigation />
          </NavigationContainer>
        </UserLocationContext.Provider>
      </View>
    </Provider>
  );
}
