import { ActivityIndicator, FlatList } from "react-native";
import React from "react";
import ProductListItem from "@/components/ProductListItem";
import { useBreakpointValue } from "@/components/ui/utils/use-break-point-value";
import { useProductsQuery } from "@/hooks/useProducts";
import { Text } from "@/components/ui/text";
import { VStack } from "@/components/ui/vstack";

const Homepage = () => {
  const {
    data: products,
    isLoading,
    isError,
    error,
    isFetching,
  } = useProductsQuery();

  const numColumns = useBreakpointValue({
    default: 2,
    sm: 3,
    xl: 4,
  }) as number;

  if (isLoading) return <ActivityIndicator />;

  if (isError) return <Text>Error: {error.message}</Text>;

  return (
    <VStack>
      {isFetching && <ActivityIndicator />}

      <FlatList
        key={numColumns}
        data={products.splice(0, 10)}
        numColumns={numColumns}
        contentContainerClassName="gap-2 max-w-[960px] mx-auto w-full"
        columnWrapperClassName="gap-2"
        renderItem={({ item }) => <ProductListItem product={item} />}
      />
    </VStack>
  );
};

export default Homepage;
