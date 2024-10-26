import { View, Text } from "react-native";
import React from "react";
import { ThemedView } from "@/components/ThemedView";
import { ThemedText } from "@/components/ThemedText";

export default function Explore() {
  return (
    <ThemedView darkColor="#000">
      <ThemedText>Explore</ThemedText>
    </ThemedView>
  );
}
