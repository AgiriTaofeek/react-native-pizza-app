import { Pressable, View, type ViewProps } from "react-native";

import { useThemeColor } from "@/hooks/useThemeColor";
import { forwardRef } from "react";

export type ThemedViewProps = ViewProps & {
  lightColor?: string;
  darkColor?: string;
  as?: string;
  onPress?: () => void;
};

export const ThemedView = forwardRef<View, ThemedViewProps>(function ThemedView(
  { style, lightColor, darkColor, as, onPress, ...otherProps }: ThemedViewProps,
  ref
) {
  const backgroundColor = useThemeColor(
    { light: lightColor, dark: darkColor },
    "background"
  );
  const Comp = as === "Pressable" ? Pressable : View;

  return (
    <Comp
      ref={ref}
      style={[{ backgroundColor }, style]}
      onPress={onPress}
      {...otherProps}
    />
  );
});
