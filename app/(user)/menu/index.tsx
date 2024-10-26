import { FlatList } from "react-native";
import React from "react";
import products from "@/assets/data/products";
import ProductListItem from "@/components/ProductListItem";

export default function MenuScreen() {
  return (
    <FlatList
      data={products}
      renderItem={({ item }) => <ProductListItem product={item} />}
      numColumns={2}
      contentContainerStyle={{ gap: 10, padding: 10 }} //The outermost border that applies padding or margin around the entire FlatList. The gap will add gap vertically between every rows because by default the FlatList is a flex container and it's default flex direction is column
      columnWrapperStyle={{ gap: 10 }} //Applies styling to each row of items (in this case, each row contains two items because numColumns is set to 2). The gap will add space horizontally because by it's kinda like every row is a flex container and with a default flex direction of row.
    />
  );
}
