import { Image, StyleSheet } from "react-native";
import React from "react";
import { ThemedView } from "./ThemedView";
import { ThemedText } from "./ThemedText";
import { Product } from "@/types/types";
import { Link } from "expo-router";
import { defaultPizzaImage } from "@/assets/data/products";

export default function ProductListItem({ product }: { product: Product }) {
  return (
    <Link href={`/menu/${product.id}`} asChild>
      <ThemedView style={styles.container} as="Pressable">
        <Image
          source={{ uri: product.image || defaultPizzaImage }}
          style={styles.image}
          resizeMode="contain"
        />
        <ThemedText style={styles.title}>{product.name}</ThemedText>
        <ThemedText>${product.price}</ThemedText>
      </ThemedView>
    </Link>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    borderRadius: 20,
    maxWidth: "50%", //Prevent an item from occupying 2 columns when we have just once item in a particular row since we specified flex 1 above
  },
  image: {
    width: "100%",
    aspectRatio: 1,
  },
  title: {
    fontSize: 14,
    fontWeight: "600",
    marginVertical: 10,
  },
});
