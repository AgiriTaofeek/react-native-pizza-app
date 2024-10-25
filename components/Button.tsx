import { Pressable, StyleSheet, View } from "react-native";
import { forwardRef } from "react";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";
import { ThemedText } from "./ThemedText";

type ButtonProps = {
  text: string;
} & React.ComponentPropsWithoutRef<typeof Pressable>;

const Button = forwardRef<View | null, ButtonProps>(
  ({ text, ...pressableProps }, ref) => {
    const colorScheme = useColorScheme();

    return (
      <Pressable
        ref={ref}
        {...pressableProps}
        style={[
          styles.container,
          {
            backgroundColor: Colors[colorScheme ?? "light"].tint,
          },
        ]}
      >
        <ThemedText
          style={[
            styles.text,
            { color: Colors[colorScheme ?? "light"].button },
          ]}
        >
          {text}
        </ThemedText>
      </Pressable>
    );
  }
);

const styles = StyleSheet.create({
  container: {
    // backgroundColor: Colors.light.tint,
    padding: 15,
    alignItems: "center",
    borderRadius: 100,
    marginVertical: 10,
  },
  text: {
    fontSize: 16,
    fontWeight: "600",
    // color: "white",
  },
});

export default Button;
