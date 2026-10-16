import { LegendList } from "@legendapp/list/react-native";
import { Button, Typography, Surface } from "heroui-native";
import type { JSX } from "react";
import { View } from "react-native";
import { Uniwind, useUniwind } from "uniwind";
import { HugeiconsIcon } from "@hugeicons/react-native";
import { Search, Home, Plus, Settings02FreeIcons } from "@hugeicons/core-free-icons";

interface CollectionItem {
  id: string;
  title: string;
  subtitle: string;
  bgColor: string;
}

const COLLECTIONS: CollectionItem[] = [
  {
    id: "1",
    title: "Old friends in Pakistan",
    subtitle: "24 May - 14 Photos",
    bgColor: "bg-pink-200",
  },
  {
    id: "2",
    title: "Family Trip to Murree",
    subtitle: "12 June - 32 Photos",
    bgColor: "bg-orange-200",
  },
  {
    id: "3",
    title: "Family Trip to Murree",
    subtitle: "12 June - 32 Photos",
    bgColor: "bg-sky-200",
  },
  {
    id: "4",
    title: "Family Trip to Murree",
    subtitle: "12 June - 32 Photos",
    bgColor: "bg-lime-200",
  },
];

function ThemeToggle(): JSX.Element {
  const { theme } = useUniwind();
  return (
    <Button
      variant="secondary"
      onPress={() => Uniwind.setTheme(theme === "light" ? "dark" : "light")}
    >
      <Button.Label>Toggle {theme === "light" ? "Dark" : "Light"} Mode</Button.Label>
    </Button>
  );
}

export default function HomeScreen(): JSX.Element {
  return (
    <View className="flex-1 bg-background relative">
      <LegendList
        data={COLLECTIONS}
        estimatedItemSize={200}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: 8,
          paddingTop: 28,
          paddingBottom: 110,
          gap: 16,
        }}
        ListHeaderComponent={
          <>
            <View className="flex-row justify-between p-3">
              <Button variant="secondary" isIconOnly>
                <Button.Label>AB</Button.Label>
              </Button>
              <View className="flex-row gap-2">
                <ThemeToggle />
                <Button variant="secondary" isIconOnly>
                  <HugeiconsIcon icon={Settings02FreeIcons}/>
                </Button>
              </View>
            </View>

            <View className="px-3 py-2">
              <Typography.Heading type="h1" className="mb-4">
                My Collection
              </Typography.Heading>
            </View>
          </>
        }
        renderItem={({ item, index }) => (
          <View
            className={`mx-3 min-h-44 ${item.bgColor} rounded-2xl p-3 flex-col gap-3 ring-2 ring-background ${
              index === COLLECTIONS.length - 1 ? "" : "pb-10"
            } ${index !== 0 ? "-mt-11" : ""}`}
          >
            <View>
              <Typography.Heading type="h3">{item.title}</Typography.Heading>
              <Typography.Paragraph>{item.subtitle}</Typography.Paragraph>
            </View>
            <View className="h-26 flex-row gap-1 items-end">
              <View className="bg-blue-300 w-26 h-full rounded-xl" />
              <View className="bg-blue-300 w-16 h-16 rounded-xl" />
            </View>
          </View>
        )}
      />

      <View className="absolute bottom-6 left-0 right-0 items-center px-4">
        <Surface className="flex-row items-center gap-2 px-4 py-3 rounded-full bg-secondary overflow-hidden">
          <Button variant="secondary" isIconOnly>
            <HugeiconsIcon icon={Home}/>
          </Button>
          <Button size={"lg"} isIconOnly>
            <HugeiconsIcon icon={Plus} color={"#FFFFFF"} />
          </Button>
          <Button variant="secondary" isIconOnly>
            <HugeiconsIcon icon={Search} />
          </Button>
        </Surface>
      </View>
    </View>
  );
}