import React from 'react';
import {SafeAreaView, StyleSheet, Text, Button} from 'react-native';
import {developmentCounter} from './Redux/Actions/action';
import {useSelector, useDispatch} from 'react-redux';
import {useState} from 'react';

const App = () => {
  const dispatch = useDispatch();
  const dummyData = useSelector(balls => balls.cartData);
  const originalCount = useSelector(balls => balls.countingDemo);
  const [stateQQ, setState] = useState(13);

  const demoPress = () => {
    const increaseVal = 2;
    dispatch(developmentCounter(stateQQ));
  };

  return (
    <SafeAreaView>
      <Text>HELLOsdsdsf</Text>
      <Button
        onPress={demoPress}
        title="Learn More"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      />
      <Text>{originalCount}</Text>

      <Text>This is the value of what I am adding to the count: {stateQQ}</Text>
    </SafeAreaView>
  );
};

export default App;
