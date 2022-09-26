import React from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';
import {useState} from 'react';
import {useSelector} from 'react-redux';

const App = () => {
  const dummyData = useSelector(balls => balls.cartData);

  console.log('This is the default state' + dummyData);
  return (
    <SafeAreaView>
      <Text>HELLOsdsdsf</Text>
    </SafeAreaView>
  );
};

export default App;
