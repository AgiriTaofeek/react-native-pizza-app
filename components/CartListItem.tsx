import { StyleSheet, Image, Pressable } from "react-native";
import React, { useEffect } from "react";
import { Link } from "expo-router";
import { FontAwesome } from "@expo/vector-icons";
import { ThemedView } from "./ThemedView";
import { ThemedText } from "./ThemedText";
import { defaultPizzaImage } from "@/assets/data/products";
import { CartItem } from "@/types/types";
import { useColorScheme } from "@/hooks/useColorScheme";
import { Colors } from "@/constants/Colors";
import { useStore } from "@/store/store";

type CartListItemProps = {
  cartItem: CartItem;
};

const CartListItem = ({ cartItem }: CartListItemProps) => {
  const colorScheme = useColorScheme();
  const updateQuantity = useStore((state) => state.updateQuantity);
  const calculateTotal = useStore((state) => state.calculateTotal);

  useEffect(() => {
    const unsubscribe = useStore.subscribe(
      (state) => state.items, // Listen for changes in items
      (items) =>
        calculateTotal(
          items.reduce(
            (acc, item) => acc + item.product.price * item.quantity,
            0
          )
        ), // Recalculate total
      { fireImmediately: true } // Initial calculation on component mount
    );

    return unsubscribe; // Clean up on unmount
  }, []);
  return (
    <ThemedView style={styles.container}>
      <Image
        source={{ uri: cartItem.product.image || defaultPizzaImage }}
        style={styles.image}
        resizeMode="contain"
      />
      <ThemedView style={{ flex: 1 }}>
        <ThemedText style={styles.title}>{cartItem.product.name}</ThemedText>
        <ThemedView style={styles.subtitleContainer}>
          <ThemedText
            style={[
              styles.price,
              //   { color: Colors[colorScheme ?? "light"].text },
            ]}
          >
            ${cartItem.product.price.toFixed(2)}
          </ThemedText>
          <ThemedText>Size: {cartItem.size}</ThemedText>
        </ThemedView>
      </ThemedView>
      <ThemedView style={styles.quantitySelector}>
        <FontAwesome
          onPress={() => updateQuantity(cartItem.id, -1)}
          name="minus"
          color="gray"
          style={{ padding: 5 }}
        />

        <ThemedText style={styles.quantity}>{cartItem.quantity}</ThemedText>
        <FontAwesome
          onPress={() => updateQuantity(cartItem.id, 1)}
          name="plus"
          color="gray"
          style={{ padding: 5 }}
        />
      </ThemedView>
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  container: {
    // backgroundColor: "white",
    borderRadius: 10,
    padding: 5,
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  image: {
    width: 75,
    aspectRatio: 1,
    alignSelf: "center",
    marginRight: 10,
  },
  title: {
    fontWeight: "500",
    fontSize: 16,
    marginBottom: 5,
  },
  subtitleContainer: {
    flexDirection: "row",
    gap: 5,
  },
  quantitySelector: {
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
    marginVertical: 10,
  },
  quantity: {
    fontWeight: "500",
    fontSize: 18,
  },
  price: {
    // color: Colors.light.tint,
    fontWeight: "bold",
  },
});

export default CartListItem;
