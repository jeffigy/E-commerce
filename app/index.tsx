import { FlatList } from "react-native";
import React from "react";
import products from "@/assets/products.json";
import ProductListItem from "@/components/ProductListItem";
import { useBreakpointValue } from "@/components/ui/utils/use-break-point-value";

const Homepage = () => {
  const numColumns = useBreakpointValue({
    default: 2,
    sm: 3,
    xl: 4,
  }) as number

  return (
    <FlatList
      key={numColumns}
      data={products.splice(0, 10)}
      numColumns={numColumns}
      contentContainerClassName="gap-2 max-w-[960px] mx-auto w-full"
      columnWrapperClassName="gap-2"
      renderItem={({ item }) => <ProductListItem product={item} />}
    />
  );
};

export default Homepage;
