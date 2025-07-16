import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Button, ButtonSpinner, ButtonText } from '@/components/ui/button'
import products from '@/assets/products.json'
import ProductListItem from '@/components/ProductListItem'
import EvilIcons from '@expo/vector-icons/EvilIcons';

const Homepage = () => {
  return (
    <View>
      <FlatList contentContainerClassName='gap-2' numColumns={2} data={products} columnWrapperClassName='gap-2' renderItem={({item}) => (
        <ProductListItem product={item}/>
      )}/>
      <Button>
        <ButtonSpinner />
        <ButtonText>Button</ButtonText>
      </Button>
    </View>
  )
}

export default Homepage

const styles = StyleSheet.create({})