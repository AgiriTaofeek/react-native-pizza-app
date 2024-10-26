import React, { useState } from "react";
import { Link, Stack, useLocalSearchParams, useRouter } from "expo-router";
import { ThemedView } from "@/components/ThemedView";
import { ThemedText } from "@/components/ThemedText";
import products, { defaultPizzaImage } from "@/assets/data/products";
import { Image, Pressable, StyleSheet } from "react-native";
import { useColorScheme } from "@/hooks/useColorScheme";
import { Colors } from "@/constants/Colors";
import { PizzaSize } from "@/types/types";
import Button from "@/components/Button";
import { useStore } from "@/store/store";
import { FontAwesome } from "@expo/vector-icons";

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
      {/* <Stack.Screen options={{ title: `${product.name}` }} /> */}

      <Stack.Screen
        // name="[id]"
        options={{
          title: "Menu",
          headerRight: () => (
            <Link href={`/menu/create?id=${id}`} asChild>
              <Pressable>
                {({ pressed }) => (
                  <FontAwesome
                    name="pencil"
                    size={25}
                    color={Colors[colorScheme ?? "light"].text}
                    style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                  />
                )}
              </Pressable>
            </Link>
          ),
        }}
      />
      <Image
        source={{ uri: product.image || defaultPizzaImage }}
        style={styles.image}
      />

      <ThemedText style={styles.title}>{product.name}</ThemedText>
      <ThemedText style={styles.price}>
        Price: ${product.price.toFixed(2)}
      </ThemedText>
      {/* <Button onPress={addToCart} text="Add to cart" /> */}
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
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  price: {
    fontSize: 18,
    // fontWeight: "bold",
  },
});
