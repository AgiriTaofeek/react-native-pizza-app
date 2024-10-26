import React, { useState } from "react";
import { Stack, useLocalSearchParams, useRouter } from "expo-router";
import { ThemedView } from "@/components/ThemedView";
import { ThemedText } from "@/components/ThemedText";
import products, { defaultPizzaImage } from "@/assets/data/products";
import { Image, StyleSheet } from "react-native";
import { useColorScheme } from "@/hooks/useColorScheme";
import { Colors } from "@/constants/Colors";
import { PizzaSize } from "@/types/types";
import Button from "@/components/Button";
import { useStore } from "@/store/store";

const sizes: PizzaSize[] = ["S", "M", "L", "XL"];
export default function ProductListDetail() {
  const [selectedSize, setSelectedSize] = useState<PizzaSize>("M");
  const addItem = useStore((state) => state.addItem);
  const { id } = useLocalSearchParams();
  const colorScheme = useColorScheme();
  const router = useRouter();
  const product = products.find((p) => p.id === Number(id));
  const addToCart = () => {
    if (!product) return;
    // console.warn("Add to cart");
    addItem(product, selectedSize);
    router.push("/cart");
  };
  if (!product) return <ThemedText>Product not found.</ThemedText>;
  return (
    <ThemedView style={styles.container}>
      <Stack.Screen options={{ title: `${product.name}` }} />
      <Image
        source={{ uri: product.image || defaultPizzaImage }}
        style={styles.image}
      />
      <ThemedText>Select size</ThemedText>
      <ThemedView style={styles.sizes}>
        {sizes.map((size) => (
          <ThemedView
            as="Pressable"
            style={[
              styles.size,
              {
                backgroundColor: Colors[colorScheme ?? "light"].sizeSelectIcon,
              },
              size === selectedSize && {
                backgroundColor:
                  Colors[colorScheme ?? "light"].sizeSelectedIcon,
              },
            ]}
            key={size}
            onPress={() => setSelectedSize(size)}
          >
            <ThemedText
              style={styles.sizeText}
              lightColor={
                size === selectedSize ? "hsl(0 0% 10%)" : "hsl(0 0% 50%)"
              }
            >
              {size}
            </ThemedText>
          </ThemedView>
        ))}
      </ThemedView>
      <ThemedText style={styles.price}>
        Price: ${product.price.toFixed(2)}
      </ThemedText>
      <Button onPress={addToCart} text="Add to cart" />
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  image: {
    width: "100%",
    aspectRatio: 1,
    resizeMode: "contain",
  },
  price: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: "auto",
  },
  sizes: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: 10,
  },
  size: {
    width: 50,
    aspectRatio: 1,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
  },
  sizeText: {
    fontSize: 20,
    fontWeight: "500",
  },
});
