/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

//HSL => Hue(color wheel roygbiv 0deg to 360deg), Saturation(0% to 100% the rate at which the color is lost at 0% to full gray), Lightness(0% to 100%, brightest at 50%, pure white 100% and 0% pure black)

const tintColorLight = "hsl(197, 85%, 37%)";
const tintColorDark = "hsl(0, 0%, 100%)";

export const Colors = {
  light: {
    text: "hsl(210, 15%, 10%)",
    background: "hsl(0, 0%, 100%)",
    tint: tintColorLight,
    icon: "hsl(180, 10%, 45%)",
    tabIconDefault: "hsl(180, 10%, 45%)",
    tabIconSelected: tintColorLight,
    sizeSelectIcon: "hsl(0, 0%, 90%)",
    sizeSelectedIcon: "hsl(0, 0%, 85%)",
    button: "hsl(210, 20%, 92%)",
  },
  dark: {
    text: "hsl(210, 20%, 92%)",
    background: "hsl(210, 5%, 10%)",
    tint: tintColorDark,
    icon: "hsl(210, 5%, 65%)",
    tabIconDefault: "hsl(210, 5%, 65%)",
    tabIconSelected: tintColorDark,
    sizeSelectIcon: "hsl(0, 0%, 16%)",
    sizeSelectedIcon: "hsl(0, 0%, 50%)",
    button: "hsl(210, 15%, 10%)",
  },
};

// const tintColorLight = "#0a7ea4";
// const tintColorDark = "#fff";

// export const Colors = {
//   light: {
//     text: "#11181C",
//     background: "#fff",
//     tint: tintColorLight,
//     icon: "#687076",
//     tabIconDefault: "#687076",
//     tabIconSelected: tintColorLight,
//     sizeSelectIcon: "#687076",
//     sizeSelectedIcon: "#3e3e3e",
//   },
//   dark: {
//     text: "#ECEDEE",
//     background: "#151718",
//     tint: tintColorDark,
//     icon: "#9BA1A6",
//     tabIconDefault: "#9BA1A6",
//     tabIconSelected: tintColorDark,
//     sizeSelectIcon: "#292929",
//     sizeSelectedIcon: "#3e3e3e",
//   },
// };
