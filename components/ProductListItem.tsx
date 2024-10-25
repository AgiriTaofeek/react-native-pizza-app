import { Image, StyleSheet } from "react-native";
import React from "react";
import { ThemedView } from "./ThemedView";
import { ThemedText } from "./ThemedText";

type ProductListItemProp = {
  id: number;
  name: string;
  image: string;
  price: number;
};

export default function ProductListItem({
  product,
}: {
  product: ProductListItemProp;
}) {
  return (
    <ThemedView darkColor="#000" style={styles.container}>
      <Image source={{ uri: product.image }} style={styles.image} />
      <ThemedText style={styles.title}>{product.name}</ThemedText>
      <ThemedText>${product.price}</ThemedText>
    </ThemedView>
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
