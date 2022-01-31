import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Map from "../Components/Maps";
import MapView from "react-native-maps";
import tw from "tailwind-react-native-classnames";
import { createStackNavigator } from "@react-navigation/stack";
import { startClock } from "react-native-reanimated";
import NavigateCard from "../Components/NavigateCard";
import RideOptionsCard from "../Components/RideOptionsCard";
import { Icon } from "react-native-elements/dist/icons/Icon";
import { useNavigation } from "@react-navigation/native";

const MapScreen = () => {
  const Stack = createStackNavigator();
  const navigation = useNavigation();
  return (
    <View>
      <TouchableOpacity
        style={tw`bg-gray-100 absolute top-10 left-8 z-50 p-3 rounded-full shadow-lg`}
        onPress={() => {
          navigation.navigate("HomeScreen");
        }}
      >
        <Icon name="menu" />
      </TouchableOpacity>
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
