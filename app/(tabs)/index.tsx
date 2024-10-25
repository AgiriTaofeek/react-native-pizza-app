import { StyleSheet, Image } from "react-native";
import React from "react";
import products from "@/assets/data/products";
import ProductListItem from "@/components/ProductListItem";

export default function MenuScreen() {
  return ( 
    <>
      <ProductListItem product={products[0]} />
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
