import React from "react";
import { Platform } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import PlacesListScreen from "../screens/PlacesListScreen";
import PlaceDetailScreen from "../screens/PlaceDetailScreen";
import NewPlaceScreen from "../screens/NewPlaceScreen";
import MapScreen from "../screens/MapScreen";
import Colors from "../constants/Colors";

const Stack = createStackNavigator();

const defaultStyle = {
  headerStyle: {
    backgroundColor: Platform.OS === "android" ? Colors.primary : "transparent",
  },
  headerTintColor: Platform.OS === "android" ? "#fff" : Colors.primary,
};

export const PlacesNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Places"
          component={PlacesListScreen}
          options={defaultStyle}
        />
        <Stack.Screen
          name="PlaceDetail"
          component={PlaceDetailScreen}
          options={defaultStyle}
        />
        <Stack.Screen
          name="NewPlace"
          component={NewPlaceScreen}
          options={defaultStyle}
        />
        <Stack.Screen name="Map" component={MapScreen} options={defaultStyle} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
