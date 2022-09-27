import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  Button,
  ScrollView,
  View,
} from 'react-native';
import {developmentCounter} from './Redux/Actions/action';
import {developmentCounterAsync} from './Redux/Actions/action';
import {useSelector, useDispatch} from 'react-redux';
import {useState} from 'react';
import ProductList from './Components/ProductList';
import ShoppingCart from './Components/ShoppingCart';
import AppHeader from './Components/AppHeader';

const App = () => {
  const dispatch = useDispatch();
  const dummyData = useSelector(balls => balls.cartData);
  const originalCount = useSelector(balls => balls.countingDemo);

  const demoPress = () => {
    dispatch(developmentCounter(1));
  };

  const demoPressAsync = () => {
    dispatch(developmentCounterAsync(4));
  };

  return (
    <SafeAreaView>
      <ScrollView>
        <Text>HELLOsdsdsf</Text>
        <Button
          onPress={demoPress}
          title="dev count"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
        <Button
          onPress={demoPressAsync}
          title="dev count async"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
        <Text>{originalCount}</Text>

        <Text>This is the value of what I am adding to the count: 1</Text>
        <View>
          <Text>API fetch request</Text>
          {/* <Button
            onPress={}
            title="FetchAPI"
            color="#841584"
            accessibilityLabel="Learn more about this purple button"
          /> */}
        </View>

        <AppHeader />
        <ProductList />
        <ShoppingCart />
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
