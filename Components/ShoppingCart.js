import {StyleSheet, Text, View, ScrollView, SafeAreaView} from 'react-native';
import React from 'react';

const ShoppingCart = () => {
  const cartData = [
    {name: 'Iphone 12', stock: 5, inStock: true, id: 100, price: 30},
    {name: 'Iphone 11', stock: 15, inStock: true, id: 200, price: 30},
    {name: 'Iphone 10', stock: 0, inStock: false, id: 300, price: 30},
    {name: 'Iphone 12', stock: 5, inStock: true, id: 400, price: 30},
    {name: 'Iphone 11', stock: 15, inStock: true, id: 500, price: 30},
    {name: 'Iphone 10', stock: 0, inStock: false, id: 600, price: 30},
    {name: 'Iphone 12', stock: 5, inStock: true, id: 700, price: 30},
    {name: 'Iphone 11', stock: 15, inStock: true, id: 800, price: 30},
    {name: 'Iphone 10', stock: 0, inStock: false, id: 900, price: 30},
    {name: 'Iphone 12', stock: 5, inStock: true, id: 110, price: 30},
    {name: 'Iphone 11', stock: 15, inStock: true, id: 1200, price: 30},
    {name: 'Iphone 10', stock: 0, inStock: false, id: 4300, price: 30},
  ];
  return (
    <SafeAreaView>
      <View style={styles.products}>
        <Text>ShoppingCart</Text>
        {cartData.map(item => (
          <View key={item.id}>
            <Text>{item.name}</Text>
            <Text>{item.price}</Text>
          </View>
        ))}
      </View>
      <Text style={styles.bill}>THE TOTAL BILL IS $50</Text>
    </SafeAreaView>
  );
};

export default ShoppingCart;

const styles = StyleSheet.create({
  products: {borderColor: 'red', borderWidth: 2, margin: 5},
  bill: {fontSize: 24, fontWeight: 'bold', margin: 10, alignSelf: 'center'},
});
