import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Stack } from "expo-router";
import "@/global.css";
import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";

const RootLayout = () => {
  return (
  <GluestackUIProvider mode="light">
      <Stack />
    </GluestackUIProvider>
  );
};

export default RootLayout;

const styles = StyleSheet.create({});
