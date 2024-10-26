import React, { useState } from "react";
import { ThemedView } from "@/components/ThemedView";
import { ThemedText } from "@/components/ThemedText";
import { Alert, Image, StyleSheet, TextInput } from "react-native";
import { useColorScheme } from "@/hooks/useColorScheme";
import { Colors } from "@/constants/Colors";
import Button from "@/components/Button";
import * as ImagePicker from "expo-image-picker";

// import RHFInput from "@/components/RHFInput";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { defaultPizzaImage } from "@/assets/data/products";
import { Stack, useLocalSearchParams } from "expo-router";

type FormState = {
  name: string;
  price: number;
};
const schema = yup
  .object({
    name: yup.string().required(),
    price: yup.string().required(),
    // price: yup.number().positive().integer().required(),
  })
  .required();

export default function CreateProductScreen() {
  const [selectedImage, setSelectedImage] = useState<string | undefined>(
    undefined
  );
  const { id } = useLocalSearchParams();
  const isUpdating = !!id;
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      name: "",
      price: "",
    },
  });
  const colorScheme = useColorScheme();

  const onUpdate = (data: any) => {
    console.warn("Updating Product", data);
    reset();
  };
  const onCreate = (data: any) => {
    console.warn("Creating Product", data);
    reset();
  };
  const confirmDelete = () => {
    Alert.alert("Confirm", "Are you sure you want to delete this product", [
      {
        text: "Cancel",
      },
      {
        text: "Delete",
        style: "destructive",
        onPress: onDelete,
      },
    ]);
  };
  const onDelete = () => {
    console.warn("DELETE!!!");
  };
  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
      console.log(result);
    } else {
      alert("You did not select any image.");
    }
  };
  return (
    <ThemedView style={styles.container}>
      <Stack.Screen
        options={{ title: isUpdating ? "Update Product" : "Create Product" }}
      />
      <Image
        source={{ uri: selectedImage || defaultPizzaImage }}
        style={styles.image}
      />
      <ThemedText
        style={[
          styles.textButton,
          { color: Colors[colorScheme ?? "light"].tint },
        ]}
        onPress={pickImageAsync}
      >
        Select Image
      </ThemedText>
      <ThemedText style={styles.label}>Name</ThemedText>
      <Controller
        control={control}
        name="name"
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            placeholder="Name"
            placeholderTextColor={
              Colors[colorScheme ?? "light"].sizeSelectedIcon
            }
            style={[
              styles.input,
              {
                backgroundColor: Colors[colorScheme ?? "light"].sizeSelectIcon,
                color: Colors[colorScheme ?? "light"].text,
              },
            ]}
          />
        )}
      />
      {errors.name && (
        <ThemedText style={{ color: "red" }}>name is required.</ThemedText>
      )}
      <ThemedText style={styles.label}>Price ($)</ThemedText>

      <Controller
        control={control}
        name="price"
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            placeholder="9.99"
            placeholderTextColor={
              Colors[colorScheme ?? "light"].sizeSelectedIcon
            }
            style={[
              styles.input,
              {
                backgroundColor: Colors[colorScheme ?? "light"].sizeSelectIcon,
                color: Colors[colorScheme ?? "light"].text,
              },
            ]}
          />
        )}
      />

      {errors.price && (
        <ThemedText style={{ color: "red" }}>Price is required.</ThemedText>
      )}
      <Button
        text={isUpdating ? "Update" : "Create"}
        onPress={isUpdating ? handleSubmit(onUpdate) : handleSubmit(onCreate)}
      />
      {isUpdating && (
        <ThemedText onPress={confirmDelete} style={styles.textButton}>
          Delete
        </ThemedText>
      )}
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 10,
  },
  label: {
    fontSize: 16,
  },
  input: {
    padding: 10,
    borderRadius: 5,
    marginTop: 5,
    marginBottom: 20,
  },
  image: {
    width: "50%",
    aspectRatio: 1,
    alignSelf: "center",
  },
  textButton: {
    alignSelf: "center",
    fontWeight: "bold",
  },
});
