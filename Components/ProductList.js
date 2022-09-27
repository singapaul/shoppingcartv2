import {StyleSheet, Text, View, Button} from 'react-native';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useEffect} from 'react';
import {productsList} from '../Redux/Actions/action';

const ProductList = () => {
  let inventory = [
    {name: 'Iphone 12', stock: 5, inStock: true, id: 100},
    {name: 'Iphone 11', stock: 15, inStock: true, id: 200},
    {name: 'Iphone 10', stock: 0, inStock: false, id: 300},
  ];

  return (
    <>
      <View>
        <Button title="empty cart" onPress={console.log(0)} />
        <View>
          {inventory.map(item => (
            <View style={styles.product} key={item.id}>
              <Text>Name: {item.name}</Text>
              <View style={styles.buttons}>
                <Button onPress={console.log(0)} title="Add to cart" />
                <Button onPress={console.log(0)} title="Remove from cart" />
              </View>
            </View>
          ))}
        </View>
      </View>
    </>
  );
};

export default ProductList;

const styles = StyleSheet.create({
  product: {
    borderColor: 'red',
    borderWidth: 2,
    margin: 5,
  },

  buttons: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
});
