import React from "react";
import { Link, Stack } from "expo-router";
import "@/global.css";
import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Pressable } from "react-native";
import { useStore } from "@/store";
import { Text } from "@/components/ui/text";
import { Icon } from "@/components/ui/icon";
import { ShoppingCart } from "lucide-react-native";

const RootLayout = () => {
  const queryClient = new QueryClient();
  const cartItemsNum = useStore((state) => state.items.length)

  return (
    <QueryClientProvider client={queryClient}>
      <GluestackUIProvider mode="light">
        <Stack
         screenOptions={{
          headerTitleAlign: 'center',
          headerRight: () =>
            cartItemsNum > 0 && (
              <Link href={'/cart'} asChild>
                <Pressable className="flex-row gap-2">
                  <Icon as={ShoppingCart} />
                  <Text>{cartItemsNum}</Text>
                </Pressable>
              </Link>
            ),
        }}
        >
          <Stack.Screen name="index" options={{ title: "Shop" }}/>
          <Stack.Screen name="product/[id]" options={{ title: "Product" }}/>
        </Stack>
      </GluestackUIProvider>
    </QueryClientProvider>
  );
};

export default RootLayout;
