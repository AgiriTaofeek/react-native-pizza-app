import React from "react";
import { ThemedView } from "@/components/ThemedView";
import { ThemedText } from "@/components/ThemedText";
import { FlatList, Platform } from "react-native";
import { StatusBar } from "expo-status-bar";
import { useStore } from "@/store/store";
import CartListItem from "@/components/CartListItem";
import Button from "@/components/Button";

export default function CartScreen() {
  const items = useStore((state) => state.items);
  console.log(items);
  const total = useStore((state) => state.total);
  return (
    <ThemedView style={{ flex: 1, padding: 10 }} darkColor="#000">
      <FlatList
        data={items}
        renderItem={({ item }) => <CartListItem cartItem={item} />}
        contentContainerStyle={{ gap: 10 }}
      />
      <ThemedText style={{ fontSize: 20, fontWeight: "500" }}>
        Total ${total.toFixed(2)}
      </ThemedText>
      <Button text="Checkout" />
      {/* status bar behaves differently in android and iOS */}
      <StatusBar style={Platform.OS === "ios" ? "light" : "auto"} />
    </ThemedView>
  );
}
