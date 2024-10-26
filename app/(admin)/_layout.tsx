import React from "react";
import { Tabs } from "expo-router";
import { useColorScheme } from "@/hooks/useColorScheme";
import { Colors } from "@/constants/Colors";
import { TabBarIcon } from "@/components/navigation/TabBarIcon";
import { Text } from "react-native";

export default function TabLayout() {
  const colorScheme = useColorScheme();
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tintAdmin,
        tabBarStyle: {
          backgroundColor: Colors[colorScheme ?? "light"].adminTabBackground,
        },
      }}
    >
      <Tabs.Screen
        name="menu"
        options={{
          title: "Menu",
          headerShown: false,
          tabBarLabel: ({ color, focused }) => (
            <Text
              style={{
                color: focused ? color : "#000",
                fontWeight: focused ? "bold" : "normal",
                fontSize: 14,
              }}
            >
              Menu
            </Text>
          ),
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name="cutlery"
              color={focused ? color : "#000"}
              style={{ color: focused ? color : "#000" }}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: "Orders",
          tabBarLabel: ({ color, focused }) => (
            <Text
              style={{
                color: focused ? color : "#000",
                fontWeight: focused ? "bold" : "normal",
                fontSize: 14,
              }}
            >
              Orders
            </Text>
          ),
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name="list"
              color={focused ? color : "#000"}
              style={{ color: focused ? color : "#000" }}
            />
          ),
        }}
      />
      <Tabs.Screen name="index" options={{ href: null }} />
    </Tabs>
  );
}
