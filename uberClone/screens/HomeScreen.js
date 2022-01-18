import React from "react";
import { StyleSheet, Text, SafeAreaView, Image, View } from "react-native";
import tw from "tailwind-react-native-classnames";
import NavOptions from "../Components/NavOptions";
import MapScreen from "./MapScreen";

function HomeScreen() {
  return (
    <SafeAreaView style={tw`bg-white h-full`}>
      <View style={tw`p-5`}>
        <Image
          style={{ width: 100, height: 100, resizeMode: "contain" }}
          source={{
            uri: "https://links.papareact.com/gzs",
          }}
        />
        <NavOptions />
      </View>
      <MapScreen />
    </SafeAreaView>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  text: {
    color: "red",
  },
});
