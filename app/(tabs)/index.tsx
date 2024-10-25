import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import { ThemedView } from "@/components/ThemedView";
import { ThemedText } from "@/components/ThemedText";
import Products from "@/assets/data/products";

const product = Products[0];

function ProductListItem() {
  return (
    <ThemedView darkColor="#000" style={styles.container}>
      <Image source={{ uri: product.image }} style={styles.image} />
      <ThemedText style={styles.title}>{product.name}</ThemedText>
      <ThemedText>${product.price}</ThemedText>
    </ThemedView>
  );
}
export default function MenuScreen() {
  return (
    <>
      <ProductListItem />
      <ProductListItem />
      <ProductListItem />
      <ProductListItem />
      <ProductListItem />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    borderRadius: 20,
  },
  image: {
    width: "100%",
    aspectRatio: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: "600",
    marginVertical: 10,
  },
});
