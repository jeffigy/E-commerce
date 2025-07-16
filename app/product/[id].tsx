import React from 'react'
import { useLocalSearchParams } from 'expo-router'
import { Product } from '@/types/Product'
import products from '@/assets/products.json'
import { Box } from '@/components/ui/box'
import { Stack } from 'expo-router'
import { Card } from '@/components/ui/card'
import { Image } from '@/components/ui/image'
import { Heading } from '@/components/ui/heading'
import { Text } from '@/components/ui/text'
import { Button, ButtonText } from '@/components/ui/button'
import { VStack } from '@/components/ui/vstack'
import { useProductByIdQuery } from '@/hooks/useProducts'
import { ActivityIndicator } from 'react-native'

const ProductDetails = () => {
  const {id} = useLocalSearchParams<{id: string}>()
  const {data: product, isLoading, isError, error, isFetching} = useProductByIdQuery(Number(id))

  const addToCart = () => {
    console.log('Add to cart')
  }

  if(isLoading) return <ActivityIndicator />

  if(isError) return <Text>Error: {error.message}</Text>



  return (
    <Box className="flex-1 items-center p-3">
      {isFetching && <ActivityIndicator />}
      <Stack.Screen options={{ title: product.name }} />

      <Card className="p-5 rounded-lg max-w-[960px] w-full flex-1">
        <Image
          source={{
            uri: product.image,
          }}
          className="mb-6 h-[240px] w-full rounded-md"
          alt={`${product.name} image`}
          resizeMode="contain"
        />
        <Text className="text-sm font-normal mb-2 text-typography-700">
          {product.name}
        </Text>
        <VStack className="mb-6">
          <Heading size="md" className="mb-4">
            ${product.price}
          </Heading>
          <Text size="sm">{product.description}</Text>
        </VStack>
        <Box className="flex-col sm:flex-row">
          <Button
            onPress={addToCart}
            className="px-4 py-2 mr-0 mb-3 sm:mr-3 sm:mb-0 sm:flex-1"
          >
            <ButtonText size="sm">Add to cart</ButtonText>
          </Button>
          <Button
            variant="outline"
            className="px-4 py-2 border-outline-300 sm:flex-1"
          >
            <ButtonText size="sm" className="text-typography-600">
              Wishlist
            </ButtonText>
          </Button>
        </Box>
      </Card>
    </Box>
  )
}

export default ProductDetails
