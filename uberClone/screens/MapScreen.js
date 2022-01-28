import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Map from "../Components/Maps";
import MapView from "react-native-maps";
import tw from "tailwind-react-native-classnames";
import { createStackNavigator } from "@react-navigation/stack";
import { startClock } from "react-native-reanimated";
import NavigateCard from "../Components/NavigateCard";
import RideOptionsCard from "../Components/RideOptionsCard";

const MapScreen = () => {
  const Stack = createStackNavigator();
  return (
    <View>
      <View style={tw`h-1/3`}>
        <Map />
      </View>
      <View style={tw`h-2/3`}>
        <Stack.Navigator>
          <Stack.Screen
            name="NavigateCard"
            component={NavigateCard}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="RideOptionCard"
            component={RideOptionsCard}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </View>
    </View>
  );
};

export default MapScreen;

const styles = StyleSheet.create({});
