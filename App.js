import React, {useEffect} from 'react';
import {SafeAreaView, Text, Button, ScrollView, View} from 'react-native';
import {developmentCounter} from './Redux/Actions/action';
import {developmentCounterAsync} from './Redux/Actions/action';
import {demoFetchAction} from './Redux/Actions/action';
import {useSelector, useDispatch} from 'react-redux';
import ProductList from './Components/ProductList';
import ShoppingCart from './Components/ShoppingCart';
import AppHeader from './Components/AppHeader';
import {fetchData} from './Redux/API/api';
import axios from 'axios';
import {useState} from 'react';

const App = () => {
  const dispatch = useDispatch();
  // How to access data form the store
  const originalCount = useSelector(balls => balls.countingDemo);

  const demoPress = () => {
    dispatch(developmentCounter(1));
  };

  const demoPressAsync = () => {
    dispatch(developmentCounterAsync(4));
  };

  const demoPressFetchAP = () => {
    dispatch(demoFetchAction());
  };

  useEffect(() => {
    fetchDataV2();
  }, []);

  const fetchDataV2 = async () => {
    try {
      const response = await fetch('http://localhost:4000/stocklist');
      console.log(response);
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.log('we hit error');
      console.log(error);
    }
  };

  const [beers, setBeers] = useState([{name: 'beer 1'}, {name: 'beer 2'}]);

  return (
    <SafeAreaView>
      <ScrollView>
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
          {beers.map(item => (
            <View key={item.id}>
              <Text>{item.name}</Text>
              <Text>{item.price}</Text>
            </View>
          ))}
          <Button
            onPress={fetchDataV2}
            title="FetchAPI"
            color="#841584"
            accessibilityLabel="Learn more about this purple button"
          />
        </View>
        <View>
          <Text>REACT NATIVE OFFICIAL GUIDE</Text>
        </View>
        <View style={{flex: 1, padding: 24}}></View>

        <AppHeader />
        <ProductList />
        <ShoppingCart />
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
