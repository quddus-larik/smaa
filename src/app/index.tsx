import { useThemeColor } from "heroui-native";
import type { JSX } from "react";
import { View } from "react-native";

export default function HomeScreen(): JSX.Element {
  const themeColorForeground = useThemeColor("foreground");

  return (
    <View className="flex-1 bg-background justify-center px-6">

    </View>
  );
}
