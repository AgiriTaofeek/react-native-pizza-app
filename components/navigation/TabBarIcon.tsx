// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/

// import Ionicons from '@expo/vector-icons/Ionicons';
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { type IconProps } from "@expo/vector-icons/build/createIconSet";
import { type ComponentProps } from "react";

export function TabBarIcon({
  style,
  ...rest
}: IconProps<ComponentProps<typeof FontAwesome>["name"]>) {
  return (
    <FontAwesome size={20} style={[{ marginBottom: -3 }, style]} {...rest} />
  );
}

// export function TabBarIcon({
//   style,
//   ...rest
// }: IconProps<ComponentProps<typeof Ionicons>["name"]>) {
//   return <Ionicons size={28} style={[{ marginBottom: -3 }, style]} {...rest} />;
// }
