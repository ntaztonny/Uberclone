import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Map from "../Components/Maps";
import MapView from "react-native-maps";
import tw from "tailwind-react-native-classnames";
import { createStackNavigator } from "@react-navigation/stack";

const MapScreen = () => {
  const Stack = createStackNavigator();
  return (
    <View>
      <View style={tw`h-1/2`}>
        <Map />
      </View>
      <View style={tw`h-1/2`}>{/* <Stack.Navigator></Stack.Navigator> */}</View>
    </View>
  );
};

export default MapScreen;

const styles = StyleSheet.create({});
