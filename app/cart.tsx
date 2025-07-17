import { FlatList, StyleSheet, View } from "react-native";
import React from "react";
import { useStore } from "@/store";
import { Text } from "@/components/ui/text";
import { VStack } from "@/components/ui/vstack";
import { Button, ButtonText } from "@/components/ui/button";
import { HStack } from "@/components/ui/hstack";
import { Redirect } from "expo-router";

const cart = () => {
  const { items, resetCart } = useStore();

  const onCheckout = async () => {
    resetCart();
  };

  if(items.length === 0) return <Redirect href={'/'}/>

  return (
    <FlatList
      data={items}
      contentContainerClassName="gap-2 max-w-[960px] w-full mx-auto p-2"
      renderItem={({ item }) => (
        <HStack className="bg-white p-3">
          <VStack space="sm">
            <Text bold>{item.product.name}</Text>
            <Text>$ {item.product.price}</Text>
          </VStack>
          <Text className="ml-auto">{item.quantity}</Text>
        </HStack>
      )}
      ListFooterComponent={() => (
        <Button onPress={onCheckout}>
          <ButtonText>Checkout</ButtonText>
        </Button>
      )}
    />
  );
};

export default cart;

const styles = StyleSheet.create({});
